import type { Meta, StoryObj } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";

const meta = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => (
    <div style={{ backgroundColor: "var(--inverted-bg-color)", padding: "20px" }}>
      <LangSwitcher />
    </div>
  ),
};
