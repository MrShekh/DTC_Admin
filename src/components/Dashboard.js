import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  DirectionsBus,
  Route,
  Group,
  AccessTime,
} from '@mui/icons-material';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data for the chart (replace with real data)
  const routePerformanceData = [
    { name: 'Route 1', onTime: 85, delayed: 15 },
    { name: 'Route 2', onTime: 78, delayed: 22 },
    { name: 'Route 3', onTime: 92, delayed: 8 },
    { name: 'Route 4', onTime: 88, delayed: 12 },
    { name: 'Route 5', onTime: 76, delayed: 24 },
  ];

  // Aggregate totals
  const totalOnTime = routePerformanceData.reduce((acc, route) => acc + route.onTime, 0);
  const totalDelayed = routePerformanceData.reduce((acc, route) => acc + route.delayed, 0);

  const pieChartData = [
    { name: 'On Time', value: totalOnTime },
    { name: 'Delayed', value: totalDelayed },
  ];

  const pieColors = ['#4caf50', '#f44336']; // green, red

  return (
    <div className="dashboard-container">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Key Metrics */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="metric-card">
            <CardContent>
              <DirectionsBus fontSize="large" color="primary" />
              <Typography variant="h6">Total Active Buses</Typography>
              <Typography variant="h4">1,250</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="metric-card">
            <CardContent>
              <Route fontSize="large" color="primary" />
              <Typography variant="h6">Total Active Routes</Typography>
              <Typography variant="h4">85</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="metric-card">
            <CardContent>
              <Group fontSize="large" color="primary" />
              <Typography variant="h6">Crew Members on Duty</Typography>
              <Typography variant="h4">2,500</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="metric-card">
            <CardContent>
              <AccessTime fontSize="large" color="primary" />
              <Typography variant="h6">On-Time Performance</Typography>
              <Typography variant="h4">92%</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Real-time Monitoring */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Real-time Fleet Status
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">In Service</Typography>
                  <Typography variant="h5">980</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">In Maintenance</Typography>
                  <Typography variant="h5">45</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Available</Typography>
                  <Typography variant="h5">225</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Crew Status */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Crew Status
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">On Duty</Typography>
                  <Typography variant="h5">2,500</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">On Break</Typography>
                  <Typography variant="h5">150</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Available</Typography>
                  <Typography variant="h5">350</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart for Route Performance */}
        {/* Pie Charts for Route Performance */}
<Grid item xs={12}>
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Overall Route Performance
      </Typography>
      <Grid container spacing={2}>
        {/* Pie Chart 1: On Time vs Delayed */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" align="center">On-Time vs Delayed</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-ontime-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>

        {/* Pie Chart 2: Delayed by Route */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" align="center">Delays by Route</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={routePerformanceData.map(({ name, delayed }) => ({ name, value: delayed }))}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {routePerformanceData.map((_, index) => (
                  <Cell key={`cell-delayed-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Grid>

      </Grid>
    </div>
  );
};

export default Dashboard;
