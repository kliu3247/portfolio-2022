import "../style/sidebar.css";

import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

function HighLightChoice(){
    const location = useLocation();
    let loc = location.pathname;
    if (loc === "/" || loc === "/design" || loc === "/design-work" ) {
        return(
            <Container id = "nav" className = "side-nav" fluid = {false}>
                <div id="add-padding">
                    <Link className="side-nav-custom" id = "white-if-light" to="/engineering">Engineering</Link>
                    <Link className="side-nav-custom" id = "white-if-light" to="/design" id = "highlight-light">Design</Link>
                </div>
            </Container>
        );
    } else {
        return(
            <Container id = "nav" className = "side-nav" fluid = {false}>
                <div id="add-padding">
                    <Link className="side-nav-custom" to="/engineering" id = "highlight-dark">Engineering</Link>
                    <Link className="side-nav-custom"  id = "change-color-if-dark" to="/design">Design</Link>
                </div>
            </Container>
        );
    }
}

const Navbar = () => (
    <>
        <div id = "border-make"></div>
        <HighLightChoice/>
    </>
);

export default Navbar;