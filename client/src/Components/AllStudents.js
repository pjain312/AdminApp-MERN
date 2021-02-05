import React, { useState } from 'react';
import '../style/form.css';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaTrash } from 'react-icons/fa'
import { getStudentSubjects, addStudentSubjects, deleteStudent, getFaqSubjects } from '../actions/actions'

const AllStudents = ({ studentReducer, indSubjectReducer, getStudentSubjects, deleteStudent, getFaqSubjects, addStudentSubjects, subjectReducer }) => {

    const handleSubjects = (e, id) => {
        e.preventDefault();
        getStudentSubjects(id);
    }
    const handleStudentSubjects = (e, id, selected) => {
        e.preventDefault();
        addStudentSubjects(id, selected);
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        deleteStudent(id);
    }
    const handleFaq = (e, id) => {
        e.preventDefault();
        getFaqSubjects(id);
    }

    const students = studentReducer[0];
    const subjects = subjectReducer[0];
    const subjectFaq = indSubjectReducer[0];

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [value, setValue] = useState(false);
    const [selected, setSelected] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const toggler = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>

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
                            students.map((res) =>
                                <tr key={res._id}>
                                    <td>{res.name}
                                        <div className ="accord">
                                            <Button color="primary" onClick={(e) => { handleFaq(e, res._id); toggler(); }}>
                                                + Subjects
                                           </Button>
                                            <Collapse isOpen={isOpen}>
                                                <Card>
                                                    <CardBody>
                                                        {typeof (subjectFaq) !== "undefined" ?
                                                            subjectFaq.map((faq) =>
                                                                <p>{faq}</p>
                                                            ) :
                                                            console.log("")
                                                        }
                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                    </td>
                                    <td>{res.email}</td>
                                    <td>{res.year}</td>
                                    <td>{res.fatherName}</td>
                                    <td>{res.gender}</td>
                                    <td>{res.dob}</td>
                                    <td>{res.studentMobileNumber}</td>
                                    <td>{res.fatherMobileNumber}</td>
                                    <td><button onClick={(e) => { handleSubjects(e, res._id); toggle(); }} >Add Subjects</button></td>
                                    <Modal isOpen={modal} toggle={toggle}>
                                        <ModalHeader toggle={toggle}> Subjects</ModalHeader>
                                        <ModalBody>
                                            <form onSubmit={(e) => { handleStudentSubjects(e, res._id, selected); setSelected([]); }}>
                                                {
                                                    typeof (subjects) !== "undefined" ?
                                                        (subjects.length !== 0) ?
                                                            subjects.map((sub, index) =>

                                                                <div key={index}>
                                                                    <label>{sub.subjectName}
                                                                        <input type="checkbox" name={sub.subjectName} value={value} onChange={(e) => {
                                                                            setSelected([...selected, sub.subjectName])
                                                                            setValue(!value)
                                                                        }} />
                                                                    </label>
                                                                </div>
                                                            )
                                                            : (<div> No subjects for this year</div>)
                                                        :
                                                        console.log("not now")
                                                }
                                                <button onClick={() => setModal(!modal)} type="submit"> Add Subjects</button>
                                            </form>
                                        </ModalBody>
                                    </Modal>
                                    <td>
                                        <FaTrash onClick={(e) => { handleDelete(e, res._id) }} />
                                    </td>
                                    <td>

                                    </td>
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
    studentReducer: state.studentReducer,
    subjectReducer: state.subjectReducer,
    indSubjectReducer: state.indSubjectReducer,
});

const mapDispatchToProps = (dispatch) => {
    return {

        getStudentSubjects: (id) => {
            dispatch(getStudentSubjects(id));
        },
        addStudentSubjects: (id, selected) => {
            dispatch(addStudentSubjects(id, selected));
        },
        deleteStudent: (id) => {
            dispatch(deleteStudent(id));
        },
        getFaqSubjects: (id) => {
            dispatch(getFaqSubjects(id));
        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);