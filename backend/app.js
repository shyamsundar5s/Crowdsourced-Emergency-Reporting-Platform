const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const incidentsRoutes = require('./routes/incidents');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/incidents', incidentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
