require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/db');
const recordRoutes = require('./routes/recordRoutes');
const app = express();

connectDB();

app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.use('/', recordRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));