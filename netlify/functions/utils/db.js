const mongoose = require('mongoose');

let cachedDb = null;

const connectDB = async () => {
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }

  // Check if MONGODB_URI is defined
  if (!process.env.MONGODB_URI) {
    const error = new Error(
      'MONGODB_URI environment variable is not defined. ' +
      'Please add it in Netlify Dashboard: Site configuration → Environment variables'
    );
    console.error('❌ Configuration Error:', error.message);
    throw error;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    
    cachedDb = conn;
    console.log('✅ MongoDB Connected to:', process.env.MONGODB_URI.split('@')[1]?.split('/')[0] || 'database');
    return cachedDb;
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    throw error;
  }
};

module.exports = connectDB;
