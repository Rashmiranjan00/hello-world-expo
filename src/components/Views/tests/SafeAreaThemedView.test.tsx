import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import { SafeAreaThemedView } from "../..";
import { getTheme, DeviceTheme } from "../../../util/Theme";

describe("SafeAreaThemedView", () => {
  describe("Renders", () => {
    it("Snapshot", () => {
      const view = renderer
        .create(
          <ThemeProvider theme={getTheme(DeviceTheme.Light)}>
            <SafeAreaThemedView>
              <View />
            </SafeAreaThemedView>
          </ThemeProvider>
        )
        .toJSON();

      expect(view).toMatchSnapshot();
    });
  });
});
