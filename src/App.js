// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        const handleStorageChange = () => {
            setLoggedIn(!!localStorage.getItem("token"));
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <Router>
            {loggedIn && <Navbar onLogout={() => setLoggedIn(false)} />}
            <Routes>
                <Route
                    path="/"
                    element={
                        loggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={() => setLoggedIn(true)} />
                    }
                />
                <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
                <Route path="/products" element={loggedIn ? <Products /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
