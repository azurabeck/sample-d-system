import type { Meta, StoryObj } from "@storybook/react";
import { PDFView } from "./index";

const meta = {
  title: "SNB/PDFView",
  component: PDFView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof PDFView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    url: "https://pdfobject.com/pdf/sample.pdf",
  },
};
