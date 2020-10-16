/*jshint esversion: 6 */

import React, {Component} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Switch,
} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';

import {AlanView} from './AlanSDK.js';

const {AlanManager, AlanEventEmitter} = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

const screenWidth = Dimensions.get('window').width;
const textWidth = screenWidth - 40;

const createAlert = (text) =>
  Alert.alert(
    text,
    text,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );

const subscription = alanEventEmitter.addListener('command', (data) => {
  console.log(`got command event ${JSON.stringify(data)}`);
  // {"command":"showAlert","text":"text"}
  createAlert(data.text);
});

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helloValue: '(test text | hello | test tools)',
      commandValue: 'test command',
      apiValue: 'test project api',
      visualValue: 'test visual state',
      sendCommandValue: 'test send command',
      authDataValue: 'test auth data',
      authData: false,
      isProd: false,
    };
  }

  componentWillUnmount() {
    subscription.remove();
  }

  renderAlanButton() {
    if (this.state.isProd && this.state.authData) {
      this.state.authData = false;
      return (
        <AlanView
          projectid={
            'cc2b0aa23e5f90d2974f1bf6b6929c1b2e956eca572e1d8b807a3e2338fdd0dc/prod'
          }
          host={'studio.alan.app'}
          authData={{text: this.state.authDataValue}}
        />
      );
    }
    else if (this.state.isProd) {
      return (
        <AlanView
          projectid={
            'cc2b0aa23e5f90d2974f1bf6b6929c1b2e956eca572e1d8b807a3e2338fdd0dc/prod'
          }
          host={'studio.alan.app'}
        />
      );
    }
    else if (this.state.authData) {
      this.state.authData = false;
      return (
        <AlanView
          projectid={
            'de87c36a4c36e67bc1565fc2c68bda912e956eca572e1d8b807a3e2338fdd0dc/prod'
          }
          host={'studio.alan-stage.app'}
          authData={{text: this.state.authDataValue}}
        />
      );
    }
    else {
      return (
        <AlanView
          projectid={
            'de87c36a4c36e67bc1565fc2c68bda912e956eca572e1d8b807a3e2338fdd0dc/prod'
          }
          host={'studio.alan-stage.app'}
        />
      );
    }
  }

  render() {
    console.log(`isProd - ${this.state.isProd}`);
    console.log(`authData - ${this.state.authData}`);
    console.log(`authDataValue - ${this.state.authDataValue}`);
    const alanButton = this.renderAlanButton();

    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior="padding"
        enabled
        keyboardVerticalOffset={0}>
        <ScrollView
          style={styles.containerScroll}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}>
          <View style={styles.dummyViewSmall} />
          <View style={styles.containerMain}>
            <View style={styles.containerRow}>
              <Text style={styles.labelStyle}>Stage  </Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={this.state.isProd ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={(val) => this.setState({isProd: val})}
                value={this.state.isProd}
              />
              <Text style={styles.labelStyle}>  Prod</Text>
            </View>
            <Button title="Activate" onPress={() => AlanManager.activate()} />
            <Button
              title="Deactivate"
              onPress={() => AlanManager.deactivate()}
            />
            {/* <Button title="Show" onPress={() => AlanManager.showButton()} /> */}
            {/* <Button title="Hide" onPress={() => AlanManager.hideButton()} /> */}
            <Button
              title="Play text"
              onPress={() => AlanManager.playText(this.state.helloValue)}
            />
            <TextInput
              style={styles.textStyle}
              defaultValue="(test text | hello | test tools)"
              placeholder="(test text | hello | test tools)"
              onChangeText={(text) => this.setState({helloValue: text})}
            />
            <Button
              title="Play command"
              onPress={() =>
                AlanManager.playCommand({
                  command: 'showAlert',
                  text: this.state.commandValue,
                })
              }
            />
            <TextInput
              style={styles.textStyle}
              defaultValue="test command"
              placeholder="test command"
              onChangeText={(text) => this.setState({commandValue: text})}
            />
            <Button
              title="Call project API"
              onPress={() =>
                AlanManager.callProjectApi(
                  'customScript',
                  {text: this.state.apiValue},
                  (error, result) => {
                    if (error) {
                      console.error(error);
                    } else {
                      console.log(result);
                    }
                  },
                )
              }
            />
            <TextInput
              style={styles.textStyle}
              defaultValue="test project api"
              placeholder="test project api"
              onChangeText={(text) => this.setState({apiValue: text})}
            />
            <Button
              title="Set visual state"
              onPress={() =>
                AlanManager.setVisualState({
                  visualState: this.state.visualValue,
                })
              }
            />
            <TextInput
              style={styles.textStyle}
              defaultValue="test visual state"
              placeholder="test visual state"
              onChangeText={(text) => this.setState({visualValue: text})}
            />
            <Button
              title="Check visual state"
              onPress={() =>
                AlanManager.callProjectApi(
                  'checkVisual',
                  {},
                  (error, result) => {
                    if (error) {
                      console.error(error);
                    } else {
                      console.log(result);
                    }
                  },
                )
              }
            />
            <Button
              title="Send command"
              onPress={() =>
                AlanManager.callProjectApi(
                  'sendCommand',
                  {text: this.state.sendCommandValue},
                  (error, result) => {
                    if (error) {
                      console.error(error);
                    } else {
                      console.log(result);
                    }
                  },
                )
              }
            />
            <TextInput
              style={styles.textStyle}
              defaultValue="test send command"
              placeholder="test send command"
              onChangeText={(text) => this.setState({sendCommandValue: text})}
            />
            <Button
              title="Send auth data"
              onPress={() => this.setState({authData: true})}
            />
            <TextInput
              style={styles.textStyle}
              defaultValue="test auth data"
              placeholder="test auth data"
              onChangeText={(text) => this.setState({authDataValue: text})}
            />
            <Button
              title="Check auth state"
              onPress={() =>
                AlanManager.callProjectApi(
                  'checkAuthData',
                  {},
                  (error, result) => {
                    if (error) {
                      console.error(error);
                    } else {
                      console.log(result);
                    }
                  },
                )
              }
            />
            <Button
              title="isActive"
              onPress={() =>
                AlanManager.isActive((error, result) => {
                  if (error) {
                    console.error(error);
                  } else {
                    console.log(result);
                    createAlert(`isActive ${result}`);
                  }
                })
              }
            />
            <View style={styles.dummyViewMedium} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.containerBottom}>{alanButton}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerScroll: {
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  keyboardView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  containerBottom: {
    height: 120,
    width: '100%',
    position: 'absolute',
    flex: 1,
    zIndex: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    bottom: 0
  },
  labelStyle: {
    fontSize: 22,
  },
  textStyle: {
    width: textWidth,
    alignItems: 'stretch',
    color: '#000000',
    fontSize: 18,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 14,
    paddingLeft: 14,
  },
  dummyViewSmall: {
    width: 1,
    height: 40,
    backgroundColor: '#00000000',
  },
  dummyViewMedium: {
    width: 1,
    height: 120,
    backgroundColor: '#00000000',
  },
});
