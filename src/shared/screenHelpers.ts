import { Dimensions, Platform } from "react-native";
import * as Linking from "expo-linking";
import { tabletBreakpoint } from "../util/Sizes";

export const checkDeviceIsTablet = (): boolean => {
  const screen = Dimensions.get("screen");
  const isTablet = screen.width > parseInt(tabletBreakpoint.replace("px", ""), 10);
  return isTablet;
};

/* istanbul ignore next */
export const openAppSettings = () => {
  if (Platform.OS === "ios") {
    Linking.openURL("app-settings://");
  }

  if (Platform.OS === "android") {
    Linking.openSettings();
  }
};
