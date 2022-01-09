import "../style/navbar.css";

import React from 'react';
import {Link} from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import ReactNavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function ModeColor(){
    const location = useLocation();
    let loc = location.pathname;
    if (loc === "/" || loc === "/design") {
        return(
            <Container className = "p-4" fluid = {true} style={{display:'flex', justifyContent:'flex-end'}}>
                <ReactNavBar expand="md" bg="transparent">
                    <ReactNavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                    <ReactNavBar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link nav-custom" to="/design-work">Work</Link>
                        <Link className="nav-link nav-custom" to="/about">About</Link>
                        <Link className="nav-link nav-custom" to="/resume">Resume</Link>
                    </Nav>
                    </ReactNavBar.Collapse>
                </ReactNavBar>
            </Container>
        );
    } else {
        return(
            <Container className = "p-4" fluid = {true} style={{display:'flex', justifyContent:'flex-end'}}>
                <ReactNavBar expand="md" bg="transparent" className= "navbar-dark">
                    <ReactNavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                    <ReactNavBar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto navbar-dark">
                        <Link className="nav-link nav-custom-dark" to="/design-work">Work</Link>
                        <Link className="nav-link nav-custom-dark" to="/about">About</Link>
                        <Link className="nav-link nav-custom-dark" to="/resume">Resume</Link>
                    </Nav>
                    </ReactNavBar.Collapse>
                </ReactNavBar>
            </Container>
        );
    }
}

const Navbar = () => (
    <>
        <ModeColor/>
    </>
);

export default Navbar;