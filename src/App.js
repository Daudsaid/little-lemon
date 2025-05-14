import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ReservationForm from './components/ReservationForm';
import ReservationCard from './components/ReservationCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroBanner />

      <section id="menu" className="menu-section">
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
      </section>

      <ReservationForm />

      <Footer location="Stoke Newington, London" />
    </div>
  );
};

export default App;