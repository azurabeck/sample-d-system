import type { Meta, StoryObj } from "@storybook/react";
import { Comment } from "./index";

const meta = {
  title: "SNB/Comment",
  component: Comment,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/SI1tVwyzZFQuX5SDJwPnpg/%F0%9F%93%99-Conductor---Components?node-id=7873-197747&t=OK02lJnwQz7mxBKo-0',
    },
    version: {
      major: "0",
      minor: "1",
      patch: "5",
      style: {
        'font-size': '16px'
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {},

  args: {},
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoComments: Story = {
  args: {
    data: [],
  },
};

export const WithComments: Story = {
  args: {
    data: [
      {
        Id: 1,
        RequestId: "A",
        User: "People One",
        Text: "A comment example",
        CreatedAt: "2024-01-01T00:00:00Z",
      },
      {
        Id: 2,
        RequestId: "A",
        User: "People Two",
        Text: "A comment example",
        CreatedAt: "2024-01-01T00:00:00Z",
      },
      {
        Id: 3,
        RequestId: "A",
        User: "People Three",
        Text: "A comment example",
        CreatedAt: "2024-01-01T00:00:00Z",
      },
      {
        Id: 4,
        RequestId: "A",
        User: "People Four",
        Text: "A comment example",
        CreatedAt: "2024-01-01T00:00:00Z",
      },
      {
        Id: 5,
        RequestId: "A",
        User: "People Five",
        Text: "A comment example",
        CreatedAt: "2024-01-01T00:00:00Z",
      },
    ],
  },
};
