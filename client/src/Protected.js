import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('UserID')
  if(user){
    return true
  } else {
    return false
  }
}

const  Protected=(props) =>{

  const auth=useAuth()

  return auth?<Outlet/>: <Navigate to="/Login"/>
}

export default Protected;