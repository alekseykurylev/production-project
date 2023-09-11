import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => <PageError />,
};
