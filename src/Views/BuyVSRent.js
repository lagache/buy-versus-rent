import React, { Component } from 'react';

import rentHousePic from '../assets/rent-houses.jpg';
import buyHousePic from '../assets/buy-houses.jpg';

import Buy from './Buy';
import Rent from './Rent';
import BuyVSRentCommon from './BuyVSRentCommon';

class RentVSBuy extends Component {
	
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card mb-4">
              <div className="card-body">
                <BuyVSRentCommon />
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          
          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="card mb-4">
              <div className="view overlay hm-white-slight">
                <img src={rentHousePic} className="img-fluid" alt="rent a place"/>
              </div>
              <div className="card-body">
                <Rent/>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-5">
            <div className="card mb-4">
              <div className="view overlay hm-white-slight">
                <img src={buyHousePic} className="img-fluid" alt="buy a place"/>
              </div>
              <div className="card-body">
                <Buy/>
              </div>
            </div>  
          </div>
        </div>
      </div>
    );
  }
};

export default RentVSBuy;