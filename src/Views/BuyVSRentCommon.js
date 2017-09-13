import React, { Component } from 'react';
import Chartist from 'chartist';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import {setNumberOfYear, setMoneyAvailableNow, setMoneyAvailableFuture} from '../Actions';

import ChartV2 from '../chart/ChartV2';

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

  componentDidMount() {
    //this.updateChart();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.prepareData(nextProps);
  // }

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
        <br/>
        <div className="row">
          <div className="col">
             <h2>{this.props.numberOfYear} years</h2>
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
          <div className="col">
            <div className="md-form form-group">
              <input type="number" id="money-avail-now" className="form-control" onBlur={(e) => this.setMoneyAvailableNow(e)}/>
              <label htmlFor="form2">Money available (now)</label>
            </div>
          </div>
          <div className="col">
            <div className="md-form">
              <input type="number" id="money-avail-fortnightly" className="form-control" onBlur={(e) => this.setMoneyAvailableFuture(e)}/>
              <label htmlFor="form2">Money available (fortnightly)</label>
            </div>
          </div>
        </div>  
        <div className="row">
          <div className="col">
            <ChartV2/>
            <div className="buyVSRentChart"/>
          </div>
        </div>
      </div>
    ); 
  }
};

function mapStateToProps(state) {
  return {
    numberOfYear: state.BuyVSRent.numberOfYear
  }
}

export default connect(mapStateToProps)(BuyVSRentCommon);