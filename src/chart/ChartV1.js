import React, { Component } from 'react';
import Chartist from 'chartist';
import 'chartist/dist/chartist.css';

class ChartV1 extends Component {
	

  componentDidMount() {
    this.updateChart(this.props.data);
  }

  updateChart(data) {
  	var options = {
      seriesBarDistance: 10
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
      <div className="chartV1"></div>
    );
  }
};

export default ChartV1;