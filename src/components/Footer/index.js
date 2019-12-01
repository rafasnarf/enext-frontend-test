import React from 'react';

import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='main-container-footer'>
        <div className='company'>
          <p>COMPANY</p>
          <p>CONTACT US</p>
          <p>SHIPPING RETURNS</p>
          <p>CARRERS</p>
          <div className='social-media'>
            <img src={require('../../assets/images/facebook.png')} alt='facebook' />
            <img src={require('../../assets/images/twitter.png')} alt='twitter' />
            <img src={require('../../assets/images/pinterest.png')} alt='pinterest' />
            <img src={require('../../assets/images/tumblr.png')} alt='tumblr' />
            <img src={require('../../assets/images/googleplus.png')} alt='facebook' />
          </div>
          <div className='copyrigths'>
            <p>2019 Merlin's Potions. All Rights Reserved</p>
          </div>
        </div>

        <div className='box'>
          <div className='submit-box'>
            <p>Sing Up for our Newsletter</p>
            <p><span>Sing up for our Newsletter & get exclusive discounts!</span></p>
            <input type='text' value='Enter your email' />
            <input type='button' id='button' value='SUBMIT' />
          </div>
        </div>
      </div>

    )
  }
}

export default Footer;