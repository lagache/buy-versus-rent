import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import RentVSBuy from './Views/RentVSBuy';

import 'mdbootstrap';

import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/style.css';
import 'mdbootstrap/css/mdb.css';

const initialState = {
    start: 'KO'
};

const store = configureStore(initialState);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Buy Versus Rent</h2>
          </div>
          <RentVSBuy/>
        </div>
      </Provider> 
    );
  }
}

export default App;
