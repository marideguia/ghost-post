import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Logo from './Ghost_Post_Logo.png'
export const SidebarData = [
  {
    title: " ",
    icon: <img src={Logo}/>,
    link: "../Home",
    clssname: "logo"
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "../Home",
    clssname: 'nav-text'
  },
  {
    title: "Sessions",
    icon: <AssignmentIcon />,
    link: "../ArchPosts",
    clssname: 'nav-text'
  },
  // {
  //   title: "Courses",
  //   icon: <MenuBookIcon />,
  //   link: "../Posts",
  //   clssname: 'nav-text'
  // },
  {
    title: "Calendar",
    icon: <DateRangeIcon />,
    link: "../OurCalendar",
    clssname: 'nav-text'
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "../Settings",
    clssname: 'nav-text'
  }
]

export default SidebarData;
