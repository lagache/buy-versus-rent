import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-rangeslider/lib/index.css'

import {setHousePrice, setMortgageRate} from '../Actions';

class Buy extends Component {

  setHousePrice(e) {
    this.props.dispatch(setHousePrice(e.target.value));
  }

  setWMortgageRate(e) {
    this.props.dispatch(setMortgageRate(e.target.value));
  }

  render() {
    return (
      <div className="container">
        <h2>Buy</h2>
        <div className="row">
          <div className="col">
            <div className="md-form">
              <input 
                type="number" 
                id="house-price" 
                className="form-control" 
                onChange={(e) => this.setHousePrice(e)}/>
              <label htmlFor="form2">House price</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="md-form">
              <input 
                type="number"
                id="interest-rate" 
                className="form-control" 
                onChange={(e) => this.setWMortgageRate(e)}/>
              <label htmlFor="form2">Mortgage rate (%)</label>
            </div>
          </div>
        </div>
        
        <div className="row">
          <p>Money left (mortgage): ${this.props.mortgageMoneyLeft}</p>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    futureBalanceSavings: state.BuyVSRent.futureBalanceSavings,
    mortgageRate: state.BuyVSRent.mortgageRate,
    mortgageMoneyLeftToPay: state.BuyVSRent.mortgageMoneyLeftToPay
  }
}

export default connect(mapStateToProps)(Buy);