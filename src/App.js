import React, { Component } from 'react';
import './App.css';
import 'chartist/dist/chartist.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import BuyVSRent from './Views/BuyVSRent';

import 'mdbootstrap';

import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/style.css';
import 'mdbootstrap/css/mdb.css';

const initialState = {
};

const store = configureStore(initialState);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="section mb-4">
            <div className="App-header">
              <h2>Buy Versus Rent</h2>
            </div>
          </div>  
          <BuyVSRent/>
        </div>
      </Provider> 
    );
  }
}

export default App;
