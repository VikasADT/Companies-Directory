// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login({ onLogin }) {   // <-- FIXED HERE
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const VALID_EMAIL = "admin@review.com";
    const VALID_PASSWORD = "Admin@123";

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            localStorage.setItem("auth", "true");

            // session expiry (optional)
            const expiry = Date.now() + 90 * 60 * 1000;
            localStorage.setItem("sessionExpiry", expiry);

            onLogin();         // <-- IMPORTANT
            navigate("/");     // redirect
            return;
        }

        alert("Invalid login credentials!");
    };

    return (
        <div className="login-wrapper">
            <form className="login-box" onSubmit={handleLogin}>
                <h3 className="login-title">Welcome Back 👋</h3>

                <div className="demo-box">
                    <p><b>Email:</b> admin@review.com</p>
                    <p><b>Password:</b> Admin@123</p>
                </div>

                <input
                    type="email"
                    placeholder="Email address"
                    className="login-input"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="password-wrapper">
                    <input
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        className="login-input"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <span className="toggle-eye" onClick={() => setShow(!show)}>
                        {show ? "👁️‍🗨️" : "👁️"}
                    </span>
                </div>

                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    );
}
