import React, { Component } from 'react';

import Buy from './Buy';
import Rent from './Rent';
import BuyVSRentCommon from './BuyVSRentCommon';

class RentVSBuy extends Component {
	
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <BuyVSRentCommon />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col border">
            <Rent/>
          </div>
          <div className="col border">
            <Buy/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
};

export default RentVSBuy;