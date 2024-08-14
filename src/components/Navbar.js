import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import userImage from './user.jpg'; // Importing the image

const Navbar = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };

  const handleClose = (e) => {
    if (e.target.className === 'modal') {
      setIsImageClicked(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="user-info">
          <img
            src={userImage}
            alt="Ajay Wagh"
            className="user-image"
            onClick={handleImageClick}
          />
          <span className="user-name">Ajay Wagh</span>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/exp">Experience</Link></li>
            <li><Link to="/projects">Project</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {isImageClicked && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content">
            <img src={userImage} alt="Ajay Wagh" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
