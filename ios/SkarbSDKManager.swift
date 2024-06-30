import Foundation
import SkarbSDK
import React

@objc(SkarbSDKManager)
class SkarbSDKManager: NSObject {

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc
    func initializeSDK(clientId: String, isObservable: Bool, deviceId: String) {
        SkarbSDK.initialize(clientId: clientId, isObservable: isObservable, deviceId: deviceId)
    }

    @objc
    func sendSource(brokerName: String, features: [String: Any], brokerUserID: String?) {
        let broker: SKBroker
        switch brokerName.lowercased() {
        case "facebook":
            broker = .facebook
        case "searchads":
            broker = .searchads
        case "saaapi":
            broker = .saaapi
        case "appsflyer":
            broker = .appsflyer
        case "adjust":
            broker = .adjust
        case "branch":
            broker = .branch
        default:
            broker = .custom(brokerName)
        }
        SkarbSDK.sendSource(broker: broker, features: features, brokerUserID: brokerUserID)
    }

    @objc
    func sendTest(name: String, group: String) {
        SkarbSDK.sendTest(name: name, group: group)
    }
  
    @objc 
    func setLoggingEnabled(enabled: Bool){
      SkarbSDK.isLoggingEnabled = enabled
    }
}
