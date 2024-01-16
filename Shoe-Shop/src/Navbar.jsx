// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white mr-4 text-lg font-bold">Home</Link>
        
        <div className="flex space-x-10">
          <Link to="/shoes" className="text-white">Shoes</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/cart" className="text-white">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
