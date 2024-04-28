import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Spinner } from "./index";

const meta: Meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spinnerStyle: {
      width: "50px",
      height: "50px",
    },
  },
};
