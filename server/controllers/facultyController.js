const Faculty = require('../models/faculty');
const Student = require('../models/students');
const Subject = require('../models/subject');
const Marks = require('../models/marks');
const jwt = require('jsonwebtoken');
const sendEmail = require('../config/nodemailer');
const Noty = require('noty');
var ObjectID = require('mongodb').ObjectID;
const subject = require('../models/subject');

module.exports = {
    addFaculty: async (req, res, next) => {
        try {
            const { name, email, designation, password, joiningYear, facultyMobileNumber, dob, gender } = req.body
            const faculty = await Faculty.findOne({ email })
            if (faculty) {
                return res.status(400).json({ message: "Email already exists" });

            }
            const newFaculty = await new Faculty({
                name,
                email,
                designation,
                password,
                facultyMobileNumber,
                gender,
                dob,
                joiningYear
            })
            await newFaculty.save()
            
            res.status(200).json({ result: newFaculty });
            res.redirect('/login')
        }
        catch (err) {
            res.status(400).json({ message: `error in adding new Faculty", ${err.message}` })
        }
    },

    facultyLogin: async (req, res) => {

        try {
            const { email, password } = req.body
            const faculty = await Faculty.findOne({ email });
            if (!faculty || faculty.password != password) {
                return res.json(422, {
                    message: "Invalid Username or Password"
                });
            }
            return res.json(200, {
                message: "Sign In successful, here is your token, please keep it safe ",
                data: {
                    token: jwt.sign(faculty.toJSON(), 'codeial', { expiresIn: '100000' })
                }
            })

        } catch (err) {
            console.log('******', err);
            return res.json(500, {
                message: "Internal Server Error",
            });
        }

    },

    addStudent: async (req, res, next) => {
        try {
            const { name, email, year, fatherName,
                gender, dob, studentMobileNumber,
                fatherMobileNumber } = req.body

            const student = await Student.findOne({ email })
            if (student) {
                return res.status(400).json({
                    message: "student is already added"
                })
            }

            const newStudent = await new Student({
                name,
                email,
                year,
                fatherName,
                gender,
                dob,
                studentMobileNumber,
                fatherMobileNumber
            })
            await newStudent.save()
    
            res.status(200).json({ result: newStudent })
        }
        catch (err) {
            res.status(400).json({ message: `error in adding new student", ${err.message}` })
        }

    },

    getStudentSubjects: async (req, res, next) => {
        try {

            const id = req.query.id;
            
            const student = await Student.findOne({ "_id": id });

            const year = student.year;
            const subjects = await Subject.find({ year })
            
            res.status(200).json(subjects);
        }
        catch (err) {
            res.status(400).json({ message: `error in fetching subjects", ${err.message}` });
        }
    },

    addStudentSubjects: async (req, res, next) => {
        try {

            const id = req.body.id;
            const selected = req.body.selected;

            var myquery = { _id: id };

            for(const item in selected){

                var newvalues = { $push: { subjects: selected[item] } };
                Student.updateOne(myquery, newvalues, function (err, res) {
                    if (err) { console.log(err); }
                    else {
                        console.log("1 document updated");
                    }
                });
            }

            res.status(200).json({ message: "Subjects added to the Database" });
        }
        catch (err) {
            res.status(400).json({ message: `error in Adding Subjects", ${err.message}` });
        }
    },


    getAllStudents: async (req, res, next) => {
        try {
            const students = await Student.find({})
            if (students.length === 0) {
                return res.status(404).json({ message: "No students found" })
            }
            res.status(200).json(students);
        }
        catch (err) {
            res.status(400).json({ message: `error in getting all student", ${err.message}` })
        }

    },

    addSubject: async (req, res, next) => {
        try {

            const { totalLectures, subjectCode,
                subjectName, year } = req.body
            const subject = await Subject.findOne({ subjectCode })
            if (subject) {
                return res.status(400).json({
                    message: "subject is already added"
                })
            }
            const newSubject = await new Subject({
                totalLectures,
                subjectCode,
                subjectName,
                year
            })
            await newSubject.save()
            res.status(200).json({ result: newSubject });
        }
        catch (err) {
            console.log(`error in adding new subject", ${err.message}`)
        }
    },

    getAllSubjects: async (req, res, next) => {
        try {
            const allSubjects = await Subject.find({})
            if (!allSubjects) {
                return res.status(404).json({ message: "You havent registered any subject yet." })
            }
            res.status(200).json(allSubjects)
        }
        catch (err) {
            res.status(400).json({ message: `error in getting all Subjects", ${err.message}` })
        }
    },

    uploadMarks: async (req, res, next) => {
        try {
            const { subjectCode, subjectName, student, totalMarks, marks } = req.body

            const isAlready = await Marks.find({ student, subjectCode })
            if (isAlready.length !== 0) {

                return res.status(400).json({ message: "You have already uploaded marks of this subject" });
            }

            const newMarks = await new Marks({
                student,
                subjectCode,
                subjectName,
                marks,
                totalMarks
            })
            await newMarks.save()
            alert("Marks Uploaded Successfully");
            res.status(200).json({ message: "Marks uploaded successfully" })

        }
        catch (err) {
            console.log(`Error in uploading marks",${err.message}`)
        }

    },

    sendResult: async (req, res) => {
        try {
            const { email, marks, totalMarks, subjectName } = req.body;
            await sendEmail(email, marks, totalMarks, subjectName);
            alert("Mail Sent Successfully");
            res.status(200).json({ message: "mail sent successfully" });

        }

        catch (err) {
            res.status(400).json({ message: `error in sending email", ${err.message}` })
        }
    }


}