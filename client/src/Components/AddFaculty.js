import React, {useState} from 'react';
import '../style/form.css';
import {useDispatch, connect} from 'react-redux';
import {addFaculty} from '../actions/actions';


const AddFaculty = ({addFaculty}) => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[designation, setDesignation] = useState("");
    const[facultyMobileNumber, setMobile] = useState("");
    const[gender, setGender] = useState("");
    const[dob, setDob] = useState("");
    const[joiningYear, setJoiningDate] = useState("");

    const handleFacSubmit =(e) => {
        e.preventDefault();
        const faculty ={
            name,
            email,
            password,
            designation,
            gender,
            dob,
            facultyMobileNumber,
            joiningYear
        };

        addFaculty(faculty);
    }
    return(
            <React.Fragment>
                    <div className = "form">
                    <form action="" method="POST" onSubmit = {handleFacSubmit}>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" value ={name} onChange = {(e) => setName(e.target.value)} />
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" value ={email} onChange = {(e) => setEmail(e.target.value)} />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" value ={password} onChange = {(e) => setPassword(e.target.value)}/>
                        <label for="designation">Designation:</label>
                        <input type="text" name="designation" id="designation" value ={designation} onChange = {(e) => setDesignation(e.target.value)} />
                        <label for="facultyMobileNumber">Mobile:</label>
                        <input type="number" name="facultyMobileNumber" id="facultyMobileNumber" value ={facultyMobileNumber} onChange = {(e) => setMobile(e.target.value)} />
                        <label for="gender">Gender:</label>
                        <input type="text" name="gender" id="gender" value ={gender} onChange = {(e) => setGender(e.target.value)} />
                        <label for="dob">DOB:</label>
                        <input type="text" name="dob" id="dob" value ={dob} onChange = {(e) => setDob(e.target.value)}/>
                        <label for="joiningYear">Joining Year:</label>
                        <input type="text" name="joiningYear" id="joiningYear" value ={joiningYear} onChange = {(e) => setJoiningDate(e.target.value)} />
                        <button type="submit">Register</button> 
                    </form>
                    </div>
            </React.Fragment>
           
    );
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addFaculty: (faculty) => {
      dispatch(addFaculty(faculty));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(AddFaculty);
