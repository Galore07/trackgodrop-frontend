import { Link } from "react-router-dom";
import {
//   FaBox,
//   FaTruck,
//   FaCheckCircle,
//   FaClock,
  FaPlus,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Dashboard.css";

export default function Dashboard() {
  function handleLogout() {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>TrackGoDrop Admin Dashboard</h1>
          <p>Welcome back, Administrator 👋</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* <div className="cards">

        <div className="card">
          <FaBox className="icon blue" />
          <h2>0</h2>
          <p>Total Shipments</p>
        </div>

        <div className="card">
          <FaTruck className="icon orange" />
          <h2>0</h2>
          <p>In Transit</p>
        </div>

        <div className="card">
          <FaClock className="icon gold" />
          <h2>0</h2>
          <p>Pending</p>
        </div>

        <div className="card">
          <FaCheckCircle className="icon green" />
          <h2>0</h2>
          <p>Delivered</p>
        </div>

      </div> */}

      <div className="quick-actions">

        <Link to="/create-shipment" className="action-card">
          <FaPlus />
          <span>Create Shipment</span>
        </Link>

        <Link to="/shipments" className="action-card">
          <FaList />
          <span>Manage Shipments</span>
        </Link>

      </div>

      <div className="dashboard-info">
        <h2>Admin Overview</h2>

        <p>
          Use this dashboard to create shipments, manage deliveries,
          update shipment status, and monitor your logistics operations.
        </p>
      </div>

    </div>
  );
}