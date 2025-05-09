const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    type: { type: String, required: true }, // e.g., fire, accident
    description: { type: String },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    reportedAt: { type: Date, default: Date.now },
    verified: { type: Boolean, default: false },
});

module.exports = mongoose.model('Incident', IncidentSchema);
