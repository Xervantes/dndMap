import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <nav>
        <NavLink className="home-link" to="/">D&D Battle Maps</NavLink>
        <NavLink to="/creatures">Creatures</NavLink>
        <NavLink to="/battleMaps">Maps</NavLink>
    </nav>
);

export default NavBar;