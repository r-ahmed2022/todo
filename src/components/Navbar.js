/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="navbar">
      <button className="hamburger">&#9776;</button>
      <ul className="menu" />
    </div>

  );
}
