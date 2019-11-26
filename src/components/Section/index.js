import React from 'react';

import './index.css';
import * as fakeApi from '../../assets/fakeApi.json'

class Section extends React.Component {

  render() {
    let rows = [];
    for (let i = 1; i < 7; i++) {
      rows.push(fakeApi.potions[i])
    }
    console.log(rows.image)
    return (
      < div className='main-container' >
        <h1>Potions</h1>
        <div className='potion'>
          <ul>
            {rows.map(row => (
              < li>
                <img id='image' src={`/images/products/${row.image}`} alt={row.name} />
                <ul>
                  <li id='name'>{row.name} - </li>
                  <li id='price'>${row.price}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div >

      /*<div>
        <h1>Potions</h1>
        <ul>
          {rows.map(this.renderPotion)}
        </ul>
      </div>*/

    )
  }

}
export default Section;