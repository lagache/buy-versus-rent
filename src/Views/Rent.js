import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-rangeslider/lib/index.css'

import {setSavingInterestRate, setWeeklyRent, setTaxRate} from '../Actions';

class Rent extends Component {

  setSavingInterestRate(e) {
    this.props.dispatch(setSavingInterestRate(e.target.value));
  }

  setWeeklyRent(e) {
    this.props.dispatch(setWeeklyRent(e.target.value));
  }

   setTaxRate(e) {
    this.props.dispatch(setTaxRate(e.target.value));
  }

  render() {
    return (
      <div className="container">
        <h2>Rent</h2>
        <div className="row">
          <div className="col">
            <div className="md-form form-sm">
              <i className="fa fa-dollar prefix"/>
              <input 
                type="number" 
                id="weekly-rent" 
                className="form-control" 
                onChange={(e) => this.setWeeklyRent(e)}/>
              <label htmlFor="form2">Rent Weekly</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="md-form form-sm">
              <i className="fa fa-percent prefix"/>
              <input 
                type="number"
                id="interest-rate" 
                className="form-control" 
                onChange={(e) => this.setSavingInterestRate(e)}
                value={this.props.savingInterestRate}/>
              <label htmlFor="form2">Interest rate (%)</label>
            </div>
          </div>
        </div>
         <div className="row">
          <div className="col">
            <div className="md-form form-sm">
              <i className="fa fa-percent prefix"/>
              <input 
                type="number"
                id="tax-rate" 
                className="form-control" 
                onChange={(e) => this.setTaxRate(e)}
                value={this.props.taxRate}/>
              <label htmlFor="form2">Tax rate (%)</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Saving balance: ${this.props.futureBalanceSavings}</p>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    futureBalanceSavings: state.BuyVSRent.futureBalanceSavings,
    taxRate: state.BuyVSRent.taxRate,
    savingInterestRate: state.BuyVSRent.savingInterestRate
  }
}

export default connect(mapStateToProps)(Rent);