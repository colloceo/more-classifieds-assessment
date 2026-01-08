import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src="/nav-logo.png" alt="More" className="nav-logo-icon" />
        <div className="logo-text-stack">
          <span className="logo-main">More</span>
          <span className="logo-sub">Classifieds</span>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/enquiry">Enquiry</Link>
      </div>
    </nav>
  );
};

export default Navbar;
