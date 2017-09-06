import React, { Component } from 'react';

import Buy from './Buy';
import Rent from './Rent';

class RentVSBuy extends Component {
	
  render() {
    return (
      <div className="container">
      BuyVSRent
        <div className="row">
          <div className="col">
            <Rent/>
          </div>
          <div className="col">
            <Buy/>
          </div>
        </div>
      </div>
    );
  }
};

export default RentVSBuy;