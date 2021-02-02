const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
    subjectCode: {
        type: String,
        required: true
    },
    subjectName: {
        type: String,
        required: true,
        trim: true
    },
    totalLectures: {
        type: Number,
        default:30
    },
    year: {
        type: String,
        required: true 
    }
})



module.exports = mongoose.model('subject', subjectSchema);
