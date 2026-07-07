import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./containers/Topbar";
import Navbar from "./containers/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import AdminLogin from "./routes/AdminLogin";
import Footer from "./containers/Footer";
import TrackShipment from "./pages/TrackShipment";
import Track from "./pages/Track";
import Dashboard from "./routes/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import CreateShipment from "./routes/CreateShipment";
import ManageShipments from "./routes/ManageShipments";
import NotFound from "./pages/NotFound";
import EditShipment from "./routes/EditShipment";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/track/:trackingNumber" element={<TrackShipment />} />
        <Route path="/track" element={<Track />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path="/create-shipment" element={<ProtectedRoute> <CreateShipment /> </ProtectedRoute>} />
        <Route path="/shipments" element={<ProtectedRoute> <ManageShipments /> </ProtectedRoute>} />
        <Route path="/edit-shipment/:id" element={<ProtectedRoute> <EditShipment /> </ProtectedRoute>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
