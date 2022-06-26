import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => (
  <div className="container">
    <h1>Country Population</h1>
    <ul className="link-container">
      <li className="link">
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>

);

export default Navbar;
