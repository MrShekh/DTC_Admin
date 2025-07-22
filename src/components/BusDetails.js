import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusDetails.css';
import busImage from '../assets/Bus1.png';

const BusScheduling = () => {
  const [schedules] = useState([
    { id: 1, busNumber: 'BUS001', from: 'Delhi', to: 'Noida', time: '12:00 PM', active: true },
    { id: 2, busNumber: 'BUS002', from: 'Delhi', to: 'Agra', time: '02:30 PM', active: false },
    { id: 3, busNumber: 'BUS003', from: 'Noida', to: 'Gurgaon', time: '04:00 PM', active: true },
    { id: 4, busNumber: 'BUS004', from: 'Gurgaon', to: 'Faridabad', time: '05:00 PM', active: false },
    { id: 5, busNumber: 'BUS005', from: 'Faridabad', to: 'Delhi', time: '06:00 PM', active: true },
    { id: 6, busNumber: 'BUS006', from: 'Agra', to: 'Delhi', time: '07:00 PM', active: true },
    { id: 7, busNumber: 'BUS007', from: 'Delhi', to: 'Jaipur', time: '08:00 PM', active: false },
    { id: 8, busNumber: 'BUS008', from: 'Jaipur', to: 'Delhi', time: '09:00 PM', active: true },
    // Add more schedules here as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const navigate = useNavigate();

  // Handle filtering based on search term and active/inactive status
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearchTerm =
      schedule.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.busNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.id.toString().includes(searchTerm);

    const matchesFilter = filterOption === '' || (filterOption === 'Active' ? schedule.active : !schedule.active);
    return matchesSearchTerm && matchesFilter;
  });

  // Navigate to detailed view of a specific bus schedule
  const handleViewDetails = (id) => {
    navigate(`/bus-detail/${id}`);
  };

  return (
    <div>
      <h2 className="title">Bus Details</h2>
      <div className="header-container">
        <div className="search-filter-container">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-dropdown">
            <select onChange={handleFilterChange} value={filterOption}>
              <option value="">Filter</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="schedules-grid">
        {filteredSchedules.map((schedule) => (
          <div key={schedule.id} className={`schedule-card ${schedule.active ? 'active' : 'inactive'}`}>
            <div className="image-container">
              <img src={busImage} alt="Bus" className="bus-image" />
            </div>
            <div className="schedule-details">
              <p className="depart-time">
                <span className="label">Departs at:</span> <strong>{schedule.time}</strong>
              </p>
              <p className="location">
                <span className="label">From:</span> <strong>{schedule.from}</strong>
              </p>
              <p className="location">
                <span className="label">To:</span> <strong>{schedule.to}</strong>
              </p>
              <p className="location">
                <span className="label">Bus Number:</span> <strong>{schedule.busNumber}</strong>
              </p>
              <p className={`status ${schedule.active ? 'active-status' : 'inactive-status'}`}>
                <span className="label">Status:</span> <strong>{schedule.active ? 'Active' : 'Inactive'}</strong>
              </p>
              <button className="view-button" onClick={() => handleViewDetails(schedule.id)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusScheduling;
