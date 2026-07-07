import axios from "axios";

const API = axios.create({
  baseURL: "https://trackgodrop.onrender.com/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// LOGIN
export const loginAdmin = (email, password) =>
  API.post("/admin/login", {
    email,
    password,
  });

// SHIPMENTS
export const createShipment = (shipmentData) =>
  API.post("/shipment", shipmentData);

export const getAllShipments = () =>
  API.get("/shipment");

export const updateShipment = (id, shipmentData) =>
  API.patch(`/shipment/${id}`, shipmentData);

export const getShipment = (id) =>
  API.get(`/shipment/${id}`);

export const deleteShipment = (id) =>
  API.delete(`/shipment/${id}`);

export default API;