import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="col-md-12 p-4 bg-dark">
        <div className="container-fluid">
          <nav className="d-flex align-items-end justify-content-end">
            <p className="web-name">Skillz!</p>
            <NavLink to="/home" className="nav">
              Home
            </NavLink>
            <NavLink to="/courses" className="nav">
              Courses
            </NavLink>
            <NavLink to="/about" className="nav">
              About us
            </NavLink>
            <NavLink to="contact" className="nav">
              Contact us
            </NavLink>
          </nav>
        </div>
      </div>
    );
};

export default Header;