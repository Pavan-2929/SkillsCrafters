import { useContext, createContext, useState } from "react";
import React from "react";
import axios from 'axios'
import { useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null);

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
      }
      
      let isLoggedIn = !!token;
      
      const LogOutUser = () => {
        setUser(null)
        setToken('')
        return localStorage.removeItem("token")
    }

    const userAuthentication = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/user", {
          headers:{
            Authorization: `Bearer ${token}`
          },
        });

        // console.log(response);
        setUser(response.data)
      } catch (error) {
        console.log(error);
        setUser(null)
      }
    }

      useEffect(() => {
        userAuthentication();
      }, [token]);

    return (
      <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, LogOutUser, user }}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
}