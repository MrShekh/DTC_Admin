import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BusScheduling from './components/BusDetails';
import RouteManagement from './components/RouteManagement';
import ResourceManagement from './components/ResourceManagement';
import Analytics from './components/Analytics';
import BusDetail from './components/BusDetail';
import CrewManagement from './components/CrewManagement';
import Scheduling from './components/Scheduling'; // Import the new Scheduling component

import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bus-scheduling" element={<BusScheduling />} />
            <Route path="/route-management" element={<RouteManagement />} />
            <Route path="/resource-management" element={<ResourceManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/bus-detail/:id" element={<BusDetail />} />
            <Route path="/crew-management" element={<CrewManagement />} />
            <Route path="/scheduling" element={<Scheduling />} /> {/* New scheduling route */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
