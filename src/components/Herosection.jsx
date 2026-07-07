// TGD986796744
// TGD209672489
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "../assets/Image";
import "./Herosection.css";

const Herosection = () => {
  const navigate = useNavigate();

  const [trackingNumber, setTrackingNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number");
      return;
    }

    navigate(`/track/${trackingNumber}`);
  }

  return (
    <div className="hero-section">
      <div className="soil">
        <img src={images.image9} alt="" className="hero" />
        <div className="overlay"></div>

        <div className="hero-text">
          <h1 className="color">
            Seamless Logistics, Unmatched Efficiency
          </h1>

          <form className="discover" onSubmit={handleSubmit}>
            <input
              type="text"
              className="track-input"
              placeholder="Enter Tracking Number"
              value={trackingNumber}
              onChange={(e) =>
                setTrackingNumber(e.target.value)
              }
            />

            <button type="submit" className="blm">
              Track
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
