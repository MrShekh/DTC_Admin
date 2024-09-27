import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import RouteIcon from '@mui/icons-material/Route';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'; // Power/Logout icon
import managerImage from '../assets/manager.png'; // Make sure the case matches

import './Sidebar.css';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Bus Details', icon: <BusAlertIcon />, path: '/bus-scheduling' },
    { text: 'Crew Management', icon: <DriveEtaIcon />, path: '/crew-management' },
    { text: 'Scheduling', icon: <ScheduleIcon />, path: '/scheduling' },
    { text: 'Route Management', icon: <RouteIcon />, path: '/route-management' },
    { text: 'Resource Management', icon: <BuildIcon />, path: '/resource-management' },
    { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
  ];

  return (
    <Drawer variant="permanent" anchor="left" className="sidebar-drawer">
      {/* Profile section */}
      <div className="sidebar-profile">
      <img src={managerImage} alt="User Avatar" className="profile-avatar" />

        <div className="profile-info">
          <h4>Admin</h4>
          <p>Session ends in 9 min 5 s</p>
        </div>
        <PowerSettingsNewIcon className="logout-icon" />
      </div>

      {/* Menu items */}
      <List className="sidebar-list">
        {menuItems.map((item, index) => (
          <ListItem button component={Link} to={item.path} key={index} className="sidebar-list-item">
            <ListItemIcon className="sidebar-list-icon">{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className="sidebar-list-text" />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
