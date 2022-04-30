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

const PublicRoutes=(props) =>{

  const auth=useAuth()

  return auth?<Navigate to="/Home"/>: <Outlet/>
}

export default PublicRoutes;