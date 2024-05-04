import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Skeleton, { SkeletonProps } from ".";

const meta: Meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    height: 50,
  },
};

export const BorderRadius: Story = {
  args: {
    width: 150,
    height: 150,
    borderRadius: "50%",
  },
};
