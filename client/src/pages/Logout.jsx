import React, { useEffect } from 'react'
import { useAuth } from '../store/Auth'
import { Navigate } from 'react-router-dom';

function Logout() {

    const {LogOutUser} = useAuth()
    
    useEffect(() => {
        LogOutUser();
    }, [LogOutUser])

  return <Navigate to='/login'/>
}

export default Logout
