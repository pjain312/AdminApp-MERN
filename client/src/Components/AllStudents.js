import React from 'react';
import '../style/form.css';
import {connect} from 'react-redux';

import {getStudents} from '../actions/actions'

const AllStudents = ({studentReducer, getStudents}) =>{
    const handleSubmit= (e) =>{
        e.preventDefault();
        getStudents();
    }
    const students = studentReducer[0];
    return(
        <React.Fragment>
                    <div className ="">
                    <button type="submit" onClick ={handleSubmit}>Show All Students</button> 
                </div>

                <div className="col-md-8">
                {studentReducer.length !== 0 && <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Year</th>
                            <th scope="col"> Father's Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col"> Father's Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((res, index) =>
                                <tr key={res._id}>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.year}</td>
                                    <td>{res.fatherName}</td>
                                    <td>{res.gender}</td>
                                    <td>{res.dob}</td>
                                    <td>{res.studentMobileNumber}</td>
                                    <td>{res.fatherMobileNumber}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>}

                </div>
        </React.Fragment>
        
    );
}

const mapStateToProps = (state) => ({
    studentReducer : state.studentReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getStudents: () => {
      dispatch(getStudents());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);