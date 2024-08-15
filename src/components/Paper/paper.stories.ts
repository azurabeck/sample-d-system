import type { Meta, StoryObj } from "@storybook/react";
import { Paper } from "./index";

const meta = {
  title: "SNB/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SI1tVwyzZFQuX5SDJwPnpg/%F0%9F%93%99-Conductor---Components?node-id=11208-2606&t=6YuFvsjzgI8Ww36U-0",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    title: "Step Name",
    children: "Approver Name",
  },
};
