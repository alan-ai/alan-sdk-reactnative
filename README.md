# Alan SDK React Native


[Alan Platform](https://alan.app/) • [Alan Studio](https://studio.alan.app/register) • [Docs](https://alan.app/docs) • [FAQ](https://alan.app/docs/additional/faq.html) •
[Blog](https://alan.app/blog/) • [Twitter](https://twitter.com/alanvoiceai)

Add a voice assistant to your application. With no or minimal changes to the existing UI.

## How to start:

1. Install `npm i @alan-ai/alan-sdk-react-native` using [npm](https://www.npmjs.com/package/alan-sdk-react-native).

2. Import Alan dependency  in your `App.js`

```javascript 
import AlanButton from './AlanButton.js';
import AlanText from './AlanText.js';
```

3. Add Alan view component

```xml
 <View style={styles.bottomView}>
          <AlanText style={styles.textView} />
          <AlanButton
            style={styles.buttonView}
            projectid={
              '<YOUR_PROJECT_ID_FROM_ALAN_STUDIO>'
            }
          />
 </View>
```

4. Add styles to views

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

That's it! Now you are ready to interact with Alan!

## Have questions?

If you have any questions or if something is missing in the documentation, please [contact us](mailto:support@alan.app), or tweet us [@alanvoiceai](https://twitter.com/alanvoiceai). We love hearing from you!)

