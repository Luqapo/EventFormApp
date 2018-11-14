const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    date: String
});

module.exports = mongoose.model('Event', EventSchema, 'Event');