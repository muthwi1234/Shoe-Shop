// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Fetch from './Fetch';
import SignUp from './Signup';
import Login from './Login';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<Fetch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


