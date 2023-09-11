import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => (
    <>
      <div
        style={{
          height: "var(--navbar-height)",
          backgroundColor: "var(--inverted-bg-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        navbar
      </div>
      <Sidebar />
    </>
  ),
};
