import {View} from 'react-native';
import {NativeModules} from 'react-native';
const {SkarbSDKManager} = NativeModules;

export default function App() {
  console.log(SkarbSDKManager);

  return <View />;
}
