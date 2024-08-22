import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./footer";
import Musalla from "./Musalla";
import Contact from "./Contact";
import HalaalEats from "./HalaalEats";
import "../styles/App.css";

function BismillahMu() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/halaaleats" element={<HalaalEats />} />
            <Route path="/musalla" element={<Musalla />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default BismillahMu;
