import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./index";

const meta = {
  title: "SNB/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    id: "switch button",
    checked: false,
  },
};

export const Active: Story = {
  args: {
    id: "switch button",
    checked: true,
  },
};
