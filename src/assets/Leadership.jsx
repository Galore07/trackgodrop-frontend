import "./Leadership.css";
import images from "./Image";

export default function Leadership() { //tt

  return (
    <section className="leadership">
      <div className="leadership-header">
        <h2>Meet Our Team</h2>
        <p>
          The visionary leaders behind TrackGoDrop.
        </p>
      </div>

      <div className="lambaa">
        <div className="grid-containerr">
          <div className="boxx">
            <img src={images.image7} alt="ceo" />
          </div>
        </div>

        <div className="rumm">
          <div className="limee">
            <h3 className="psgg">Chief Operating Officer</h3>
            <h2 className="manuu">
              Nathan
            </h2>
            <p className="barcaa">
              Responsible for overseeing daily logistics operations, delivery performance, fleet management, and operational efficiency.            </p>
          </div>
        </div>
      </div>

      <div className="lambaa">
        <div className="grid-containerr">
          <div className="boxx">
            <img src={images.image8} alt="md" />
          </div>
        </div>

        <div className="rumm">
          <div className="limee">
            <h3 className="psgg">Operations Manager
            </h3>
            <h2 className="manuu">
              Mark
            </h2>
            <p className="barcaa">
             Coordinates shipments, manages dispatch schedules, supervises riders and drivers, and ensures packages move smoothly from pickup to delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}