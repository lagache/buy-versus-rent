import React, { Component } from 'react';
import Chartist from 'chartist';
import 'chartist/dist/chartist.css';

class ChartV1 extends Component {
	
  constructor(props) {
    super(props);

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
   let labels = [];
    let seriesX = [[]];
    for (let year = 1; year <= nextProps.numberOfYears; year++) {
      labels.push(year);
      seriesX[0].push(nextProps.amountWeekly * 52 * year);
    }

    this.setState({
      labels: labels,
      series: seriesX
    });
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

    new Chartist.Bar('.chartV1', this.state, options, responsiveOptions);
  }

  render() {
    if (this.props.amountWeekly === 0) {
      return(<div></div>);
    }

    return (
      <div>
        <h4>Cost of renting</h4>
        <div className="chartV1"/>
      </div>
    );
  }
};

export default ChartV1;