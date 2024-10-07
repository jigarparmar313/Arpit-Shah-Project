import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link for active styling
import logo from '../assets/arpit.png';
import '../styles/Navbar.css'; // Assuming you will add the custom CSS in this file

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            <img src={logo} width={100} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-sm-center text-md-center text-xs-center" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  text-uppercase">
              <li className="nav-item mx-4">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to="/residential-projects"
                >
                  Residential Projects
                </NavLink>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="d-flex social-icons d-flex justify-content-center align-items-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
