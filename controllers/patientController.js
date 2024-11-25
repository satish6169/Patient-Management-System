// controllers/patientController.js
const Patient = require('../models/Patient');

// Create Patient Record
exports.createPatient = async (req, res) => {
    const patient = new Patient(req.body);
    try {
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ message: 'Error creating patient record', error });
    }
};

// Read Patient Records
exports.getPatients = async (req, res) => {
    const patients = await Patient.find();
    res.status(200).json(patients);
};

// Update Patient Record
exports.updatePatient = async (req, res) => {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
};

// Delete Patient Record
exports.deletePatient = async (req, res) => {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(204).send();
};