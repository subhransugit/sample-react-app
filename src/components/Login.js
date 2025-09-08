// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "demo" && password === "secret") {
            localStorage.setItem("token", "123456");
            onLogin(); // Notify parent
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
