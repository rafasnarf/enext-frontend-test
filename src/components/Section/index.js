import React from 'react';

import './index.css';
import * as fakeApi from '../../assets/fakeApi.json'
import agingPotion from '../../assets/images/products/aging-potion.png';

class Section extends React.Component {

  /*renderPotion(row) {
    return (
      <ul>
        <img src= />
        <li id='name'>{row.name}</li>
        <li id='price'>{row.price}</li>
      </ul>)
  }*/
  render() {
    /*let rows = [];
    for (let i = 1; i < 7; i++) {
      rows.push(fakeApi.potions[i])
    }*/
    return (
      <div className='main-container'>
        <ul>
          <div className='potion'>
            <img id='image' src={agingPotion} alt='Aging Potion' />
            <li id='name'>Aging Potion</li>
            <li id='price'>29.99</li>
            <img id='image' src={agingPotion} alt='Aging Potion' />
            <li id='name'>Aging Potion</li>
            <li id='price'>29.99</li>
            <img id='image' src={agingPotion} alt='Aging Potion' />
            <li id='name'>Aging Potion</li>
            <li id='price'>29.99</li>
            <img id='image' src={agingPotion} alt='Aging Potion' />
            <li id='name'>Aging Potion</li>
            <li id='price'>29.99</li>
            <img id='image' src={agingPotion} alt='Aging Potion' />
            <li id='name'>Aging Potion</li>
            <li id='price'>29.99</li>
            <img id='image' src={agingPotion} alt='Aging Potion' />
            <li id='name'>Aging Potion</li>
            <li id='price'>29.99</li>
          </div>
        </ul>
      </div>
      //<h1>{fakeApi.potions[1].name}</h1>
      /*<div className='main-container'>
      {rows.map(this.renderPotion)}
        <h1>Potions</h1>
        <ul>
          {fakeApi.potions.map(id => (
            <li key={fakeApi.potions.id}>
              <img src={fakeApi.potions.image} alt={fakeApi.potions.name} />
              <footer>
                <strong>{fakeApi.potions.name}</strong>
                <p>{fakeApi.potions.price}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>*/
    )
  }

}
export default Section;