function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { ScreenStack, Screen as ScreenComponent } from 'react-native-screens';
import { StackActions, useTheme } from '@react-navigation/native';
import HeaderConfig from './HeaderConfig';
const Screen = ScreenComponent;
export default function NativeStackView({
  state,
  navigation,
  descriptors
}) {
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(ScreenStack, {
    style: styles.container
  }, state.routes.map(route => {
    const {
      options,
      render: renderScene
    } = descriptors[route.key];
    const {
      gestureEnabled,
      stackPresentation = 'push',
      stackAnimation,
      contentStyle
    } = options;
    return /*#__PURE__*/React.createElement(Screen, {
      key: route.key,
      style: StyleSheet.absoluteFill,
      gestureEnabled: Platform.OS === 'android' ? false : gestureEnabled,
      stackPresentation: stackPresentation,
      stackAnimation: stackAnimation,
      onAppear: () => {
        navigation.emit({
          type: 'appear',
          target: route.key
        });
      },
      onDismissed: () => {
        navigation.emit({
          type: 'dismiss',
          target: route.key
        });
        navigation.dispatch(_objectSpread(_objectSpread({}, StackActions.pop()), {}, {
          source: route.key,
          target: state.key
        }));
      }
    }, /*#__PURE__*/React.createElement(HeaderConfig, _extends({}, options, {
      route: route
    })), /*#__PURE__*/React.createElement(View, {
      style: [styles.container, {
        backgroundColor: stackPresentation !== 'transparentModal' ? colors.background : undefined
      }, contentStyle]
    }, renderScene()));
  }));
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=NativeStackView.js.map