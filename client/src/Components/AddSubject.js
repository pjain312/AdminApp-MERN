import React, {useState} from 'react';
import '../style/form.css';
import {connect} from 'react-redux';
import{ addSubject} from "../actions/actions";


const AddSubject = ({addSubject}) => {
    // const dispatch = useDispatch();
    const[subjectCode, setSubjectCode] = useState("");
    const[subjectName, setSubjectName] = useState("");
    const[year, setYear] = useState("");
    const[totalLectures, setTotalLectures] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = {
            subjectCode,
            subjectName,
            year,
            totalLectures
        };
        addSubject(subject);

        setSubjectName("");
        setTotalLectures("");
        setSubjectCode("");
        setYear("");
    }
    return(
            <div className = "form">
            <form action="" method="POST" onSubmit = {handleSubmit}>
                <label htmlFor="subjectCode">Subject Code:</label>
                <input type="text" name="subjectCode" id="subjectCode" value = {subjectCode} onChange = { (e) => setSubjectCode(e.target.value)} />
                <label htmlFor="subjectName">Subject Name:</label>
                <input type="text" name="subjectName" id="subjectName" value = {subjectName} onChange = { (e) => setSubjectName(e.target.value)}/>
                <label htmlFor="year">Year:</label>
                <input type="text" name="year" id="year" value = {year} onChange = {(e) => setYear(e.target.value)} />
                <label htmlFor="totalLectures">Total Lectures:</label>
                <input type="text" name="totalLectures" id="totalLectures" value = {totalLectures} onChange = {(e) => setTotalLectures(e.target.value)} />
                
                <button type="submit" >Add Subject</button> 
            </form>
            </div>
    );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addSubject: (subject) => {
      dispatch(addSubject(subject));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(AddSubject);
