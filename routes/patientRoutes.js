// routes/patientRoutes.js
const express = require('express');
const { createPatient, getPatients, updatePatient, deletePatient } = require('../controllers/patientController');
const { verifyToken, isAdmin, isDoctor } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, isAdmin, createPatient);
router.get('/', verifyToken, getPatients);
router.put('/:id', verifyToken, isDoctor, updatePatient);
router.delete('/:id', verifyToken, isAdmin, deletePatient);

module.exports = router;