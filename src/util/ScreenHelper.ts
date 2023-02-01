import { Dimensions, StatusBar } from "react-native";
import { round } from "lodash";
import { tabletBreakpoint } from "./Sizes";

const parsedTabletBreakpoint = parseInt(tabletBreakpoint.replace("px", ""), 10);

export const isTablet = () => {
  const screen = Dimensions.get("screen");
  return screen.width > parsedTabletBreakpoint;
};

export const screenHeight = Dimensions ? Dimensions.get("screen").height : 0;
export const screenWidth = Dimensions ? Dimensions.get("screen").width : 0;
export const windowHeight = Dimensions ? Dimensions.get("window").height : 0;
export const windowWidth = Dimensions ? Dimensions.get("window").width : 0;
// eslint-disable-next-line no-unsafe-optional-chaining
export const navbarHeight = round(screenHeight - windowHeight + StatusBar?.currentHeight);
// eslint-disable-next-line no-unsafe-optional-chaining
export const bottomBarHeight = round(screenHeight - windowHeight - StatusBar?.currentHeight);
