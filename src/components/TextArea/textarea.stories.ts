import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./index";

const meta = {
  title: "Development/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    label: "Comment:",
  },
};
