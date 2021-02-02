import React, {useState} from 'react';
import '../style/form.css';
import {connect} from 'react-redux';
import {uploadMarks} from '../actions/actions'

const UploadMarks = ({uploadMarks}) =>{
    const[subject, setSubject] = useState("");
    const[student, setStudent] = useState("");
    const[marks, setMarks] = useState("");
    const[totalMarks, setTotalMarks] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const mark = {
            subject,
            student,
            marks,
            totalMarks
        };

        uploadMarks(mark);
        setStudent("");
        setMarks("");
        setSubject("");
        setTotalMarks("");
    }

    return(
        <div className = "form">
        <form action="" method="POST" onSubmit = {handleSubmit}>
            <label htmlFor="subject">Subject Code:</label>
            <input type="text" name="subject" id="subject" value = {subject} onChange = { (e) => setSubject(e.target.value)} />
            <label htmlFor="student">Student Email:</label>
            <input type="text" name="student" id="student" value = {student} onChange = { (e) => setStudent(e.target.value)}/>
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

const mapDispatchToProps = (dispatch) => ({
    uploadMarks: (mark) => {
      dispatch(uploadMarks(mark));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(UploadMarks);