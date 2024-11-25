// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    medicalHistory: { type: String },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Patient', patientSchema);