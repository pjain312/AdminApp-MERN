import React, {useState} from 'react';
import '../style/form.css';
import {connect} from 'react-redux';
import {uploadMarks, sendMail} from '../actions/actions'

const UploadMarks = ({uploadMarks, sendMail}) =>{
    const[subjectCode, setSubjectCode] = useState("");
    const[subjectName, setSubjectName] = useState("");
    const[email, setEmail] = useState("");
    const[marks, setMarks] = useState("");
    const[totalMarks, setTotalMarks] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const mark = {
            subjectCode,
            subjectName,
            email,
            marks,
            totalMarks
        };
        const values= {
            subjectName,
            email,
            marks,
            totalMarks
        };

        uploadMarks(mark);
        sendMail(values);
        setEmail("");
        setMarks("");
        setSubjectCode("");
        setSubjectName("");
        setTotalMarks("");
    }

    return(
        <div className = "form">
        <form action="" method="POST" onSubmit = {handleSubmit}>
            <label htmlFor="subjectCode">Subject Code:</label>
            <input type="text" name="subjectCode" id="subjectCode" value = {subjectCode} onChange = { (e) => setSubjectCode(e.target.value)} />
            <label htmlFor="subjectName">Subject Name:</label>
            <input type="text" name="subjectName" id="subjectName" value = {subjectName} onChange = { (e) => setSubjectName(e.target.value)} />
            <label htmlFor="email">Student Email:</label>
            <input type="text" name="email" id="email" value = {email} onChange = { (e) => setEmail(e.target.value)}/>
            <label htmlFor="marks">Marks Obtained:</label>
            <input type="text" name="marks" id="marks" value = {marks} onChange = {(e) => setMarks(e.target.value)} />
            <label htmlFor="totalMarks">Total Marks:</label>
            <input type="text" name="totalMarks" id="totalMarks" value = {totalMarks} onChange = {(e) => setTotalMarks(e.target.value)} />
            
            <button type="submit" >Upload Marks</button> 
        </form>
        </div>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
    return{
        uploadMarks: (mark) => {
            dispatch(uploadMarks(mark));
          },
          sendMail : (values) => {
            dispatch(sendMail(values));
        },
    };
   
  };

export default connect(mapStateToProps, mapDispatchToProps)(UploadMarks);

