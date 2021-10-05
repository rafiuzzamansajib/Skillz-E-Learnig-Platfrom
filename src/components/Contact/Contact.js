import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <>
        <Header></Header>
        <div className="container">
        <div className="row mt-5">

         <div className="col-md-8">

           <div className="card">
            <h4 className="card-header">Fill-Up The From For Course Enrollment</h4>
            <div className="card-body">
             <form action="">

                 <div className="form-group">
                   <label className="font-weight-bold" >Full Name:</label>
                    <input className="form-control" type="text" name="name" placeholder="Enter Your Full Name"/>
                </div>

         

                <div className="form-group">
                    <label className="font-weight-bold">Number:</label>
                    <input className="form-control" type="text" name="number" placeholder="Enter Your Phone Number"/>
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Email:</label>
                    <input className="form-control" type="email" name="email" placeholder="Enter Your Email"/>
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Course:</label>
                    <input className="form-control" type="text" name="text" placeholder="Enter Your Favorite Course"/>
                </div>

                <div className="form-group">
                    <label className="font-weight-bold" >Details:</label>
                    <textarea className="form-control" cols="10" rows="5" placeholder="Enter Your Details"></textarea>
                </div>

          <button className="btn btn-primary mt-2">Submit Form</button>

        </form>
          </div>
        </div>  

      </div>

    </div>
  </div>
        <Footer></Footer>
        </>
    );
};

export default Contact;