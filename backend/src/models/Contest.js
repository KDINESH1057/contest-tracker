const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    participants: {
        type: [String],
        default: [],
    },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed'],
        default: 'upcoming',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contest = mongoose.model('Contest', contestSchema);

module.exports = Contest;