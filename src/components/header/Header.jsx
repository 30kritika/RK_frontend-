import React from "react";
import "./Header.css";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaFacebook, FaTwitter, FaPinterest, FaSearch, FaRegSquare, FaUsers, FaHandshake, FaRegPlayCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="homepage">

      {/* Blue Section */}
      <div className="top-bar">
        <div className="contact-info">
          <span><IoIosMail className="icon" />www.registerkaro.in</span>
          <span><FaPhone className="icon" />+918447746183</span>
        </div>
        <div className="social-icons">
          <a href="#instagram" rel=""><FaInstagram size="1rem" color="white" /></a>
          <a href="#facebook" rel=""><FaFacebook size="1rem" color="white" /></a>
          <a href="#twitter" rel=""><FaTwitter size="1rem" color="white"/></a>
          <a href="#pinterest" rel=""><FaPinterest size="1rem" color="white"/></a>
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="navbar">
          <span className="logo"></span>
          {/* <img src="./logo.png" alt="" className="logo" /> */}
          <nav className="navbar-links">
            <a href="#home">Home</a>
            <div className="dropdown">
              <button className="dropdown-toggle">Our Services</button>
              <div className="dropdown-menu">
                <a href="#service1">Service 1</a>
                <a href="#service2">Service 2</a>
                <a href="#service3">Service 3</a>
              </div>
            </div>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
            <a href="#about">About Us</a>
            <a href="#search"><FaSearch /></a>
            <button className="cta-btn">Talk An Expert</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="bg-image">
            <div className="text-container">
              <div className="star">
                <IoIosStarOutline color="#f3c84c"/> Google Rating {" "}
                <IoIosStar color="#f3c84c"/>
                <IoIosStar color="#f3c84c"/>
                <IoIosStar color="#f3c84c"/>
                <IoIosStar color="#f3c84c"/>
                <IoIosStar color="#f3c84c"/>
              </div>
              <h1>Your trusted partner <br />for compliance business needs</h1>
              <section className="red"></section>
              {/* right image */}
              <div className="right-image">
                {/* <img src="./bg.png" alt="background" /> */}
              </div>
              <p>An online business compliance platform that helps entrepreneurs and <br/>
                other individuals with various <span className="dark">registrations</span>, <span className="dark">tax filings</span>, and
                <span className="dark"> legal <br/>matters.</span>
              </p>
              {/* Stats Section */}
              <div className="stats-section">
                <div className="stat-item">
                  <FaRegSquare className="stat-icon" />
                  <div>
                    <h3>4.5+</h3>
                    <p>Customer Rating</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaUsers className="stat-icon" />
                  <div>
                    <h3>20,000+</h3>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaHandshake className="stat-icon" />
                  <div>
                    <h3>99.8%</h3>
                    <p>Financial Stability</p>
                  </div>
                </div>
              </div>

              
              {/* Buttons */}
              <div className="buttons">
                <button className="expert">Talk to an Expert</button>
                <button className="play">
                  <FaRegPlayCircle color="#fd4b27" className="icon"/> See How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
