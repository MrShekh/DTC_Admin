import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import './BusDetail.css';
import busImage from '../assets/Bus1.png';

// Custom marker icon for bus location
const icon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

// Custom marker icon for stations
const stationIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [20, 30],
  iconAnchor: [12, 30],
  popupAnchor: [0, -30],
});

const BusDetail = () => {
  const { id } = useParams();

  // Example bus data
  const busDetails = {
    1: {
      id: 1,
      from: 'Delhi',
      to: 'Noida',
      time: '12:00 PM',
      active: true,
      busType: 'Volvo AC',
      driver: 'Rahul kumar',
      conductor: 'Pushkar Singh',
      speed: 60,
      fuel: 40,
      km: 120,
      passenger: 45,
    },
    2: {
      id: 2,
      from: 'Delhi',
      to: 'Agra',
      time: '02:30 PM',
      active: false,
      busType: 'Non-AC',
      driver: 'Sohel',  
      conductor: 'Vanraj ',
      speed: 80,
      fuel: 60,
      km: 150,
      passenger: 50,
    },
  };

  const bus = busDetails[id];

  if (!bus) {
    return <div>Bus details not found</div>;
  }

  const routeCoordinates = [
    [23.101, 72.589], // Delhi
    [23.001, 72.499], // Intermediate station
    [22.833, 72.367], // Noida
  ];

  return (
    <div className="bus-detail-container">
      {/* Left Section - Current Status and Future Shift */}
      <div className="bus-detail-left">
        {/* Current Location Section */}
        <div className="current-location">
          <h3>Bus Route</h3>
          <ul>
            <li><strong>Source:</strong> {bus.from}</li>
            <li><strong>Current Station:</strong> ABC Station</li>
            <li><strong>Destination:</strong> {bus.to}</li>
          </ul>

          {/* Visualization of the route */}
          <div className="route-visualization">
            <div className="station">
              <span>Start: {bus.from}</span>
            </div>
            <div className="station">
              <span>Station: ABC</span>
            </div>
            <div className="station">
              <span>Station: XYZ</span>
            </div>
            <div className="station">
              <span>End: {bus.to}</span>
            </div>
          </div>
        </div>

        {/* Future Shift Section */}
        <div className="future-shift">
          <h3>Future Shift</h3>
          <div className="shift-item">
            <strong>Shift 1:</strong> ABC Station - 1:00 PM
          </div>
          <div className="shift-item">
            <strong>Shift 2:</strong> XYZ Station - 2:30 PM
          </div>
          <div className="shift-item">
            <strong>Shift 3:</strong> PQR Station - 3:00 PM
          </div>
          <div className="shift-item">
            <strong>Shift 4:</strong> LMN Station - 4:15 PM
          </div>
          <div className="shift-item">
            <strong>Shift 5:</strong> DEF Station - 5:00 PM
          </div>
          <div className="shift-item">
            <strong>Shift 6:</strong> GHI Station - 6:30 PM
          </div>
        </div>
      </div>

      {/* Middle Section - Bus Image and Info */}
      <div className="bus-detail-middle">
        <div className="bus-image-container">
          <img
             src={busImage}// Replace with actual bus image
            alt="Bus"
            className="bus-image"
          />
        </div>

        {/* Metrics Section */}
        <div className="bus-metrics">
          <div className="metric-container">
            <span>Speed</span>
            <strong>{bus.speed} km/h</strong>
          </div>
          <div className="metric-container">
            <span>Fuel</span>
            <strong>{bus.fuel} %</strong>
          </div>
          <div className="metric-container">
            <span>Kilometers</span>
            <strong>{bus.km} km</strong>
          </div>
          <div className="metric-container">
            <span>Passengers</span>
            <strong>{bus.passenger}</strong>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bus-info-container">
          <div className="info-item">
            <span>Bus Type</span>
            <strong>{bus.busType}</strong>
          </div>
          <div className="info-item">
            <span>Status</span>
            <strong>{bus.active ? 'Active' : 'Inactive'}</strong>
          </div>
          <div className="info-item">
            <span>Driver</span>
            <strong>{bus.driver}</strong>
          </div>
          <div className="info-item">
            <span>Conductor</span>
            <strong>{bus.conductor}</strong>
          </div>
        </div>
      </div>

      {/* Right Section - Map and Driver/Conductor Info */}
      <div className="bus-detail-right">
        {/* Map Container */}
        <div className="map-section">
          <MapContainer
            center={[28.7041, 77.1025]} // Coordinates for starting point
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={routeCoordinates[0]} icon={icon}>
              <Popup>Bus Location: {bus.from}</Popup>
            </Marker>
            <Marker position={routeCoordinates[1]} icon={stationIcon}>
              <Popup>ABC Station</Popup>
            </Marker>
            <Marker position={routeCoordinates[2]} icon={stationIcon}>
              <Popup>Dholka</Popup>
            </Marker>
            <Polyline positions={routeCoordinates} color="blue" />
          </MapContainer>
        </div>

        {/* Driver and Conductor Information Section */}
        <div className="driver-info-section">
          <h3>Driver Information</h3>
          <p><strong>Name:</strong> {bus.driver}</p>
          <p><strong>Contact:</strong> 123-456-7890</p>
          <button className="call-driver-btn">Call Driver</button>
        </div>
        <div className="conductor-info-section">
          <h3>Conductor Information</h3>
          <p><strong>Name:</strong> {bus.conductor}</p>
          <p><strong>Contact:</strong> 098-765-4321</p>
          <button className="call-conductor-btn">Call Conductor</button>
        </div>
      </div>
    </div>
  );
};

export default BusDetail;
