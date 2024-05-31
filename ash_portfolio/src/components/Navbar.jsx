// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">FarmersTech</Link>
        <div>
          <Link to="/login" className="text-white px-4">Login</Link>
          <Link to="/signup" className="text-white px-4">Signup</Link>
          <Link to="/cart" className="text-white px-4">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
