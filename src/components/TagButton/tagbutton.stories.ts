import type { Meta, StoryObj } from "@storybook/react";
import { TagButton } from "./index";

const meta = {
  title: "Development/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Round: Story = {
  args: {
    children: "Button",
    variant: "round",
  },
};
export const Square: Story = {
  args: {
    children: "Button",
    variant: "square",
  },
};
