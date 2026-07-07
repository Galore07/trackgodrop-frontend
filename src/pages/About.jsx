// src/pages/About.jsx
// import React from 'react';
import './About.css';
import Leadership from '../assets/Leadership';
// import { FaSeedling, FaTruck, FaGlobeAfrica, FaHandshake } from 'react-icons/fa';
import images from '../assets/Image';

const About = () => { //test
  return (
    <>
    <div className="abss">
      <div className="okpa">
        <div>
          <h3 className="woa">ABOUT US</h3>

          <h2 className="qiat">
            Our team is known for <br /> delivering the <span className="vvs">Best</span>
          </h2>
        </div>

        <p className="pes">At TrackGoDrop, we are committed to delivering more than just packages—we deliver reliability, speed, and peace of mind. 
          <br />
          Our experienced team works tirelessly to ensure every shipment is handled with care, tracked with precision, and delivered on time. </p>

        <p className="pef">With a customer-first approach and a passion for excellence, we've built a reputation for dependable logistics solutions you can trust.</p>
          <br />
      </div>
      {/*  */}
      <div className="evah">
        <img src={images.image9} alt="" className="pht" />
      </div>
    </div>
          <>
        <Leadership />
      </>
    </>
  );
};

export default About;
