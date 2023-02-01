import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { getTheme, DeviceTheme } from "../../util/Theme";
import WelcomeScreen from "../WelcomeScreen";

describe("WelcomeScreen", () => {
  describe("Snapshot", () => {
    it("Renders on light theme", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={getTheme(DeviceTheme.Light)}>
            <WelcomeScreen />
          </ThemeProvider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("Renders on dark theme", () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={getTheme(DeviceTheme.Dark)}>
            <WelcomeScreen />
          </ThemeProvider>
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
