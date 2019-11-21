import React from 'react';

import './index.css';
import * as fakeApi from '../../assets/fakeApi.json'

class Section extends React.Component {

  renderPotion(row) {
    return (
      <ul>
        <li id='image'>{row.image}</li>
        <li id='name'>{row.name}</li>
        <li id='price'>{row.price}</li>
      </ul>)
  }
  render() {
    let rows = [];
    for (let i = 1; i < 7; i++) {
      rows.push(fakeApi.potions[i])
    }
    return (
      <div>
        <ul>
          {rows.map(this.renderPotion)}
        </ul>
      </div>
      //<h1>{fakeApi.potions[1].name}</h1>
      /*<div className='main-container'>
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