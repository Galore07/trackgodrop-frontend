// import React from "react";
// import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";

import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="coco">
      <div className="palm">
        <div className="yam">
          <p className="pee">Safe, secure, and insured package handling.</p>
          <div className="v-line"></div>
          <p className="iconic">
            <IoLocationOutline /> Ontario, Canada
          </p>
          <p className="iconic">
            <FiPhone /> Need help? Our support team is ready to assist you
          </p>
        </div>
      </div>




      <div className="seed">
        <div className="seeds">

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="gig"
          >
            Chat
          </a>

          <a
            href="https://facebook.com/profile.php?id=61576617164311"
            target="_blank"
            rel="noopener noreferrer"
            className="gig"
          > 
            <PiChatsCircleBold />
          </a>



          {/* <a
            href="https://wa.me/+2348028589891"
            target="_blank"
            rel="noopener noreferrer"
            className="gig"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://tiktok.com/@osatfarmsenterprise?_r=1&_t=ZS-96xM3BndGuC"
            target="_blank"
            rel="noopener noreferrer"
            className="gig"
          >
            <FaTiktok />
          </a> */}
          
        </div>
      </div>



    </div>
  );
};

export default Topbar;
