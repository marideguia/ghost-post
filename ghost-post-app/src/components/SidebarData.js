import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "../App"
  },
  {
    title: "Session Log",
    icon: <AssignmentIcon />,
    link: "../App"
  },
  {
    title: "Courses",
    icon: <MenuBookIcon />,
    link: "../App"
  },
  {
    title: "Calendar",
    icon: <DateRangeIcon />,
    link: "../App"
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "../App"
  }
]

export default SidebarData;