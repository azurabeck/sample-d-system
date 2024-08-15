import type { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "./index";

const meta = {
  title: "ORGANISMS/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children: "arquivo que vai dentro do collapse",
    title: "US Correspondent Bank (Optional)",
    tooltip: "tooltip text",
  },
};
