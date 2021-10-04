import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faPhoneVolume,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
            <div>
      <div className="footer-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
                <h1 className="text-start">Skillz E-Learnig Platfrom</h1>
                <div className="d-flex">
                  <div className="icon mb-5">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon mb-5">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon mb-5">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon mb-5">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Course</li>
                  <li className="footer-menu"> About us</li>
                  <li className="footer-menu">Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+999 99 99 99 99 99</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      New Elepahant Road,11/A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;