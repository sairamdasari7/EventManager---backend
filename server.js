const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
