// src/pages/Signup.jsx
import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Signup = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const [colorName, setColorName] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/auth/signup", user);
            setMessage(response.data); // Success message
            if(response.data == "Email Already Exist") setColorName("red"); 
            else setColorName("green");
        } catch (error) {
            setMessage("Error: Unable to register");
            setColorName("red");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg" style={{ width: "28rem" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Signup</h3>
                    <br />
                    {message && <p className="text" style={{color:colorName}}>{message}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="name"
                                placeholder="Enter your full name"
                                value={user.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={user.email}
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
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Signup</button>
                    </form>
                    <Link className="text text-primary" to="/login">Want to Log in..</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
