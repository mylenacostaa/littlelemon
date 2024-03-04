// src/components/NavBar.js
import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <div className="center">
          <div className="nav">
            <img className="logo" alt="logo" src="logo.png" />
            <div className="links">
              <h3>Home</h3>
              <h3>Our menu</h3>
              <h3>Book a table</h3>
              <h3>About us</h3>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
