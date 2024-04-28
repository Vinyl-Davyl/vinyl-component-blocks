import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./index";

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabHeader: ["First Tab", "Second Tab"],
    tabContent: [<p>First Tab</p>, <p>Second Tab</p>],
  },
};
