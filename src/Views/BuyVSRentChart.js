import React, { Component } from 'react';
import Chartist from 'chartist';
import 'chartist/dist/chartist.css';

class BuyVSRentChart extends Component {
	
  constructor(props) {
    super(props);
    this.prepareData(props);
  } 

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

  componentDidUpdate() {
    this.updateChart();
  }

  componentWillReceiveProps(nextProps) {
    this.prepareData(nextProps);
  }

  updateChart() {
  	var options = {
      seriesBarDistance: 10,
      axisX: {
          position: 'start'
        },
        axisY: {
          position: 'end'
        }
    };

    var responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    new Chartist.Bar('.buyVSRentChart', this.state, options, responsiveOptions);
  }

  render() {
    return (
      <div>
        <h3>Buy VS Rent</h3>
        <div className="buyVSRentChart"/>
      </div>
    );
  }
};

export default BuyVSRentChart;