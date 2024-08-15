import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./index";

const meta = {
  title: "SNB/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {},
};
