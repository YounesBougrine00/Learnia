import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';


  import React from 'react'
  
  const AdminRoute = ({children}) => {

    const {user} =useSelector(state => state.auth)

    if(user?.admin){
        return children
    }else{
        return <Navigate to="/"/>
    }
 
    
  }
  
  export default AdminRoute