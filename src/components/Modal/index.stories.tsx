import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";
import React from "react";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Modal children={<p>Hello</p>} />,
  },
};
