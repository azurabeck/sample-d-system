import type { Meta, StoryObj } from "@storybook/react";
import { Note } from "./index";

const meta = {
  title: "Development/Note",
  component: Note,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {},
};
