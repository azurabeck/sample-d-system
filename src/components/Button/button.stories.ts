import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./index";
import SafaIconWhite from "../../assets/svg/safra-icon-white.svg";
import SafaIconBlue from "../../assets/svg/safra-icon.svg";

const meta = {
  title: "SNB/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: SafaIconWhite,
    variant: "primary",
    children: "Primary Button",
  },
};

export const Text: Story = {
  args: {
    icon: SafaIconBlue,
    variant: "text",
    children: "Text Button",
  },
};

export const Outline: Story = {
  args: {
    icon: SafaIconBlue,
    variant: "outline",
    children: "Outline Button",
  },
};
