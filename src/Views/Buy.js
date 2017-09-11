import React, { Component } from 'react';

class Buy extends Component {
	
  render() {
    return (
      <div className="container">
        <h2>Buy</h2>
        <div className="row">
          <div className="col">
            <div className="md-form">
              <input type="number" id="weekly-rent" className="form-control" onBlur={(e) => this.populateAmount(e)}/>
              <label htmlFor="form2">House price</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="md-form">
              <input type="number" id="weekly-rent" className="form-control" onBlur={(e) => this.populateAmount(e)}/>
              <label htmlFor="form2">Mortgage rate</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Buy;