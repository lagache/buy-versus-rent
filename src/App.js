import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartV1 from './chart/ChartV1';
import ChartV2 from './chart/ChartV2';
import 'mdbootstrap/css/mdb.css';

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
        <button type="button" className="btn btn-primary">Primary</button>
        TEST
        <div className="switch">
          <label>
            Off
            <input type="checkbox"/>
            <span className="lever"></span>
            On
          </label>
        </div>
        <form className="range-field">
          <input type="range" min="0" max="100" />
        </form>
        Chart V1:
        <ChartV1 data={data}/>
        Chart V2:
        <ChartV2 data={data}/>
      </div>
    );
  }
}

export default App;
