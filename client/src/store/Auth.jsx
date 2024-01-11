import { useContext, createContext, useState } from "react";
import React from "react";
import axios from 'axios'
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null);
    const AuthorizeToken = `Bearer ${token}`
    const [isLoading , setIsLoading] = useState(true);

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
      }
      
      let isLoggedIn = !!token;
      
      const LogOutUser = () => {
        setUser(null)
        setToken('')
        toast.success("Logout Successfully")
        return localStorage.removeItem("token")
    }

    const userAuthentication = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("http://localhost:3000/api/auth/user", {
          headers:{
            Authorization: AuthorizeToken
          },
        });
        setUser(response.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error);
        setUser(null)
      }
    }

      useEffect(() => {
        userAuthentication();
      }, [token]);

    return (
      <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, LogOutUser, user, AuthorizeToken, isLoading }}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
}