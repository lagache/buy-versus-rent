import React, { Component } from 'react';

import Slider from 'react-rangeslider'
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
        Rent
        <div className="row">
          <div className="col">
             <Slider
              min={0}
              max={100}
              value={this.state.numberOfYears}
              onChangeStart={this.handleChangeStart}
              onChange={this.handleChange}
              onChangeComplete={this.handleChangeComplete}
            />
            <div className="md-form">
              <input type="number" id="form2" className="form-control" onBlur={(e) => this.populateAmount(e)}/>
              <label htmlFor="form2">Amount weekly</label>
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