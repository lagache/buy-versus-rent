import React, { Component } from 'react';
import Chartist from 'chartist';
import 'chartist/dist/chartist.css';

var data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    series: [
      [25000, 50000, 75000, 100000, 125000, 150000, 175000, 200000, 225000, 250000]
    ]
  };

class ChartV1 extends Component {
	
  componentDidMount() {
    this.updateChart(data);
  }

  updateChart(data) {
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

    new Chartist.Bar('.chartV1', data, options, responsiveOptions);
  }

  render() {
    return (
      <div>
        <h3>Chart 1: no animation, bars overlapping on Mobile, axis top/right</h3>
        <div className="chartV1"/>
      </div>
    );
  }
};

export default ChartV1;