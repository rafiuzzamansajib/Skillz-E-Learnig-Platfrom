import React from 'react';import { Link } from 'react-router-dom';
;

const Course = (props) => {
    const { name, thumnail, price} = props.course;
    return (
     <div className="col">
        <div className="card">
          <img src={thumnail} height="200px" className="fluid" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">$ {price}</p>
            <Link to="/contact"><button className="btn btn-primary">Emroll Now</button></Link>
        </div>
        </div>
    </div>
    );
};

export default Course;