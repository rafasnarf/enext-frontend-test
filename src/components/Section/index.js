import React from 'react';

import './index.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import * as data from 'json-loader!../../assets/fakeApi.json';

class Section extends React.Component {
  /*constructor(props) { 
    super(props);
    this.state = {
      data: []
    }
  }*/
  /*dados() {
    let URL = fakeApi;
    fetch(URL)
      .then(function (response) {
        let data = response.json()
        return data;
      })
      .then((json) => {
        console.log('message :', json)
        this.setState({ data: json });
      })
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }*/
  render() {
    return (
      console.log(data)
    )
  }

}
export default Section;