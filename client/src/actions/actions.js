import {ADD_FACULTY, ADD_STUDENT, ADD_SUBJECT, GET_STUDENTS, GET_SUBJECTS, SET_CURR_USER, UPLOAD_MARKS} from './action-types';
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export const setCurrUser = (user) =>{
    return{
        type: SET_CURR_USER,
        user
    };
}
export const login = (creds) => {
    return dispatch => {
        return axios.post('http://localhost:8000/api/v1/faculty-login', creds).then (res => {
            console.log("response :" , res.data.data.token);
            const token = res.data.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrUser(jwt.decode(token)));
        });
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrUser({}));
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
            console.log('error in fetching all subjects', err);
            
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
            console.log('error in fetching all students', err);
            
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
        }

    catch (err) {
        console.log('error in adding student', err);
        
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
        }

    catch (err) {
        console.log('error in adding faculty', err);
        
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
            }

        catch (err) {
            console.log('error in adding subject', err);
            
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
        }

        catch (err) {
            console.log('error in uploading marks', err);
            
        }
    }
}