import React, { useState } from 'react';
import { List, ListItem, ListItemText, Box, Typography, Avatar, Button, TextField, MenuItem } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // ✅ Correct import
import 'leaflet/dist/leaflet.css'; // Required CSS
import './Scheduling.css';



const drivers = [
  { id: 1, name: 'Connor Wilson', vehicle: 'Blue Mazda3', status: 'active', currentLocation: '1234 Hyperion Ave', pastLocation: '789 Franklin Ave', busId: 'B123', tripRoute: '1234 Bedford Ave to 567 Myrtle Ave', img: 'https://i.pravatar.cc/50?img=1' },
  { id: 2, name: 'Lauren Thompson', vehicle: 'Blue Mazda3', status: 'inactive', currentLocation: '1234 Silver Lake', pastLocation: '987 Bedford Ave', busId: 'B124', tripRoute: '1434 Street View Ave to 1234 Bedford Ave', img: 'https://i.pravatar.cc/50?img=2' },
  { id: 3, name: 'Madison Nguyen', vehicle: 'Black Nissan Altima', status: 'active', currentLocation: '134 Street View', pastLocation: 'West Street', busId: 'B125', tripRoute: 'NY 11220 to Myrtle Ave', img: 'https://i.pravatar.cc/50?img=3' },
  { id: 4, name: 'Ryan Miller', vehicle: 'BMW X5', status: 'inactive', currentLocation: '987 Hilltop Ave', pastLocation: 'Wall St', busId: 'B126', tripRoute: 'NY 11222 to Franklin Ave', img: 'https://i.pravatar.cc/50?img=4' },
  // Add more drivers here
];

const Scheduling = () => {
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredDrivers = drivers.filter((driver) => {
    return (
      driver.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === '' || driver.status === statusFilter)
    );
  });

  return (
    <Box display="flex" className="scheduling-container">
      {/* Left Section - Driver List */}
      <Box flex={1} className="driver-list">
        <Typography variant="h5" gutterBottom>
          All Drivers
        </Typography>

        {/* Search Bar */}
        <TextField
          label="Search Driver"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Filter Dropdown */}
        <TextField
          select
          label="Filter by Status"
          variant="outlined"
          fullWidth
          margin="normal"
          value={statusFilter}
          onChange={handleFilterChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>

        {/* Driver List */}
        <List>
          {filteredDrivers.map((driver) => (
            <ListItem
              button
              key={driver.id}
              onClick={() => handleDriverSelect(driver)}
              className={selectedDriver.id === driver.id ? 'selected-driver' : ''}
            >
              <Avatar src={driver.img} alt={driver.name} />
              <ListItemText
                primary={
                  <>
                    {driver.name} 
                    <span className={`driver-status ${driver.status}`}>
                      ({driver.status === 'active' ? 'Active' : 'Inactive'})
                    </span>
                  </>
                }
                secondary={`Vehicle: ${driver.vehicle}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Section - Driver Details and Map */}
      <Box flex={2} className="driver-details-map">
        {/* Driver Details in Multiple Side-by-Side Containers */}
        <Box className="driver-info-container">
          <Box className="driver-info-box">
            <Typography variant="body1"><strong>Driver:</strong> {selectedDriver.name}</Typography>
          </Box>

          <Box className="driver-info-box">
            <Typography variant="body1"><strong>Current Location:</strong> {selectedDriver.currentLocation}</Typography>
          </Box>

          <Box className="driver-info-box">
            <Typography variant="body1"><strong>Past Location:</strong> {selectedDriver.pastLocation}</Typography>
          </Box>

          <Box className="driver-info-box">
            <Typography variant="body1"><strong>Bus ID:</strong> {selectedDriver.busId}</Typography>
          </Box>

          <Box className="driver-info-box">
            <Typography variant="body1"><strong>Trip Route:</strong> {selectedDriver.tripRoute}</Typography>
          </Box>

          <Box className="driver-info-box">
            <Button variant="contained" color="secondary">
              Update Route
            </Button>
          </Box>
        </Box>

        {/* Google Maps Integration */}
      

<MapContainer center={[40.712776, -74.005974]} zoom={13} style={{ height: "400px", width: "100%" }}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={[40.712776, -74.005974]}>
    <Popup>{selectedDriver.name}'s current location</Popup>
  </Marker>
</MapContainer>

      </Box>
    </Box>
  );
};

export default Scheduling;
