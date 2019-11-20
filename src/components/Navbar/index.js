import React from 'react';

import './index.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-menu'>
        <ul>
          <li>Potions</li>
          <li>Ingredients</li>
          <li>Supplies</li>
          <li>Books</li>
          <li>Charms</li>
          <li id='clear'>Clearance!</li>
        </ul>
        <ul id='sing'>
          <li >Sing in</li>
          <li id='ou'>or</li>
          <li >Sing Out</li>
        </ul>
      </div>
    )
  }
}
export default NavBar;