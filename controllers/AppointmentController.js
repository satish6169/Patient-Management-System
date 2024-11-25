// controllers/appointmentController.js
const Appointment = require('../models/Appointment');

// Create Appointment
exports.createAppointment = async (req, res) => {
    const appointment = new Appointment(req.body);
    try {
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: 'Error creating appointment', error });
    }
};

// Get Appointments
exports.getAppointments = async (req, res) => {
    const appointments = await Appointment.find().populate('patient doctor');
    res.status(200).json(appointments);
};

// Update Appointment
exports.updateAppointment = async (req, res) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json(appointment);
};

// Delete Appointment
exports.deleteAppointment = async (req, res) => {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(204).send();
};