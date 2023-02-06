import React, { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

// Expo Imports
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";

// Packages
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

// Utils
import { DeviceTheme, getTheme } from "./src/util/Theme";
import colorScheme from "./src/hooks/colorScheme";
import store, { persistor } from "./src/redux/store";

import AppContent from "./AppContent";

const App = () => {
  const appState = useRef(AppState.currentState);
  const scheme = colorScheme();
  const currentTheme = getTheme(scheme || DeviceTheme.Light);
  const [activeTheme, setActiveTheme] = useState(currentTheme);
  const [canAutoChangeTheme, setCanAutoChangeTheme] = useState(true);

  /*
   ** Prevent auto-changing theme when app enters background, and re-allow when registered back into the foreground properly.
   **
   ** iOS has a blip whereby entering the background changes the system value of light/dark mode to be the opposite,
   ** related to allowing multiple Appearance screenshots in Multi-task Manager.
   **
   ** Still need to allow for auto theme changes when foregrounded, eg: Sunrise/Sunset system toggles between light/dark
   */
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        setCanAutoChangeTheme(true);
        const updatedTheme = getTheme(scheme);
        setActiveTheme(updatedTheme);
      }

      if (nextAppState === "background") {
        setCanAutoChangeTheme(false);
      }
      appState.current = nextAppState;
    });

    if (canAutoChangeTheme) {
      const updatedTheme = getTheme(scheme);
      setActiveTheme(updatedTheme);
    }

    return () => {
      subscription.remove();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheme]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ActionSheetProvider>
          <ThemeProvider theme={activeTheme}>
            <NavigationContainer>
              <SafeAreaProvider>
                <AppContent />
              </SafeAreaProvider>
            </NavigationContainer>
          </ThemeProvider>
        </ActionSheetProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
