import React from "react";
import {NavItem, NavLink, Navbar, Nav} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./Login";
import AddFaculty from './AddFaculty';

const NavBar = () =>{
    return(
        <React.Fragment>
            <Router>
            <Navbar color = "light" light expand="md">
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink>
                            <Link to = "/login"> Sign In </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to = "/Signup"> Sign Up </Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <Switch>
                <Route exact path = "/login">
                    <Login />
                </Route>
                <Route exact path = "/Signup">
                    <AddFaculty />
                </Route>
            </Switch>
        </Router>
        </React.Fragment>
        
    );
}

export default NavBar;