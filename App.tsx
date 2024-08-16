import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeModules} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {SkarbSDKManager} = NativeModules;

export default function App() {
  const init = async () => {
    const deviceId = await DeviceInfo.getInstanceId();

    SkarbSDKManager.initializeSDK('Danila', true, deviceId);
    console.log('initialized');
  };

  const sendSource = () => {
    console.log('send source');
    SkarbSDKManager.sendSource('facebook', {click: 'clicked govno'}, undefined);
  };

  const sendTest = () => {
    console.log('send test');
    SkarbSDKManager.sendTest('test', 'test');
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={sendSource}>
        <Text style={styles.buttonText}>Send Source</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sendTest}>
        <Text style={styles.buttonText}>Send Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#3774de',
    paddingHorizontal: 14,
    height: 50,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
  },
});
