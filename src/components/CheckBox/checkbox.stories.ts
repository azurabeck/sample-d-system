import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from "./index";

const meta = {
  title: "SNB/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    version: {
      major: "1",
      minor: "2",
      patch: "3",
    },
  },

  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children: "Label",
  },
};
