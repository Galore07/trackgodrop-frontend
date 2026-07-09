import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaWarehouse, FaShippingFast, FaHome, } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuPackageCheck } from "react-icons/lu";
import { GiPoliceOfficerHead } from "react-icons/gi";
import "./TrackShipment.css";



export default function TrackShipment() {
    const { trackingNumber } = useParams();
    const [shipment, setShipment] = useState(null);
    const [statusMessage, setStatusMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const normalSteps = [
        {
            key: "pending",
            label: "Shipment Received",
            icon: <LuPackageCheck />,
        },
        {
            key: "processing",
            label: "Processing",
            icon: <MdAvTimer />,

        },
        {
            key: "in_transit",
            label: "In Transit",
            icon: <GiCommercialAirplane />
            ,
        },
        {
            key: "arrived_at_hub",
            label: "Arrived at Hub",
            icon: <FaWarehouse />,
        },
        {
            key: "out_for_delivery",
            label: "Out For Delivery",
            icon: <FaShippingFast />,
        },
        {
            key: "delivered",
            label: "Delivered",
            icon: <FaHome />,
        },
    ];

    const steps =
        shipment?.status === "on_hold"
            ? [
                ...normalSteps.slice(0, 3),

                {
                    key: "on_hold",
                    label: "Under Customs Clearance",
                    icon: <GiPoliceOfficerHead />,
                },
                ...normalSteps.slice(3),
            ]
            : normalSteps;

    useEffect(() => {
        async function getShipment() {
            try {
                setLoading(true);

                const res = await axios.get(
                    `https://trackgodrop.onrender.com/api/v1/shipment/track/${trackingNumber}`
                );

                setShipment(res.data.data.shipment);
                setStatusMessage(res.data.data.statusMessage);
            } catch (err) {
                setError(err.response?.data?.message || "Shipment not found.");
            } finally {
                setLoading(false);
            }
        }

        getShipment();
    }, [trackingNumber]);

    if (loading)
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                {/* <h2>Tracking Shipment...</h2> */}
            </div>
        );

    if (error)
        return (
            <div className="error-box">
                <h2>{error}</h2>
            </div>
        );

    const currentStep = steps.findIndex(
        step => step.key === shipment.status
    );

    return (
        <div className="track-page">

            <div className="status-box">
                <h2 className="shap">Shipment Information</h2>
                <h5 className="hyped">Tracking Number: {shipment.trackingNumber}</h5>
                <h5 className="hyped"> Created On: {new Date(shipment.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                })}</h5>

            </div>




            {/* DELIVERY PROGRESS */}

            <div className="progress-container">
                {steps.map((step, index) => (
                    <div
                        key={step.key}
                        className={`step ${index <= currentStep ? "active" : ""
                            }`}
                    >
                        <div className="circle">
                            {/* {index < currentStep ? "✓" : index + 1} */}
                            {step.icon}
                        </div>

                        <p>{step.label}</p>
                    </div>
                ))}
            </div>

            <div className="status-box">
                <h3 className="goat">Current Status</h3>

                <h2 className="menthol">{shipment.status.replaceAll("_", " ")}</h2>

                <p>{statusMessage}</p>
            </div>

            <div className="shipment-card">

                <div className="row">
                    <strong>Recipient</strong>
                    <span>{shipment.receiverName}</span>
                </div>

                <div className="row">
                    <strong>Destination</strong>
                    <span>{shipment.deliveryAddress}</span>
                </div>

                <div className="row">
                    <strong>Current Location</strong>
                    <span>{shipment.currentLocation}</span>
                </div>

                <div className="row">
                    <strong>Package Type</strong>
                    <span>{shipment.packageType}</span>
                </div>

                <div className="row">
                    <strong>Estimated Delivery</strong>
                    <span>{new Date(shipment.estimatedDeliveryDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}</span>
                </div>

            </div>

        </div>
    );
}