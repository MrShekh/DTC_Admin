import React, { useState } from 'react';
import './ResourceManagement.css';

const ResourceManagement = () => {
    const [vehicles, setVehicles] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Sample data - this would normally come from an API
    const sampleVehicles = [
        { id: 1, regNumber: 'ABC123', type: 'Red Bus', status: 'Available', lastService: '2024-08-01', feedback: 'Great condition.' },
        { id: 2, regNumber: 'XYZ456', type: 'Blue Bus', status: 'In Service', lastService: '2024-09-15', feedback: 'Needs maintenance soon.' },
        { id: 3, regNumber: 'LMN789', type: 'Orange Bus', status: 'Available', lastService: '2024-07-25', feedback: 'No issues reported.' },
        { id: 4, regNumber: 'QRS234', type: 'Green Bus', status: 'In Service', lastService: '2024-09-20', feedback: 'Fuel efficiency is excellent.' },
        { id: 5, regNumber: 'TUV567', type: 'Red bus', status: 'Available', lastService: '2024-08-10', feedback: 'Comfortable for passengers.' },
        { id: 6, regNumber: 'WXY890', type: 'Blue Bus', status: 'In Service', lastService: '2024-09-18', feedback: 'Frequent breakdowns.' },
    ];

    const sampleDrivers = [
        { id: 1, name: 'John Doe', license: 'D123456', rating: 4.5, status: 'Available', feedback: 'Excellent service.' },
        { id: 2, name: 'Jane Smith', license: 'D654321', rating: 4.0, status: 'In Service', feedback: 'Very punctual.' },
        { id: 3, name: 'Mike Johnson', license: 'D789012', rating: 4.7, status: 'Available', feedback: 'Highly recommended.' },
        { id: 4, name: 'Sara Williams', license: 'D345678', rating: 4.2, status: 'In Service', feedback: 'Great communication skills.' },
        { id: 5, name: 'Emily Davis', license: 'D456789', rating: 4.8, status: 'Available', feedback: 'Very safe driver.' },
        { id: 6, name: 'David Brown', license: 'D567890', rating: 3.9, status: 'In Service', feedback: 'Needs improvement in timing.' },
    ];

    const sampleRoutes = [
        { id: 1, start: 'Station A', end: 'Station B', distance: '10 km', averageTime: '30 mins', feedback: 'Smooth route.' },
        { id: 2, start: 'Station B', end: 'Station C', distance: '15 km', averageTime: '45 mins', feedback: 'Heavy traffic often.' },
        { id: 3, start: 'Station C', end: 'Station D', distance: '8 km', averageTime: '20 mins', feedback: 'Short and efficient.' },
        { id: 4, start: 'Station A', end: 'Station E', distance: '25 km', averageTime: '1 hr', feedback: 'Scenic route, popular with tourists.' },
        { id: 5, start: 'Station E', end: 'Station F', distance: '30 km', averageTime: '1.5 hrs', feedback: 'Occasional delays due to road work.' },
        { id: 6, start: 'Station D', end: 'Station F', distance: '12 km', averageTime: '35 mins', feedback: 'Well-maintained road.' },
    ];

    // Fetch data
    const fetchResources = () => {
        setVehicles(sampleVehicles);
        setDrivers(sampleDrivers);
        setRoutes(sampleRoutes);
    };

    // Handle Search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="resource-management">
            <h2>Resource Management</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="resources-container">
                <div className="resource-section">
                    <h3>Vehicles</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Registration Number</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Last Service</th>
                                <th>User Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicles.filter(vehicle => vehicle.regNumber.includes(searchTerm)).map(vehicle => (
                                <tr key={vehicle.id}>
                                    <td>{vehicle.regNumber}</td>
                                    <td>{vehicle.type}</td>
                                    <td>{vehicle.status}</td>
                                    <td>{vehicle.lastService}</td>
                                    <td>{vehicle.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="resource-section">
                    <h3>Drivers</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>License</th>
                                <th>Rating</th>
                                <th>Status</th>
                                <th>User Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drivers.filter(driver => driver.name.toLowerCase().includes(searchTerm.toLowerCase())).map(driver => (
                                <tr key={driver.id}>
                                    <td>{driver.name}</td>
                                    <td>{driver.license}</td>
                                    <td>{driver.rating}</td>
                                    <td>{driver.status}</td>
                                    <td>{driver.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="resource-section">
                    <h3>Routes</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Start</th>
                                <th>End</th>
                                <th>Distance</th>
                                <th>Average Time</th>
                                <th>User Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.filter(route => route.start.toLowerCase().includes(searchTerm.toLowerCase()) || route.end.toLowerCase().includes(searchTerm.toLowerCase())).map(route => (
                                <tr key={route.id}>
                                    <td>{route.start}</td>
                                    <td>{route.end}</td>
                                    <td>{route.distance}</td>
                                    <td>{route.averageTime}</td>
                                    <td>{route.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <button onClick={fetchResources} className="fetch-button">Fetch Resources</button>
        </div>
    );
};

export default ResourceManagement;
