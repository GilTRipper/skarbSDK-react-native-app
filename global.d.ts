type Features = {[key: string]: any};

export type Broker =
  | 'facebook'
  | 'searchads'
  | 'saaapi'
  | 'appsflyer'
  | 'adjust'
  | 'branch';

interface SkarbSDKManagerType {
  initializeSDK(
    clientId: string,
    isObservable: boolean,
    deviceId: string,
  ): void;
  sendSource(
    brokerName: Broker,
    features: Features,
    brokerUserID?: string,
  ): void;
  sendTest(name: string, group: string): void;
}

declare module 'react-native' {
  interface NativeModulesStatic {
    SkarbSDKManager: SkarbSDKManagerType;
  }
}
