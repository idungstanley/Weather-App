import React from 'react';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import './nav.css';
import logo from '../../Assets/weather-logo.png';

const Navbar = () => (
  <div className="container">
    <img src={logo} alt="logo" />
    <Hamburger onToggle={(toggled) => {
      if (toggled) {
        <ul className="link-container">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
        </ul>;
      }
    }}
    />
  </div>

);

export default Navbar;
