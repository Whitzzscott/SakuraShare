import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./Components/Login/Login";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Register from '../src/Components/Register/Register';

function App() {
  const sessionToken = localStorage.getItem("SessionToken");
  const loginToken = localStorage.getItem("LoginToken");
  const adminToken = localStorage.getItem("AdminToken");
  const adminSessionToken = localStorage.getItem("AdminSessionToken");
  const adminID = localStorage.getItem("AdminID");

  return (
    <Router>
      <Routes>
        {adminToken && adminSessionToken && adminID ? (
          <Route path="/*" element={<Navigate to="/admin" replace />} />
        ) : sessionToken && loginToken ? (
          <Route path="/*" element={<Navigate to="/home" replace />} />
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
