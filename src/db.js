// src\db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/graphql-basic');
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
