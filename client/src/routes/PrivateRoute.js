import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';


  import React from 'react'
  
  const PrivateRoute = ({children}) => {

    const {user} =useSelector(state => state.auth)

    if(!user ){
        return <Navigate to="/"/>
    }else{
        return children
    }
 
    
  }
  
  export default PrivateRoute