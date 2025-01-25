import React, {useState,useEffect} from 'react'
import logo from '../assets/logo.png';
import video from '../assets/video.mp4';
import gold from '../assets/gold.jpeg';
import coal from '../assets/coal.jpeg';
import mineral from '../assets/mineral.jpeg';
import nuclear from '../assets/nuclear.jpeg';
import "./Home.css";
import { Link } from 'react-router-dom';
function Home() {

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
        const slides = [gold, coal, mineral, nuclear]; // Array of images
        const [slideIndex, setSlideIndex] = useState(0);
      
        // Function to change slides automatically
        useEffect(() => {
          const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }, 3000); // Change image every 3 seconds
          return () => clearInterval(interval); // Cleanup interval on unmount
        }, [slides.length]);
      
        // Function to manually change slides
        const plusSlides = (n) => {
          setSlideIndex((prevIndex) =>
            (prevIndex + n + slides.length) % slides.length
          );
        };
    
  return (
    <div>
    <video autoPlay muted loop id="video-background">
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    {/* <header>
        <div className="content">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="header-text">
                <h2>The MineBot</h2>
                <p>Simplify Your Mining Queries with Us</p>

            </div>
            <div className="otherContent">
                <div className="nav1">
                    <a href="home.html">Home</a>
                </div>
                <div className="nav2">
                    <a href="about.html">About Us</a>
                </div>
                <div className="nav3">
                    <a href="contact.html">Contact Us</a>
                </div>

            </div>


        </div>
    </header> */}
    <div className="hero">
    <div className="slideshow-container" id="slideshow">
      {slides.map((slide, index) => (
        <div
          className={`mySlides fade ${index === slideIndex ? "active" : ""}`}
          key={index}
          style={{ display: index === slideIndex ? "block" : "none" }}
        >
          <img src={slide} alt={`Slide ${index + 1}`} style={{ width: "75%" }} />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      {/* Optional: Add dots for navigation */}
      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => setSlideIndex(index)}
            style={{
              cursor: "pointer",
              height: "15px",
              width: "15px",
              margin: "0 2px",
              backgroundColor: index === slideIndex ? "#717171" : "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              transition: "background-color 0.6s ease",
            }}
          ></span>
        ))}
      </div>
    </div>
    </div>
    <br/>
    <div className="center">
        <Link to={"/Chatbot"} className="button">MineBot</Link>
    </div>

    </div>
  )
}

export default Home