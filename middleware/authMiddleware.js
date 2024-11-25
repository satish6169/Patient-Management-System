// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).send('Token is required');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
};

exports.isAdmin = (req, res, next) => {
    if (req.userRole !== 'Admin') {
        return res.status(403).send('Access denied');
    }
    next();
};

exports.isDoctor = (req, res, next) => {
    if (req.userRole !== 'Doctor') {
        return res.status(403).send('Access denied');
    }
    next();
};

exports.isPatient = (req, res, next) => {
    if (req.userRole !== 'Patient') {
        return res.status(403).send('Access denied');
    }
    next();
};