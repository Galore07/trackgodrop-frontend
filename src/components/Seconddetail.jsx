import React from "react";
import "./Seconddetail.css";
import images from "../assets/Image";

const Seconddetail = () => {
  return (
    <div className="abs">
      <div className="okpa">
        <div>
          {/* <h3 className="woa">ABOUT US</h3> */}

          <h2 className="qiat">
            Navigate global trade with<br /> a trusted <span className="vvs">Logistics Partner</span>
          </h2>
        </div>

        <p className="pes">From local deliveries to international shipments, <strong>TrackGoDrop</strong> provides secure,
          reliable, and efficient logistics solutions tailored to your needs. We simplify shipping with
          real-time tracking, timely deliveries, and a commitment to excellence, helping businesses and
          individuals move goods with confidence. </p>

        <p className="pef">Our technology-driven logistics solutions, transparent tracking,
          and dedicated support make global shipping easier than ever.</p>
      </div>
      {/*  */}
      <div className="evah">
        <img src={images.image25} alt="" className="pht" />
      </div>
    </div>
  );
};

export default Seconddetail;
