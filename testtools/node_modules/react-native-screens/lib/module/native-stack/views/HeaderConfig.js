import * as React from 'react';
import { ScreenStackHeaderBackButtonImage, ScreenStackHeaderConfig, ScreenStackHeaderRightView, ScreenStackHeaderLeftView, ScreenStackHeaderCenterView } from 'react-native-screens';
import { useTheme } from '@react-navigation/native';
export default function HeaderConfig(props) {
  const {
    colors
  } = useTheme();
  const {
    route,
    title,
    headerRight,
    headerLeft,
    headerCenter,
    headerTitle,
    headerBackTitle,
    headerBackTitleVisible = true,
    backButtonImage,
    headerHideBackButton,
    headerHideShadow,
    headerLargeTitleHideShadow,
    headerTintColor,
    headerTopInsetEnabled = true,
    headerLargeTitle,
    headerTranslucent,
    headerStyle = {},
    headerLargeStyle = {},
    headerTitleStyle = {},
    headerLargeTitleStyle = {},
    headerBackTitleStyle = {},
    headerShown,
    backButtonInCustomView
  } = props;
  return /*#__PURE__*/React.createElement(ScreenStackHeaderConfig, {
    hidden: headerShown === false,
    backButtonInCustomView: backButtonInCustomView,
    translucent: headerTranslucent === true,
    hideShadow: headerHideShadow,
    largeTitleHideShadow: headerLargeTitleHideShadow,
    hideBackButton: headerHideBackButton,
    title: headerTitle !== undefined ? headerTitle : title !== undefined ? title : route.name,
    titleFontFamily: headerTitleStyle.fontFamily,
    titleFontSize: headerTitleStyle.fontSize,
    titleColor: headerTitleStyle.color !== undefined ? headerTitleStyle.color : headerTintColor !== undefined ? headerTintColor : colors.text,
    topInsetEnabled: headerTopInsetEnabled,
    backTitle: headerBackTitleVisible ? headerBackTitle : ' ',
    backTitleFontFamily: headerBackTitleStyle.fontFamily,
    backTitleFontSize: headerBackTitleStyle.fontSize,
    color: headerTintColor !== undefined ? headerTintColor : colors.primary,
    largeTitle: headerLargeTitle,
    largeTitleFontFamily: headerLargeTitleStyle.fontFamily,
    largeTitleFontSize: headerLargeTitleStyle.fontSize,
    largeTitleColor: headerLargeTitleStyle.color,
    backgroundColor: headerStyle.backgroundColor !== undefined ? headerStyle.backgroundColor : colors.card,
    largeTitleBackgroundColor: headerLargeStyle.backgroundColor
  }, headerRight !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderRightView, null, headerRight({
    tintColor: headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : colors.primary
  })) : null, backButtonImage !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderBackButtonImage, {
    key: "backImage",
    source: backButtonImage
  }) : null, headerLeft !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderLeftView, null, headerLeft({
    tintColor: headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : colors.primary
  })) : null, headerCenter !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderCenterView, null, headerCenter({
    tintColor: headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : colors.primary
  })) : null);
}
//# sourceMappingURL=HeaderConfig.js.map