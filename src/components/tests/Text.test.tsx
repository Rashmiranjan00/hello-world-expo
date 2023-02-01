import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import { ThemedText } from "..";
import { DeviceTheme, getTheme } from "../../util/Theme";

describe("Text", () => {
  describe("Renders", () => {
    it("Snapshot", () => {
      const view = renderer
        .create(
          <ThemeProvider theme={getTheme(DeviceTheme.Light)}>
            <ThemedText>Text</ThemedText>
          </ThemeProvider>
        )
        .toJSON();

      expect(view).toMatchSnapshot();
    });
  });
});
