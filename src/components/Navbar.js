import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/nav.css"

function Navbar() {

  return (<ul id="nav-bar">
    <Link to="/logout">Logout</Link>
    <Link to="/formCreate">Create</Link>
    <Link to="/campaigns">Campaigns</Link>
  </ul>);
}

export default Navbar;
