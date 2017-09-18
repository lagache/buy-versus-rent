import React, { Component } from 'react';
import Chartist from 'chartist';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import {setNumberOfYear, setMoneyAvailableNow, setMoneyAvailableFuture} from '../Actions';

class BuyVSRentCommon extends Component {
	
    constructor(props) {
    super(props);
    this.prepareData(props);
  }

  handleChange = value => {
    this.props.dispatch(setNumberOfYear(value));
  };

   handleChangeComplete = () => {
    this.render();
  };

  prepareData(props) {
    let labels = [];
    let seriesX = [];
    for (let year = 1; year <= props.numberOfYears; year++) {
      labels.push(year);
      seriesX.push(props.amountWeekly * 52 * year);
    }

    this.state = {
      labels: labels,
      series:[[seriesX]]
    }
  }

  updateChart() {
  	new Chartist.Pie('.buyVSRentChart', {
      series: [80, 20],
      labels: ['BUY', 'RENT']
    }, {
      donut: true,
      donutWidth: 30,
      donutSolid: true,
      startAngle: 270,
      total: 200,
      showLabel: true
    });

    
  }

  setMoneyAvailableNow(e) {
    this.props.dispatch(setMoneyAvailableNow(e.target.value));
  }

  setMoneyAvailableFuture(e) {
    this.props.dispatch(setMoneyAvailableFuture(e.target.value));
  }

  render() {
   
    return (
      <div className="container">
        <h4 className="card-title text-center">
          <i className="fa fa-bank"></i> Money and duration
        </h4>
        <div className="card-text">
          <div className="row">
            <div className="col">
              <h5>
                <i className="fa fa-hourglass-half"></i> Duration: {this.props.numberOfYear} years
              </h5>
              <Slider
                  min={1}
                  max={30}
                  value={this.props.numberOfYear}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChange}
                  onChangeComplete={this.handleChangeComplete}
                />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="md-form form-sm">
                <i className="fa fa-dollar prefix"/>
                <input type="number" id="money-avail-now" className="form-control" onBlur={(e) => this.setMoneyAvailableNow(e)}/>
                <label htmlFor="form2">Savings</label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="md-form form-sm">
                <i className="fa fa-dollar prefix"/>
                <input type="number" id="money-avail-fortnightly" className="form-control" onBlur={(e) => this.setMoneyAvailableFuture(e)}/>
                <label htmlFor="form2">Income fortnightly</label>
              </div>
            </div>
          </div>  
        </div>
      </div>  
    ); 
  }
};
 // <div className="row">
 //          <div className="col">
 //            <ChartV2/>
 //            <div className="buyVSRentChart"/>
 //          </div>
 //        </div>
function mapStateToProps(state) {
  return {
    numberOfYear: state.BuyVSRent.numberOfYear
  }
}

export default connect(mapStateToProps)(BuyVSRentCommon);