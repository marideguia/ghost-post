import { FaRegBell } from 'react-icons/fa'
import React, { useEffect, useState } from 'react';

// Session header
const Header = ({title}) => {
  return (    
    <header className="sHeader">
      <h1>{title}</h1>

      {/* Notifications */}
      <div className="bell">
        <FaRegBell onClick={() => console.log("notification bell clicked")} style={{cursor:'pointer'}} />
      </div>
      
    </header>
  )
}

export default Header