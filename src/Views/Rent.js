import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css'

import ChartRentCostOvertime from './ChartRentCostOvertime';

class Rent extends Component {
	
  constructor(props) {
    super(props);

    this.state = {
      amountWeekly: 0,
      numberOfYears: 10

    }
  }

  handleChangeStart = () => {
    console.log('Change event started');
  };

  handleChange = value => {
    this.setState({
      numberOfYears: value
    })
  };

   handleChangeComplete = () => {
    this.render();
  };


  populateAmount(e) {
    this.setState({amountWeekly: e.target.value});
  }

  render() {
    return (
      <div className="container">
        <h2>Rent</h2>
        <div className="row">
          <div className="col">
            <div className="md-form">
              <input 
                type="number" 
                id="weekly-rent" 
                className="form-control" 
                onBlur={(e) => this.populateAmount(e)}/>
              <label htmlFor="form2">Rent (Weekly)</label>
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
                onBlur={(e) => this.populateAmount(e)}/>
              <label htmlFor="form2">Interest rate (savings)</label>
            </div>
          </div>
        </div>
        <div className="row">
          <ChartRentCostOvertime amountWeekly={this.state.amountWeekly} numberOfYears={this.state.numberOfYears}/>
        </div>
      </div>
    );
  }
};

export default Rent;