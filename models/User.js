// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Patient', 'Doctor', 'Admin'], default: 'Patient' }
});

module.exports = mongoose.model('User', userSchema);