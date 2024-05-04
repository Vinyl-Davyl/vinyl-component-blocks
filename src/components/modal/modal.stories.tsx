import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";
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
    children: (
      <Modal
        children={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
    ),
  },
};
