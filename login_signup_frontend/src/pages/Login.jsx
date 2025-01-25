// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [colorName, setColorName] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/auth/login", null, {
                params: credentials,
            });
            setMessage(response.data); // Success message
            setColorName("green");
            localStorage.setItem("User", "true"); // Update localStorage
            navigate("/home"); // Redirect to home page
        } catch (error) {
            setMessage("Error: Invalid credentials");
            setColorName("red");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg" style={{ width: "28rem" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <br />
                    {message && <p className="text" style={{ color: colorName }}>{message}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={credentials.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={credentials.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <Link className="text text-primary" to="/signup">Want to Sign up First..</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
