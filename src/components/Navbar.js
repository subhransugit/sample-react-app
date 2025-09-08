// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        onLogout(); // Inform App to re-render
        navigate("/");
    };

    return (
        <nav>
            <a href="/dashboard">Dashboard</a> |{" "}
            <a href="/products">Products</a> |{" "}
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}
