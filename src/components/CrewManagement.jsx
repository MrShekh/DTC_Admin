import React, { useState } from 'react';
import './CrewManagement.css'; // CSS file for styling

const CrewManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const employees = [
    { name: 'Ryan Harris', jobTitle: 'Finance Manager', department: 'Finance' },
    { name: 'Michael King', jobTitle: 'HR Manager', department: 'HR' },
    { name: 'Deborah Brown', jobTitle: 'IT Helpdesk', department: 'IT' },
    { name: 'Jessica Green', jobTitle: 'Driver', department: 'Transport' },
    { name: 'Tom White', jobTitle: 'Conductor', department: 'Transport' },
    { name: 'Alice Johnson', jobTitle: 'Driver', department: 'Transport' },
    { name: 'Sarah Black', jobTitle: 'Conductor', department: 'Transport' },
    { name: 'Daniel Blue', jobTitle: 'Employee', department: 'Operations' },
    { name: 'Emma Stone', jobTitle: 'Employee', department: 'Operations' },
    // Add more employees as needed
  ];

  // Function to handle the role filter
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="crew-management">
      <h2>Manage Employee</h2>

      {/* Filter and Add Employee button */}
      <div className="filter-add-container">
        <select value={selectedRole} onChange={handleRoleChange} className="role-filter">
          <option value="">All Roles</option>
          <option value="driver">Driver</option>
          <option value="conductor">Conductor</option>
          <option value="employee">Employee</option>
        </select>
        <button className="add-employee-button">Add Employee</button>
      </div>

      {/* Employee Stats */}
      <div className="employee-stats">
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-info">
            <h3>Total Employee</h3>
            <p>{employees.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👤</div>
          <div className="stat-info">
            <h3>Active Employee</h3>
            <p>{employees.filter(emp => emp.jobTitle !== 'On Leave' && emp.jobTitle !== 'Onboarding').length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">😊</div>
          <div className="stat-info">
            <h3>On Leave</h3>
            <p>17</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>Onboarding</h3>
            <p>27</p>
          </div>
        </div>
      </div>

      {/* Employee List with Search Bar */}
      <div className="employee-list">
        <input 
          type="text" 
          placeholder="Search employee" 
          className="employee-search" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter(employee => 
                (selectedRole === '' || employee.jobTitle.toLowerCase() === selectedRole) && 
                employee.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((employee, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{employee.name}</td>
                  <td>{employee.jobTitle}</td>
                  <td>{employee.department}</td>
                  <td>
                    <button className="add-task-button">Add Task</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrewManagement;
