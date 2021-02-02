const mongoose = require('mongoose');
const marksSchema = new mongoose.Schema({
    student: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        default: 0,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('marks', marksSchema);
