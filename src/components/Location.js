import React from 'react';

const Location = () => {
  return (
    <section id="location" className="location-section">
      <h3>Visit Us in Stoke Newington</h3>
      <p>📍 123 Green Lane, Stoke Newington, London N16</p>
      <p>🕒 Open daily: 10:00 AM - 10:00 PM</p>
      <iframe
        title="Little Lemon Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19897.479854393363!2d-0.0880162!3d51.5608465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cd683e9d6c1%3A0x2b55f11c6e44f59e!2sStoke%20Newington!5e0!3m2!1sen!2suk!4v1700000000000"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '12px', marginTop: '1rem' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;