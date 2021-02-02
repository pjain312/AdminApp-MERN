import React from 'react';
import '../style/form.css';
import {connect} from 'react-redux';

import {getSubjects} from '../actions/actions'

const AllSubjects = ({subjectReducer, getSubjects}) =>{
    const handleSubmit= (e) =>{
        e.preventDefault();
        getSubjects();
    }
    const subjects = subjectReducer[0];
    return(
        <React.Fragment>
                    <div className ="">
                    <button type="submit" onClick ={handleSubmit}>Show All Subjects</button> 
                </div>

                <div className="col-md-8">
                {subjectReducer.length !== 0 && <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Subject Code</th>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Year</th>
                            <th scope="col">Total Lectures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.map((res, index) =>
                                <tr key={index}>
                                    <td>{res.subjectCode}</td>
                                    <td>{res.subjectName}</td>
                                    <td>{res.year}</td>
                                    <td>{res.totalLectures}</td>
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
    subjectReducer : state.subjectReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getSubjects: () => {
      dispatch(getSubjects());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(AllSubjects);