import React from 'react';
import '../App.css';

const ReservationCard = ({ title, description }) => {
  return (
    <div className="menu-item">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ReservationCard;