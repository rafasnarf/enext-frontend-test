import React from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class NavBar extends React.Component {
  render() {
    let classeDeMenu = 'navbar-menu';
    return (
      <div className='nav-menu'>
        <ul>
          <li>Potions</li>
          <li>Ingredients</li>
          <li>Supplies</li>
          <li>Books</li>
          <li>Charms</li>
          <li className='clear'>Clearance!</li>
          <li>Sing in</li>
          <li id='ou'>or</li>
          <li>Sing Out</li>
        </ul>
      </div>
    )
  }
}
export default NavBar;