const Faculty = require('../models/faculty');
const Student = require('../models/students');
const Subject = require('../models/subject');
const Marks = require('../models/marks');
const jwt = require('jsonwebtoken');

module.exports = {
    addFaculty: async (req, res, next) => {
        try {
            const { name, email, designation,password,joiningYear, facultyMobileNumber, dob, gender } = req.body
            const faculty = await Faculty.findOne({ email })
            if (faculty) {
                errors.email = 'Email already exist'
                return res.status(400).json(errors)
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
            res.status(200).json({ result: newFaculty })
        }
        catch (err) {
            console.log("error", err.message)
            res.status(400).json({ message: `error in adding new Faculty", ${err.message}` })
        }
    },

    facultyLogin : async (req,res) =>{

        try{
            const {email, password} = req.body
            const faculty = await Faculty.findOne({email});
            if(!faculty || faculty.password != password){
                return res.json(422, {
                    message : "Invalid Username or Password"
                });
            }
            return res.json(200, {
                message: "Sign In successful, here is your token, please keep it safe ",
                data: {
                    token: jwt.sign(faculty.toJSON(), 'codeial', {expiresIn: '100000'})
                }
            })
    
        }catch(err){
            console.log('******', err);
            return res.json(500, {
                message : "Internal Server Error",
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
                    message:"student is already added"
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
            const subjects = await Subject.find({ year })
            if (subjects.length !== 0) {
                for (var i = 0; i < subjects.length; i++) {
                    newStudent.subjects.push(subjects[i]._id)
                }
            }
            await newStudent.save()
            res.status(200).json({ result: newStudent })
        }
        catch (err) {
            res.status(400).json({ message: `error in adding new student", ${err.message}` })
        }

    },

     getAllStudents: async (req, res, next) => {
        try {
            const students = await Student.find({})
            if (students.length === 0) {
                return res.status(404).json({ message: "No students found" })
            }
            res.status(200).json( students );
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
                    message:"subject is already added"
                })
            }
            const newSubject = await new Subject({
                totalLectures,
                subjectCode,
                subjectName,
                year
            })
            await newSubject.save()
            const students = await Student.find({ year })
            if (students.length === 0) {
                return res.status(400).json({
                    message: "No student for this year found"
                })
            }
            else {
                for (var i = 0; i < students.length; i++) {
                    students[i].subjects.push(newSubject._id)
                    await students[i].save()
                }
                res.status(200).json({ newSubject })
            }
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
            const { subject, student, totalMarks, marks} = req.body
            
            const isAlready = await Marks.find({ student,subject})
            if (isAlready.length !== 0) {
                
                return res.status(400).json({message: "You have already uploaded marks of this subject"});
            }
           
                const newMarks = await new Marks({
                    student,
                    subject,
                    marks,
                    totalMarks
                })
                await newMarks.save()
            
            res.status(200).json({message:"Marks uploaded successfully"})
        }
        catch (err) {
            console.log("Error in uploading marks",err.message)
        }
        
    }


}