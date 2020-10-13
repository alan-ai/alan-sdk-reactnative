/*jshint esversion: 6 */

import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {requireNativeComponent} from 'react-native';

const styles = StyleSheet.create({
  textView: {
    height: 64,
    right: 20,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  buttonView: {
    width: 64,
    height: 64,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  bottomView: {
    width: '100%',
    height: 64,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

class AlanButton extends React.Component {
  render() {
    return <RNTAlanButton {...this.props} />;
  }
}

AlanButton.propTypes = {
  params: PropTypes.array,
};

var RNTAlanButton = requireNativeComponent('RNTAlanButton', AlanButton);

class AlanText extends React.Component {
  render() {
    return <RNTAlanText {...this.props} />;
  }
}

AlanText.propTypes = {
};

var RNTAlanText = requireNativeComponent('RNTAlanText', AlanText);

class AlanView extends React.Component {
  render() {
    return <View style={styles.bottomView}>
        <AlanText style={styles.textView} />
        <AlanButton
          style={styles.buttonView}
          params={[
            this.props.projectid,
            this.props.host,
            this.props.authData,
            '1.0.6',
          ]}
        />
      </View>;
  }
}

AlanView.propTypes = {
  projectid: PropTypes.string,
  host: PropTypes.string,
  authData: PropTypes.object,
};

module.exports = {
  AlanView: AlanView,
};
