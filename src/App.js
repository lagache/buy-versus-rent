import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RentVSBuy from './Views/RentVSBuy';

//import 'waves/dist/waves';
import 'mdbootstrap/js/mdb.js';

import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/style.css';
import 'mdbootstrap/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Buy Versus Rent</h2>
        </div>
        <RentVSBuy/>
       
        <input type="range" min="0" max="100" />
      </div> 
    );
  }
}

export default App;
