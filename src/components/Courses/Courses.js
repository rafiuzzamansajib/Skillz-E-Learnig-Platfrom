import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Courses = () => {
    const [course,setCourse] = useState([]);
    useEffect(()=>{
        fetch("./fakeData.JSON")
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <>
        <Header></Header>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
            {
                course.map(course => <Course
                key = {course.id}
                course={course}
                ></Course>)
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default Courses;