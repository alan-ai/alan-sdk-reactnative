/*jshint esversion: 6 */

import PropTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';

class AlanText extends React.Component {
  render() {
    return <RNTAlanText {...this.props} />;
  }
}

AlanText.propTypes = {
};

var RNTAlanText = requireNativeComponent('RNTAlanText', AlanText);
module.exports = AlanText;
