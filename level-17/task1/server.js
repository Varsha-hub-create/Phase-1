const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connected successfully');
})
.catch((error) => {
    console.error('❌ MongoDB connection error:', error);
});

// Simple route
app.get('/', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.send('Connected to MongoDB');
    } else {
        res.send('Not connected to MongoDB');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
