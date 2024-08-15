import { Email } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ORGANISMS/Email",
  component: Email,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/f9XLWnyGeqdTonQeFCYmy3/%F0%9F%93%99-Conductor---Department-Wire-Transfer?node-id=568-137542&t=cC4M65PqP2MIf8lT-0",
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Email>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    senderName: "Taya Mullins <taya@abccompany.com>",
    subjectName: "Wire Transfer Request",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    attachments: [
      {
        name: "Doc1.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc2.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc3.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc4.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc5.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc6.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc7.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc8.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc9.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
      {
        name: "Doc10.doc",
        href: "https://minio.dev.k8s.safra.int/conductor-travel-temp/93ddc8c3-c6fa-4fbb-9224-4d077c940185/sample.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=FFeuG0gEVNwJAsn4%2F20240809%2Fk8s-dev%2Fs3%2Faws4_request&X-Amz-Date=20240809T155538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2228c603c8075744f3ee9b18e4db5200120f68a373f3725c16d50347b4f59966",
      },
    ],
  },
};
