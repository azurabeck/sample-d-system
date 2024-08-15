import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "SNB/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",

    // Figma
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SI1tVwyzZFQuX5SDJwPnpg/%F0%9F%93%99-Conductor---Components?node-id=11314-3317&t=5t6GskasR2hjmNIW-0",
    },

    version: {
      major: "0",
      minor: "1",
      patch: "5",
      style: {
        "font-size": "16px",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Preview: Story = {
  args: {
    value: "10",
  },
};
