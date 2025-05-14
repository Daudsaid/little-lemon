import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import ReservationForm from './components/ReservationForm';
import ReservationCard from './components/ReservationCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <header className="hero">
        <div className="container hero-content">
          <h2>Fresh Mediterranean Flavors</h2>
          <p>Discover delicious dishes crafted with love and fresh ingredients.</p>
          <button className="hero-button">Explore Menu</button>
        </div>
      </header>

      <section id="menu" className="menu-section">
        <div className="container">
          <h3>Popular Dishes</h3>
          <div className="menu-grid">
            <ReservationCard
              title="Greek Salad 🥗"
              description="Fresh veggies, feta, and olives tossed in olive oil dressing."
            />
            <ReservationCard
              title="Bruschetta 🍞"
              description="Grilled bread topped with fresh tomatoes, garlic & basil."
            />
            <ReservationCard
              title="Lemon Dessert 🍰"
              description="A sweet and tangy treat with a burst of lemon flavor."
            />
          </div>
        </div>
      </section>

      <section id="reservations" className="reservation-section">
        <div className="container">
          <h3>Reserve a Table</h3>
          <ReservationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;