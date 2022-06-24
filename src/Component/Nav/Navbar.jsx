import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <p>stanley</p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/check">Check</Link>
      </li>
    </ul>
  </div>

);

export default Navbar;
