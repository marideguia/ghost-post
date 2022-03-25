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
    link: "Login"
  },
  {
    title: "Session Log",
    icon: <AssignmentIcon />,
    link: "ArchPosts"
  },
  {
    title: "Courses",
    icon: <MenuBookIcon />,
    link: "Posts"
  },
  {
    title: "Calendar",
    icon: <DateRangeIcon />,
    link: "Calendar"
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "Settings"
  }
]

export default SidebarData;