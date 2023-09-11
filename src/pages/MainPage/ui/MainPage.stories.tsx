import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {},
  render: () => (
    <div className='page-wrapper'>
      <MainPage />
    </div>
  ),
};
