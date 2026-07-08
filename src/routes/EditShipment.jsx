import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getShipment,
    updateShipment,
} from "../services/ShipmentApi";

import "./CreateShipment.css";

export default function EditShipment() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
        senderName: "",
        senderPhone: "",
        senderEmail: "",

        receiverName: "",
        receiverPhone: "",
        receiverEmail: "",

        deliveryAddress: "",

        packageType: "",

        // weight: "",

        status: "pending",

        estimatedDeliveryDate: "",

        currentLocation: "",
    });

    useEffect(() => {
        async function loadShipment() {
            try {
                const res = await getShipment(id);

                const shipment = res.data.data.shipment;

                setFormData({
                    senderName: shipment.senderName || "",
                    senderPhone: shipment.senderPhone || "",
                    senderEmail: shipment.senderEmail || "",

                    receiverName: shipment.receiverName || "",
                    receiverPhone: shipment.receiverPhone || "",
                    receiverEmail: shipment.receiverEmail || "",

                    deliveryAddress: shipment.deliveryAddress || "",

                    packageType: shipment.packageType || "",

                    status: shipment.status || "pending",

                    estimatedDeliveryDate:
                        shipment.estimatedDeliveryDate?.split("T")[0] || "",

                    currentLocation: shipment.currentLocation || "",
                });
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        loadShipment();

    }, [id]);

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setSaving(true);

            await updateShipment(id, formData);

            setSuccess("Shipment Updated Successfully");
            setTimeout(() => {
                navigate("/shipments");
            }, 1500)

        } catch (err) {
            setSuccess(
                err.response?.data?.message ||
                "Failed to update shipment."
            );
        } finally {
            setSaving(false)
        }
    }

    if (loading) return <h2>Loading...</h2>;

    return (
        <div className="create-shipment">

            <h1>Edit Shipment</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    placeholder="Sender Name"
                />

                <input
                    name="senderPhone"
                    value={formData.senderPhone}
                    onChange={handleChange}
                    placeholder="Sender Phone"
                />

                <input
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    placeholder="Sender Email"
                />

                <input
                    name="receiverName"
                    value={formData.receiverName}
                    onChange={handleChange}
                    placeholder="Receiver Name"
                />

                <input
                    name="receiverPhone"
                    value={formData.receiverPhone}
                    onChange={handleChange}
                    placeholder="Receiver Phone"
                />

                <input
                    name="receiverEmail"
                    value={formData.receiverEmail}
                    onChange={handleChange}
                    placeholder="Receiver Email"
                />

                <input
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    placeholder="Delivery Address"
                />

                <input
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    placeholder="Package Type"
                />

                {/* <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight"
        /> */}

                <input
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    placeholder="Current Location"
                />

                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="in_transit">In Transit</option>
                    <option value="arrived_at_hub">
                        Arrived At Hub
                    </option>
                    <option value="on_hold">On Hold</option>
                    <option value="out_for_delivery">
                        Out For Delivery
                    </option>
                    <option value="delivered">
                        Delivered
                    </option>
                </select>

                <input
                    type="date"
                    name="estimatedDeliveryDate"
                    value={formData.estimatedDeliveryDate}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    disabled={saving}
                >
                    {saving ? "Updating..." : "Update Shipment"}
                </button>

            </form>
            {success && (
                <div className="success-message">
                    {success}
                </div>
            )}

        </div>
    );
}