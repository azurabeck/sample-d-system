import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIcon } from "./index";

const meta = {
  title: "Development/LoadingIcon",
  component: LoadingIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoadingIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {},
};
