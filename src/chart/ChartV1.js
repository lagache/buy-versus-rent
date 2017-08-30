import React, { Component } from 'react';
import Chartist from 'chartist';
import 'chartist/dist/chartist.css';

class ChartV1 extends Component {
	

  componentDidMount() {
    this.updateChart(this.props.data);
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
        <div className="chartV1"></div>
      </div>
    );
  }
};

export default ChartV1;