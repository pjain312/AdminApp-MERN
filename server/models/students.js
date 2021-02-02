const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    subjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject'
        }
    ],
    fatherName: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String,
        required: true
    },
    studentMobileNumber: {
        type: Number
    },
    fatherMobileNumber: {
        type: Number
    }
})


module.exports = mongoose.model('student',studentSchema);
