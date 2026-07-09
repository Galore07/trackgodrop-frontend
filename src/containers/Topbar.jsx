// import React from "react";
// import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
            href="mailto:support@trackgodrop.com?subject=Shipment Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="gig"
          > 
            <MdEmail />
          </a>
          
        </div>
      </div>



    </div>
  );
};

export default Topbar;
