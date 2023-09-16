import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
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
  args: {
    children: "Button",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
  args: {
    variant: "filled",
    size: "m",
  },
};

export const Variants = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
    <Button variant='filled'>Filled</Button>
    <Button variant='outline'>Outline</Button>
    <Button variant='clear'>Clear</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
    <Button variant='outline' size='s'>
      sm
    </Button>
    <Button variant='outline' size='m'>
      md
    </Button>
    <Button variant='outline' size='l'>
      lg
    </Button>
  </div>
);
