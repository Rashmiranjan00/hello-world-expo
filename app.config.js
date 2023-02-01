import "dotenv/config";

export default {
  expo: {
    name: process.env.APP_NAME || "HelloWorld",
    owner: "rashmiranjan.indianic",
    slug: process.env.APP_SLUG || "helloworld",
    version: process.env.VERSION || "1.0.0",
    userInterfaceStyle: "automatic",
    icon: "./assets/icon.png",
    scheme: "helloworld",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 30
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      bundleIdentifier: process.env.IOS_BUNDLE_IDENTIFIER,
      // associatedDomains: [
      //   `applinks:${process.env.FIREBASE_DYNAMIC_LINK_PREFIX}`
      // ],
      supportsTablet: true,
      buildNumber: process.env.IOS_BUILD_NUMBER || "1",
      usesAppleSignIn: false,
      requireFullScreen: true,
      // googleServicesFile: "./GoogleService-Info.plist",
      infoPlist: {
        UIBackgroundModes: ["remote-notification"]
        // FirebaseDynamicLinksCustomDomains: [`https://${process.env.FIREBASE_DYNAMIC_LINK_PREFIX}`],
        // NSPhotoLibraryUsageDescription:
        //   "Access to your photo library is required to attach photos and videos to your post or to change profile images.",
        // NSCameraUsageDescription:
        //   "Access to your camera is required to attach photos and videos to your post or to change profile images.",
        // NSMicrophoneUsageDescription:
        //   "Access to your microphone is required to include recording audio in videos for posts."
      }
    },
    android: {
      package: process.env.ANDROID_PACKAGE,
      softwareKeyboardLayoutMode: "pan",
      // googleServicesFile: "./google-services.json",
      useNextNotificationsApi: true,
      versionCode: process.env.ANDROID_VERSION_CODE || 1,
      icon: "./assets/icon.png",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundImage: "./assets/adaptive-icon.png"
      },
      permissions: [
        "com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE",
        "com.android.vending.CHECK_LICENSE",
        "com.google.android.gms.permission.AD_ID"
      ]
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
};
