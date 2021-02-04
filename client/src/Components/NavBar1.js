import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem, NavLink, Navbar, Nav } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AddStudent from './AddStudent';
import AddSubject from './AddSubject';
import AllStudents from './AllStudents';
import AllSubjects from './AllSubjects';
import UploadMarks from './UploadMarks';
import { connect } from "react-redux";
import { getStudents, logout, getSubjects } from "../actions/actions";

const NavBar1 = ({ logout, getStudents, getSubjects }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        getStudents();
    }

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    }

    const handleSubjects = (e) => {
        e.preventDefault();
        getSubjects();
    }

    return (
        <Router>
            <Navbar color="light" light expand="md">
                <Nav className='mr-auto' navbar>
                    <Link to="/">
                        <NavItem>
                            <NavLink>
                                Add Student
                        </NavLink>
                        </NavItem>
                    </Link>
                    <Link to="/all-students">
                        <NavItem>
                            <NavLink onMouseOver={handleSubmit}>
                                All Students
                        </NavLink>
                        </NavItem>
                    </Link>
                    <Link to="/all-subjects">
                        <NavItem>
                            <NavLink onMouseOver={handleSubjects} >
                                All Subjects
                            </NavLink>
                        </NavItem>
                    </Link>
                    <Link to="/add-subject">
                        <NavItem>
                            <NavLink>
                                Add Subjects
                            </NavLink>
                        </NavItem>
                    </Link>
                    <Link to="/upload-marks">
                        <NavItem>
                            <NavLink>
                                Upload Marks
                            </NavLink>
                        </NavItem>
                    </Link>
                    <Link>
                        <NavItem>
                            <NavLink onClick={handleClick}>
                                Logout
                        </NavLink>
                        </NavItem>
                    </Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route exact path="/">
                    <AddStudent />
                </Route>
                <Route exact path="/all-students">
                    <AllStudents />
                </Route>
                <Route exact path="/add-subject">
                    <AddSubject />
                </Route>
                <Route exact path="/all-subjects">
                    <AllSubjects />
                </Route>
                <Route exact path="/upload-marks">
                    <UploadMarks />
                </Route>
            </Switch>
        </Router>
    );
}
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout());
    },
    getStudents: () => {
        dispatch(getStudents());
    },
    getSubjects: () => {
        dispatch(getSubjects());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar1);