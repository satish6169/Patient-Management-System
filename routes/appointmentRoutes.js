// routes/appointmentRoutes.js
const express = require('express');
const { createAppointment, getAppointments, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');
const { verifyToken, isAdmin, isDoctor, isPatient } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isPatient, createAppointment);
router.get('/', verifyToken, isAdmin, getAppointments);
router.put('/:id', verifyToken, isDoctor, updateAppointment);
router.delete('/:id', verifyToken, isAdmin, deleteAppointment);

module.exports = router;