import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartV1 from './chart/ChartV1';
import ChartV2 from './chart/ChartV2';
import ChartV3 from './chart/ChartV3';

import 'jquery';
//import 'waves/dist/waves';
//import 'mdbootstrap/js/mdb.js';

import 'mdbootstrap/css/mdb.css';
//import 'mdbootstrap/css/style.css';
//import 'mdbootstrap/css/bootstrap.css';

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Buy Versus Rent</h2>
        </div>
        <div>
          <h3>Test import MD Bootstrap components</h3>
          <button type="button" className="btn btn-primary">Button MD Primary</button>
          <button type="button" className="btn btn-secondary">Button MD Secondary</button>
        </div>
       
        <input type="range" min="0" max="100" />
        
        <ChartV1 data={data}/>
        
        <ChartV2 data={data}/>

         <ChartV3 data={data}/>
      </div>
    );
  }
}

export default App;
