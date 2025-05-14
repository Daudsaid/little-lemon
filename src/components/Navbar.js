import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Little Lemon 🍋</h1>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button className="cta-button">Book a Table</button>
      </div>
    </nav>
  );
};

export default Navbar;