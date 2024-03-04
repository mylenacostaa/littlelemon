// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer">
          <div className="center-footer">
              <div className="logo">
                  <img className="full-logo" src={`${process.env.PUBLIC_URL}/full-logo.png`} alt="Full Logo" />
              </div>
              <div className="hyperlinks">
                  <h6> Home </h6>
                  <h6> Our menu </h6>
                  <h6> Book a table </h6>
                  <h6> About us </h6>
              </div>
          </div>
      </div>
      <div className="credits">
          <p> Copyright © Little Lemon </p>
      </div>
    </footer>
  );
}

export default Footer;
