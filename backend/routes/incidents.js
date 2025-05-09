const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// Get all incidents
router.get('/', async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.json(incidents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new incident
router.post('/', async (req, res) => {
    const { type, description, location } = req.body;

    const incident = new Incident({
        type,
        description,
        location,
    });

    try {
        const newIncident = await incident.save();
        res.status(201).json(newIncident);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
