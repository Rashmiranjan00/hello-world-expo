import "expo-dev-client";

import { registerRootComponent } from "expo";

// Blob.prototype[Symbol.toStringTag] = "Blob";
// File.prototype[Symbol.toStringTag] = "File";

// eslint-disable-next-line import/first
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
