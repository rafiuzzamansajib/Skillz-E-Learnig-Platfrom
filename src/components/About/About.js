import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const About = () => {
    return (
        <>
        <Header></Header>
        <div className="container border mx-auto my-5 bg-light w-75 d-flex">
            <div className="p-5">
                <img className="rounded-3" height="200px" src="https://elearningindustry.com/wp-content/uploads/2020/09/how-to-analyze-employee-skill-development.jpg" alt="" />
            </div>
            <div>
                <p className="p-5">Our main focus to provide best metarials for e-learning.We have some world class courses that help ones to devolop his/her skill in their suitable sector.Programming,Web Devoloping,Digital Marketing and Disign releted courses ar very valuable now a days.We provide tgis course so that you can develop you skill with homely touch</p>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default About;