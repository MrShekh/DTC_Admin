import React, { useState } from 'react';
import './RouteManagement.css'; // CSS file for styling

const RouteManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const routes = [
    { id: 1, name: 'Route A', start: 'Station 1', end: 'Station 5', distance: '10 km', time: '20 mins' },
    { id: 2, name: 'Route B', start: 'Station 2', end: 'Station 6', distance: '15 km', time: '30 mins' },
    { id: 3, name: 'Route C', start: 'Station 3', end: 'Station 7', distance: '8 km', time: '15 mins' },
    { id: 4, name: 'Route D', start: 'Station 4', end: 'Station 8', distance: '12 km', time: '25 mins' },
    { id: 5, name: 'Route E', start: 'Station 5', end: 'Station 9', distance: '5 km', time: '10 mins' },
    { id: 6, name: 'Route F', start: 'Station 1', end: 'Station 3', distance: '7 km', time: '12 mins' },
    // Add more routes as needed
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="route-management">
      <h2>Manage Routes</h2>
      <div className="actions">
        <input
          type="text"
          placeholder="Search routes..."
          className="route-search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add-route-button">Add New Route</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Route Name</th>
            <th>Start Station</th>
            <th>End Station</th>
            <th>Distance</th>
            <th>Estimated Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes
            .filter(route =>
              route.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(route => (
              <tr key={route.id}>
                <td>{route.id}</td>
                <td>{route.name}</td>
                <td>{route.start}</td>
                <td>{route.end}</td>
                <td>{route.distance}</td>
                <td>{route.time}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RouteManagement;
