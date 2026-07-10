import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createShipment } from "../services/ShipmentApi";
import "./CreateShipment.css"

export default function CreateShipment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    receiverName: "",
    receiverPhone: "",
    receiverEmail: "",
    deliveryAddress: "",
    currentLocation: "",
    packageType: "",
    // weight: "",
    status: "pending",
    estimatedDeliveryDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const res = await createShipment(formData);

      console.log(res.data);

      setMessage("Shipment created successfully!");

      setTimeout(() => {
        navigate("/shipments");
      }, 1000);

      setFormData({
        senderName: "",
        senderPhone: "",
        senderEmail: "",
        receiverName: "",
        receiverPhone: "",
        receiverEmail: "",
        deliveryAddress: "",
        currentLocation: "",
        packageType: "",
        // weight: "",
        status: "pending",
        estimatedDeliveryDate: "",
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to create shipment");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-shipment">
      <h1>Create Shipment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="senderName"
          placeholder="Sender Name"
          value={formData.senderName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="senderPhone"
          placeholder="Sender Phone"
          value={formData.senderPhone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="senderEmail"
          placeholder="Sender Email"
          value={formData.senderEmail}
          onChange={handleChange}
        />

        <input
          type="text"
          name="receiverName"
          placeholder="Receiver Name"
          value={formData.receiverName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="receiverPhone"
          placeholder="Receiver Phone"
          value={formData.receiverPhone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="receiverEmail"
          placeholder="Receiver Email"
          value={formData.receiverEmail}
          onChange={handleChange}
        />

        <input
          type="text"
          name="deliveryAddress"
          placeholder="Delivery Address"
          value={formData.deliveryAddress}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="currentLocation"
          placeholder="Current Location"
          value={formData.currentLocation}
          onChange={handleChange}
        />

        <input
          type="text"
          name="packageType"
          placeholder="Package Type"
          value={formData.packageType}
          onChange={handleChange}
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="in_transit">In Transit</option>
          <option value="arrived_at_hub">Arrived At Hub</option>
          <option value="on_hold">On Hold</option>
          <option value="out_for_delivery">Out For Delivery</option>
          <option value="delivered">Delivered</option>
        </select>

        <input
          type="date"
          name="estimatedDeliveryDate"
          value={formData.estimatedDeliveryDate}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Shipment"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}