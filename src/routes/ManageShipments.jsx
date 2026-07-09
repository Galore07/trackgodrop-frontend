import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAllShipments,
    deleteShipment,
} from "../services/ShipmentApi";
import "./ManageShipments.css";

export default function ManageShipments() {
    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadShipments() {
            try {
                setLoading(true);

                const res = await getAllShipments();
                setShipments(res.data.data.shipments);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        loadShipments();
    }, []);

    async function handleDelete(id) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this shipment?"
        );

        if (!confirmDelete) return;

        try {
            await deleteShipment(id);

            setShipments((prev) =>
                prev.filter((shipment) => shipment._id !== id)
            );
        } catch (err) {
            console.log(err);
            alert("Failed to delete shipment.");
        }
    }

    function formatStatus(status) {
        return status
            .replaceAll("_", " ")
            .replace(/\b\w/g, (letter) => letter.toUpperCase());
    }

    if (loading)
        return <h2 className="loading">Loading shipments...</h2>;

    return (
        <div className="manage-page">

            <div className="manage-header">
                <h1>Manage Shipments</h1>

                <Link to="/create-shipment" className="create-btn">
                    + Create Shipment
                </Link>
            </div>

            {shipments.length === 0 ? (
                <p>No shipments found.</p>
            ) : (
                <div className="table-container">

                    <table>

                        <thead>
                            <tr>
                                <th>Tracking No.</th>
                                <th>Receiver</th>
                                <th>Package</th>
                                <th>Status</th>
                                <th>Location</th>
                                <th>Created On</th>
                                <th>Delivery Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {shipments.map((shipment) => (
                                <tr key={shipment._id}>

                                    <td>{shipment.trackingNumber}</td>

                                    <td>{shipment.receiverName}</td>

                                    <td>{shipment.packageType}</td>

                                    <td>
                                        <span className={`status ${shipment.status}`}>
                                            {formatStatus(shipment.status)}
                                        </span>
                                    </td>

                                    <td>{shipment.currentLocation}</td>

                                    <td>{new Date(shipment.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    })}</td>

                                    <td>
                                        {shipment.estimatedDeliveryDate
                                            ? new Date(
                                                shipment.estimatedDeliveryDate
                                            ).toLocaleDateString()
                                            : "-"}
                                    </td>

                                    <td className="actions">

                                        <Link
                                            className="edit-btn"
                                            to={`/edit-shipment/${shipment._id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(shipment._id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            )}
        </div>
    );
}