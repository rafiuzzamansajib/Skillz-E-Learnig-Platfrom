import React from 'react';
import "./Notfound.css"
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="text-center">Page Not Found</h1>
            <h2 className="text-center">404 Eorror</h2>
            <NavLink to="/home">
            <button className="btn btn-custom ">Reload page</button>
            </NavLink>
            
        </div>
    );
};

export default NotFound;