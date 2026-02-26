require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// CORS Configuration - Allow frontend domain
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://kukreja-s-consultancy.onrender.com',
    'https://kukreja-consultancy.onrender.com'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/loan-inquiries', require('./routes/loanInquiries'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.BACKEND_PORT || process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api`);
});
