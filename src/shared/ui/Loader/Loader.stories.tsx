import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => (
    <div className='page-wrapper'>
      <Loader />
    </div>
  ),
};
