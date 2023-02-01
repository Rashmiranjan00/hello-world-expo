import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import ThemedView from "../ThemedView";
import { getTheme, DeviceTheme } from "../../../util/Theme";

describe("ThemedView", () => {
  describe("Renders", () => {
    it("Snapshot", () => {
      const view = renderer
        .create(
          <ThemeProvider theme={getTheme(DeviceTheme.Light)}>
            <ThemedView>
              <View />
            </ThemedView>
          </ThemeProvider>
        )
        .toJSON();

      expect(view).toMatchSnapshot();
    });
  });
});
