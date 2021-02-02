import React, { useState } from 'react';
import '../style/form.css';
import {useDispatch, connect} from 'react-redux';
import {addStudent} from '../actions/actions';


const AddStudent = ({addStudent}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [year, setYear] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [studentMobileNumber, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [fatherMobileNumber, setFatherMobile] = useState("");

    const handleStuSubmit = (e) =>{
        e.preventDefault();
        const student ={
            name,
            email,
            year,
            fatherName,
            gender,
            dob,
            studentMobileNumber,
            fatherMobileNumber
        };
        addStudent(student);
        setName ("");
        setEmail("");
        setYear("");
        setFatherName("");
        setMobile("");
        setGender("");
        setDob("");
        setFatherMobile("");
    }

    return(
            <div className = "form">
            <form action="" method="POST" onSubmit={handleStuSubmit}>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value ={name} onChange ={(e) => setName(e.target.value)} />
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value ={email} onChange ={(e) => setEmail(e.target.value)}  />
                <label for="year">Year:</label>
                <input type="text" name="year" id="year"  value ={year} onChange ={(e) => setYear(e.target.value)}  />
                <label for="fatherName">Father's Name:</label>
                <input type="text" name="fatherName" id="fatherName"  value ={fatherName} onChange ={(e) => setFatherName(e.target.value)}  />
                <label for="mobile">Mobile:</label>
                <input type="number" name="studentMobileNumber" id="studentMobileNumber"  value ={studentMobileNumber} onChange ={(e) => setMobile(e.target.value)}  />
                <label for="gender">Gender:</label>
                <input type="text" name="gender" id="gender"  value ={gender} onChange ={(e) => setGender(e.target.value)} />
                <label for="dob">DOB:</label>
                <input type="text" name="dob" id="dob" value ={dob} onChange ={(e) => setDob(e.target.value)} />
                <label for="fatherMobile"> Father's Mobile Number:</label>
                <input type="text" name="fatherMobileNumber" id="fatherMobileNumber"  value ={fatherMobileNumber} onChange ={(e) => setFatherMobile(e.target.value)}  />
                <button type="submit">Add student</button> 
            </form>
            </div>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addStudent: (student) => {
      dispatch(addStudent(student));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
