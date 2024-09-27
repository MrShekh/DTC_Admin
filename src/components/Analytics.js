import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { TextField, Button, Grid, Typography, Card, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './Analytics.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Analytics = () => {
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [sortOption, setSortOption] = useState('trips');

    const handleDateChange = (event) => {
        setDateRange({ ...dateRange, [event.target.name]: event.target.value });
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    // Example Data
    const driverActivityData = {
        labels: ['Driver A', 'Driver B', 'Driver C', 'Driver D'],
        datasets: [
            {
                label: 'Total Trips',
                data: [15, 25, 10, 30],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const tripStatusData = {
        labels: ['Completed', 'In-Progress', 'Cancelled'],
        datasets: [
            {
                label: 'Trip Status',
                data: [70, 20, 10],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
        ],
    };

    const averageTripTimeData = {
        labels: ['Average Trip Time (min)'],
        datasets: [
            {
                label: 'Average Trip Time',
                data: [30],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Driver Activity Summary',
            },
        },
    };

    return (
        <div className="analytics-container">
            <h1 className="analytics-title">Analytics Dashboard</h1>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="date"
                        name="start"
                        label="Start Date"
                        value={dateRange.start}
                        onChange={handleDateChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="date"
                        name="end"
                        label="End Date"
                        value={dateRange.end}
                        onChange={handleDateChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="sort-label">Sort By</InputLabel>
                        <Select
                            labelId="sort-label"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <MenuItem value="trips">Total Trips</MenuItem>
                            <MenuItem value="time">Average Trip Time</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="primary" fullWidth>
                        Apply
                    </Button>
                </Grid>

                {/* Driver Activity Summary Section */}
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="summary-card">
                            <Typography variant="h6">Driver Activity Summary</Typography>
                            <div className="chart-container">
                                <Bar data={driverActivityData} options={options} />
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="summary-card">
                            <Typography variant="h6">Trip Status Overview</Typography>
                            <div className="chart-container">
                                <Doughnut data={tripStatusData} options={options} />
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card className="summary-card">
                            <Typography variant="h6">Average Trip Time</Typography>
                            <div className="chart-container">
                                <Bar data={averageTripTimeData} options={options} />
                            </div>
                        </Card>
                    </Grid>
                </Grid>

                {/* Additional Sections */}
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="summary-card">
                            <Typography variant="h6">Geographical Analytics</Typography>
                            <Typography variant="body1">Heatmap of Trips: Displayed on map.</Typography>
                            <Typography variant="body1">Most Popular Routes: Route A, Route B.</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="summary-card">
                            <Typography variant="h6">Driver Performance</Typography>
                            <Typography variant="body1">Driver Leaderboard: Driver A, Driver B.</Typography>
                            <Typography variant="body1">Punctuality Score: Driver C - 90% on time.</Typography>
                            <Typography variant="body1">Idle Time: Driver D - 10 minutes.</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="summary-card">
                            <Typography variant="h6">Customer Satisfaction</Typography>
                            <Typography variant="body1">Average Ratings: Driver A - 4.8 stars.</Typography>
                            <Typography variant="body1">Common Feedback: Cleanliness, Speed.</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Analytics;
