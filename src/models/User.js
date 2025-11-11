import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema); // declare first
export default User; // then export
