import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./index";

const meta = {
  title: "SNB/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children: "label",
    disabled: false,
  },
};
