import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavItem, NavLink, Navbar, Nav} from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddStudent from './AddStudent';
import AddSubject from './AddSubject';
import AllStudents from './AllStudents';
import AllSubjects from './AllSubjects';
import UploadMarks from './UploadMarks';
import {connect} from "react-redux";
import {logout} from "../actions/actions";

const NavBar1 = ({logout}) => {

    const handleClick = (e) => {
        e.preventDefault();
        logout();
    }

    return(
        <Router>
            <Navbar color = "light" light expand="md">
                <Nav className='mr-auto' navbar>
                <Link to = "/">
                    <NavItem>
                        <NavLink>
                            All Students 
                        </NavLink>
                    </NavItem>
                </Link>
                <Link to = "/add-student">
                    <NavItem>
                        <NavLink>
                            Add Student 
                        </NavLink>
                    </NavItem>
                    </Link>
                    <Link to = "/all-subjects">
                        <NavItem>
                            <NavLink>
                                All Subjects 
                            </NavLink>
                        </NavItem>
                    </Link>
                    <Link to = "/add-subject">
                        <NavItem>
                            <NavLink>
                                Add Subjects 
                            </NavLink>
                        </NavItem>
                    </Link>
                    <Link to = "/upload-marks">
                        <NavItem>
                            <NavLink>
                                Upload Marks 
                            </NavLink>
                        </NavItem>
                    </Link>
                    <NavItem>
                        <NavLink onClick = {handleClick}>
                            Logout
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <Switch>
                <Route exact path = "/">
                    <AllStudents/>
                </Route>
                <Route exact path = "/add-student">
                    <AddStudent />
                </Route>
                <Route exact path = "/add-subject">
                    <AddSubject />
                </Route>
                <Route exact path = "/all-subjects">
                    <AllSubjects />
                </Route>
                <Route exact path = "/upload-marks">
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
  });

export default connect( mapStateToProps, mapDispatchToProps)(NavBar1);