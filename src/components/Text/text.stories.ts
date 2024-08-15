import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./index";

const meta = {
  title: "SNB/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children: "Text Componet",
  },
};
