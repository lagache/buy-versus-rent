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
        <h4 className="card-title text-center">
          <i className="fa fa-home"></i> Buy a place
        </h4>
        <div className="card-text">
          <div className="row">
            <div className="col">
              <div className="md-form form-sm">
                <i className="fa fa-dollar prefix"/>
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
              <div className="md-form form-sm">
                <i className="fa fa-dollar prefix"/>
                <input 
                  type="number"
                  id="interest-rate" 
                  className="form-control" 
                  onChange={(e) => this.setWMortgageRate(e)}/>
                <label htmlFor="form2">Mortgage rate</label>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <p>Money left (mortgage): ${this.props.mortgageMoneyLeft}</p>
            </div>
          </div>
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