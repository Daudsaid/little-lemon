import React from 'react';
import '../App.css';

const ReservationForm = () => {
  return (
    <section id="reservations" className="reservation-section">
      <h3>Reserve a Table</h3>
      <form className="reservation-form">
        <input type="text" placeholder="Name" required />
        <input type="date" required />
        <input type="time" required />
        <input type="number" placeholder="Guests" required min="1" max="10" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ReservationForm;