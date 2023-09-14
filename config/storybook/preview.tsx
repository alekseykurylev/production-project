import * as React from "react";
import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: Theme.LIGHT,
      list: [
        { name: Theme.LIGHT, class: Theme.LIGHT },
        { name: Theme.DARK, class: Theme.DARK },
      ],
      target: "html",
    },
    backgrounds: { disable: true },
  },
  decorators: [
    (Story) => (
      <RouteDecorator>
        <ThemeDecorator>
          <Story />
        </ThemeDecorator>
      </RouteDecorator>
    ),
  ],
};

export default preview;
