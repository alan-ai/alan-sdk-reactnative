# Alan SDK React Native component

### How to install

#### 1. Run `npm i @alan-ai/alan-sdk-react-native`

#### 2. in your `App.js` import Alan dependencies

```javascript 
import AlanButton from './AlanButton.js';
import AlanText from './AlanText.js';
```

#### 3. Add Alan view component

```xml
 <View style={styles.bottomView}>
          <AlanText style={styles.textView} />
          <AlanButton
            style={styles.buttonView}
            projectid={
              '<YOUR_PROJECT_ID_FROMALAN_STUDIO>'
            }
          />
 </View>
```

#### 4. Add styles to views

```javascript
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7ad6f5',
  },
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
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
```
##### 5. You are now ready to interact with Alan!
See more on Alan [homepage](https://alan.app/)


### Other platforms:
* [Native Android](https://github.com/alan-ai/alan-sdk-android)
* [Native iOS](https://github.com/alan-ai/alan-sdk-ios)
* [Web](https://github.com/alan-ai/alan-sdk-web)
* [Cordova](https://github.com/alan-ai/alan-sdk-cordova)
* [Flutter](https://pub.dev/packages/alan_voice)

