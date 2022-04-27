import React, { useState } from 'react';
import "./Sidebar.css";
import {SidebarData} from './SidebarData';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconContext } from 'react-icons'


function SideBar() {
  const [sidebar, setSidebar] = useState(false)
  const nonMobileSidebar = useState(true)
  const showSidebar = () => setSidebar(!sidebar)
  const keepSidebar = () => setSidebar(!nonMobileSidebar)
  if (window.innerWidth <= 600){
    return (
      <>
      <IconContext.Provider value={{color:'gray'}}>
      <div className='SideBar'>
        
        <Link to="#" className='menu-bars'>
          <MenuIcon onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <ArrowBackIosIcon/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key = {index} className={item.clssname}>
                <Link to={item.link}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
      </>
    )
  }
  else{
    return (
      <>
      <IconContext.Provider value={{color:'gray'}}>
      <nav className={nonMobileSidebar ? 'nav-menu active-web' : 'nav-menu-web'}>
        <ul className='nav-menu-items' onClick={keepSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key = {index} className={item.clssname}>
                <Link to={item.link}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
      </>
    )
  }
  
}

export default SideBar
