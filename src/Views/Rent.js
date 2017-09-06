import React, { Component } from 'react';

import ChartRentCostOvertime from './ChartRentCostOvertime';

class Rent extends Component {
	
  render() {
    return (
      <div className="container">
        Rent
        <div className="row">
          <div className="col">
            <div className="md-form">
              <image className="fa fa-dollar prefix"></image>
              <input type="text" id="form2" className="form-control"/>
              <label htmlFor="form2">Amount weekly</label>
            </div>
            <div className="md-form">
              <input type="text" id="form1" className="form-control"/>
              
            </div>
          </div>
        </div>  
        <div className="row">
          <ChartRentCostOvertime/>
        </div>
      </div>
    );
  }
};

export default Rent;