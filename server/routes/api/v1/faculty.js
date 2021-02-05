const express = require('express');
const router = express.Router();
const passport = require('passport');
const facultyController = require('../../../controllers/facultyController');

router.post('/add-faculty',facultyController.addFaculty);
router.post('/faculty-login',facultyController.facultyLogin);
router.post('/add-student' , facultyController.addStudent);
router.post('/add-subject' ,  facultyController.addSubject);
router.get('/getStudents' , facultyController.getAllStudents);
router.get('/getSubjects' ,  facultyController.getAllSubjects);
router.post('/uploadMarks',facultyController.uploadMarks);
router.post('/sendmail', facultyController.sendResult);
router.get ('/studentSubjects', facultyController.getStudentSubjects);
router.post('/addStudentSubjects', facultyController.addStudentSubjects);
router.get('/delete-student', facultyController.deleteStudent);
module.exports = router;

