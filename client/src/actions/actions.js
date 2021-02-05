import {ADD_FACULTY, ADD_STUDENT, ADD_SUBJECT, GET_STUDENTS, GET_SUBJECTS,GET_STUDENT_SUBJECTS, SET_CURR_USER,
    DELETE_STUDENT, UPLOAD_MARKS,SEND_MAIL} from './action-types';
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import 'react-toastify/dist/ReactToastify.css';

export const setCurrUser = (user) =>{
    return{
        type: SET_CURR_USER,
        user
    };
}
export const login = (creds) => {
    return dispatch => {
        return axios.post('http://localhost:8000/api/v1/faculty-login', creds).then (res => {

            const token = res.data.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrUser(jwt.decode(token)));
            alert("You are logged in");
        });
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrUser({}));
        alert("You are logged out");
    }
}

export const getSubjects = () =>{
    return async (dispatch) => {
        try {
            const data  = await axios.get('http://localhost:8000/api/v1/getSubjects');
          
            dispatch({
                type: GET_SUBJECTS,
                payload: data.data
            });
        }

        catch (err) {
            console.log('error in fetching All subjects', err);
            
        }
    }
}


export const getStudents = () =>{
    return async (dispatch) => {
        try {
            const data  = await axios.get('http://localhost:8000/api/v1/getStudents');
            dispatch({
                type: GET_STUDENTS,
                payload: data.data
            });
        }

        catch (err) {
            console.log('error in fetching student students', err);
            
        }
    }
}

export const addStudent = (student) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/add-student', student);

            dispatch({
                type: ADD_STUDENT,
                payload: data
            });
            await alert("Student Added Successfully");

        }

    catch (err) {
        console.log('error in adding student', err);
        alert ("Email ID already registered");
    }
}
}

export const addFaculty = (faculty) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/add-faculty', faculty);

            dispatch({
                type: ADD_FACULTY,
                payload: data
            });
            await alert("Faculty Added Successfully");

        }
    catch (err) {
        console.log('error in adding faculty', err);
        alert("Email ID already registered");
    }
}
}


export const addSubject = (subject) => {
    return async (dispatch) => {
            try {
                const { data } = await axios.post('http://localhost:8000/api/v1/add-subject',subject);

                dispatch({
                    type: ADD_SUBJECT,
                    payload: data
                });
                await alert("Subject Added Successfully");

            }

        catch (err) {
            console.log('error in adding subject', err);
            alert("Subject already added");
        }
    }
    
}

export const getStudentSubjects = (id) => {
    return async (dispatch) => {
        try {
            const data  = await axios.get('http://localhost:8000/api/v1/studentSubjects',{
                params: {
                  id: id
                }
              });
            dispatch({
                type: GET_STUDENT_SUBJECTS,
                payload: data.data
            });
        }

        catch (err) {
            console.log('error in fetching students subjects', err);
            
        }
    }
}

export const addStudentSubjects = (id, selected) => {
    return async (dispatch) => {
        try {
            console.log("selected in action" , selected)
             await axios.post('http://localhost:8000/api/v1/addStudentSubjects',{
                id: id,
                selected:selected
            });
        
            await alert("Subjects Added Successfully");
        }

        catch (err) {
            console.log('error in Adding Student Subjects', err);
            
        }
    }
}

export const deleteStudent = (id) => {
    return async (dispatch) => {
        try {
            const data  = await axios.get('http://localhost:8000/api/v1/delete-student',{
                params: {
                  id: id
                }
              });
            dispatch({
                type: DELETE_STUDENT,
                payload: data.data
            });
            await alert("Student deleted successfully");
        }

        catch (err) {
            console.log('error in fetching students subjects', err);
            
        }
    }
}


export const uploadMarks = (mark) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/uploadMarks',mark);
            dispatch({
                type: UPLOAD_MARKS,
                payload: data
            });
            await alert("Marks Uploaded and Mail sent successfully");

        }
        catch (err) {
            console.log('error in uploading marks', err);
            alert("Marks Already uploaded for this subject");
        }
    }
}

export const sendMail = (values) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/sendmail', values);
            dispatch({
                type: SEND_MAIL,
                payload: data
            });


        }

        catch (err) {
            console.log('error in sending mail', err);
            
        }
    }
}
