// import React from "react";
// import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
// import images from "../assets/Image";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" style={{
      // backgroundImage: `url(${images.image6})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "rgb(11, 11, 34)",
    }}>
      <div className="footer-container">

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/track">Track Shipment</Link></li>
            {/* <li><Link to="/">Services</Link></li> */}
            <li className='vibez'><a href="mailto:support@trackgodrop.com?subject=Shipment%20Inquiry">CONTACT</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: trackgodrop@info.com</p>
          <p>Phone: +1 514 555 422</p>
          <p>Address: Ontario, Canada</p>
          <p>Monday - Saturday: 9:00 - 18:00</p>
        </div>

        {/* <div className='midday'> */}
        <div className="footer-contact">
          {/* <img src={images.image15} alt="" className='logggo' /> */}
          <h3>Services</h3>
          <p>Domestic Shipping</p>
          <p>International Shipping</p>
          {/* <p>Express Delivery</p> */}
          <p>Freight Forwarding</p>
          <p>Warehousing</p>
          <p>Package Tracking</p>
        </div>


      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TrackGoDrop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
