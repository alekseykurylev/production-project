import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    theme: [ThemeButton.CLEAR],
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: "button",
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: "button",
  },
};
