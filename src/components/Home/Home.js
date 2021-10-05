import React from 'react';
import './Home.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header></Header>
            <div className="backgroung-img">
                <h1 className="text-center fw-bolder align-text">Change is the end result of True Learning</h1>
                <p className="text-center fs-5">If you want to learn go beyond your boundaries</p>
            </div>
            <h2 className="text-center">Our <span className="text-color">Courses</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                <div className="col">
                    <div className="card">
                        <img src="https://image.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"  height="200px" className="fluid" alt="..." />
                        <div className="card-body">
                           <h5 className="card-title">Programming</h5>
                            <p className="card-text">Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific tas</p>
                            <NavLink to="/contact"><button className="btn btn-primary">See More Course</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://image.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg"  height="200px" className="fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Web Devolopimg</h5>
                            <p className="card-text">Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services</p>
                            <NavLink to="/contact"><button className="btn btn-primary">See More Course</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://image.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg"  height="200px" className="fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Digital Marketing</h5>
                            <p className="card-text">Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.</p>
                            <NavLink to="/contact"><button className="btn btn-primary">See More Course</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://image.freepik.com/free-vector/flat-ui-ux-background_23-2149065799.jpg"  height="200px" className="fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ui/UX Design</h5>
                            <p className="card-text">User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience</p>
                            <NavLink to="/contact"><button className="btn btn-primary">See More Course</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Home;