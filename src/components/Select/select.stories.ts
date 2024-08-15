import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./index";

const meta = {
  title: "Development/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    options: [
      {
        id: 1,
        value: "Aventura",
        label: "Aventura",
      },
      {
        id: 2,
        value: "Brickell",
        label: "Brickell",
      },
      {
        id: 3,
        value: "California",
        label: "California",
      },
      {
        id: 4,
        value: "Massachusetts",
        label: "Massachusetts",
      },
      {
        id: 5,
        value: "New York",
        label: "New York",
      },
      {
        id: 6,
        value: "Palm Beach",
        label: "Palm Beach",
      },
      {
        id: 7,
        value: "Remote",
        label: "Remote",
      },
      {
        id: 8,
        value: "Other",
        label: "Other",
      },
    ],
  },
};
