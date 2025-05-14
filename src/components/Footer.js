import React from 'react';

const Footer = ({ location }) => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      <p>Location: {location}</p>
    </footer>
  );
};

export default Footer;