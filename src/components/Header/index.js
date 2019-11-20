import React from 'react';
import cauldron from '../../assets/images/cauldron.png';

import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='merlin' >
          <p id='merlins'>Merlin's Potions</p>
          <p id='moto'>fine potions since 1026</p>
        </div>
        <div className='search'>
          <input type='text' value='Search our stock' />
        </div>
        <div className='cart'>
          <div className='free'>
            <p id='free'>Free Shipping</p>
            <p><span>on orders over $50</span></p>
          </div>
          <img src={cauldron} alt='Cauldron'></img>
          <p id='bag'>Bag: </p>
          <p>1</p>
        </div>
      </div >
    )
  }
}
export default Header;