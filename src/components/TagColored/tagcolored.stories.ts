import type { Meta, StoryObj } from "@storybook/react";
import { TagColored } from "./index";

const meta = {
  title: "Development/TagColored",
  component: TagColored,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TagColored>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Tag Primary",
    type: "primary",
  },
};
export const secondary: Story = {
  args: {
    children: "Tag secondary",
    type: "secondary",
  },
};
export const tertiary: Story = {
  args: {
    children: "Tag tertiary",
    type: "tertiary",
  },
};
