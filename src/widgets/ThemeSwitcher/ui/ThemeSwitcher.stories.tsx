import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => (
    <div style={{ backgroundColor: "var(--inverted-bg-color)", padding: "20px" }}>
      <ThemeSwitcher />
    </div>
  ),
};
