require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/db');
const recordRoutes = require('./routes/recordRoutes');
const app = express();

connectDB();

app.use(express.json());

// Routes
app.use('/api/records', recordRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));