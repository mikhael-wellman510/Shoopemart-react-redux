import { useState } from "react";
import "./Style/Style.css";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Transaction from "./Pages/DetailProduct";
import DetailProduct from "./Pages/DetailProduct";
import Keranjang from "./Pages/Keranjang";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/detailProduct/:idProduct" element={<DetailProduct />} />
          <Route path="/keranjang" element={<Keranjang />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
