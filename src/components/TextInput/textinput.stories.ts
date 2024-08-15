import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./index";

const meta = {
  title: "Development/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {},
};
