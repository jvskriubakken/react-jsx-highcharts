import React, { Component } from 'react';
import NavigatorAxis from './NavigatorAxis';

class NavigatorYAxis extends Component {
  render () {
    return (
      <NavigatorAxis {...this.props} axisId="navigator-y-axis" />
    );
  }
}

export default NavigatorYAxis;
