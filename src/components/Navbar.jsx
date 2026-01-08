import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="More Classifieds" style={{ height: '40px', width: 'auto' }} />
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
