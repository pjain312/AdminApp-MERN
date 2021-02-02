import React, {useState} from 'react';
import '../style/form.css';
import {connect} from 'react-redux';
import{ login} from "../actions/actions";


const Login  = ({login}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
        email,
        password
    };

    login(creds);
    setEmail("");
    setPassword("");
}

    return (
        <div className = "form">
        <form action="" method="POST" onSubmit ={handleSubmit}>
           
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" value ={email} onChange ={(e) => setEmail(e.target.value)}  />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" value ={password} onChange = {(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button> 
        </form>
        </div>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
        login: (creds) => {
      dispatch(login(creds));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Login);