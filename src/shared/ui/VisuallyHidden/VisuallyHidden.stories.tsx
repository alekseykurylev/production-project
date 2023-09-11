import type { Meta, StoryObj } from "@storybook/react";
import { VisuallyHidden } from "./VisuallyHidden";

const meta = {
  title: "shared/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: { children: "VisuallyHidden" },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => <VisuallyHidden>VisuallyHidden</VisuallyHidden>,
};
