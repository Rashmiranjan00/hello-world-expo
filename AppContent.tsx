import React, { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";

// Expo imports
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import { lockAsync, OrientationLock } from "expo-screen-orientation";

// Packages
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled from "styled-components";

// Utils;
import ThemedView from "./src/components/Views/ThemedView";
import routes from "./src/shared/routes";

import AppNavigator from "./src/navigators/AppNavigator";

const AppContent: React.FC = () => {
  const [appSetupFinished, setAppSetupFinished] = useState(false);

  const appReady = appSetupFinished; // check for authsetup also if using authenitcation in the app.

  useEffect(() => {
    const lockScreenOrientationPortrait = async () => lockAsync(OrientationLock.PORTRAIT_UP);
    lockScreenOrientationPortrait();
  }, []);

  useEffect(() => {
    updateApp();
    setupApp();
  });

  const updateApp = async () => {
    const otaUpdateStatus = await Updates.checkForUpdateAsync().catch(() => {
      return new Error();
    });

    if (otaUpdateStatus instanceof Error || !otaUpdateStatus.isAvailable) {
      return;
    }

    const otaUpdate = await Updates.fetchUpdateAsync().catch(() => {
      return new Error();
    });

    if (otaUpdate instanceof Error) {
      return;
    }

    if (otaUpdate.isNew) {
      await Updates.reloadAsync().catch();
    }
  };

  const setupApp = async () => {
    /* eslint-disable global-require */
    await Font.loadAsync({
      "MaisonNeue-Bold": require("./assets/fonts/maisonneue-bold.otf"),
      "TTCommons-Medium": require("./assets/fonts/ttcommons-medium.otf"),
      "TTCommons-Regular": require("./assets/fonts/ttcommons-regular.otf")
    }).catch(() => {
      Alert.alert("An error occurred", "Sorry! Something went wrong whilst loading the app.");
    });

    setAppSetupFinished(true);
  };

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <StyledGestureHandlerRootView onLayout={onLayoutRootView}>
      <AppWrapper>
        <StatusBar />
        <AppNavigator initialRouteName={routes.welcome} />
      </AppWrapper>
    </StyledGestureHandlerRootView>
  );
};

export default AppContent;

const AppWrapper = styled(ThemedView)`
  flex: 1;
`;

const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
`;
