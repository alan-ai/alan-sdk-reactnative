/*jshint esversion: 6 */

import PropTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';

class AlanButton extends React.Component {
  render() {
    return <RNTAlanButton {...this.props} />;
  }
}

AlanButton.propTypes = {
  projectid: PropTypes.string,
};

var RNTAlanButton = requireNativeComponent('RNTAlanButton', AlanButton);
module.exports = AlanButton;