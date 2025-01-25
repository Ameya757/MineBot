import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chatbot from "./pages/Chatbot";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
    const [loginOrNot, setLoginOrNot] = useState("false"); // State initialized as false

    // Check localStorage on component mount
    useEffect(() => {
        const loginValue = localStorage.getItem("User") === "true"; // Compare value directly
        setLoginOrNot(loginValue);
    }, []); // Only run on mount

    const handleLogout = () => {
        localStorage.clear(); // Clear storage
        setLoginOrNot(false); // Update state to reflect logged-out status
    };

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MineBot</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {loginOrNot ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={handleLogout} to="/">LogOut</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">Signup</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <Routes>
                    <Route path="/login" element={loginOrNot ? <Home /> : <Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/chatbot" element={loginOrNot ? <Chatbot /> : <Login />} />
                    <Route path="/home" element={loginOrNot ? <Home /> : <Login />} />
                    <Route path="/" element={loginOrNot ? <Home /> : <Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
