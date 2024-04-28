import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "./index";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

// const Primary: ComponentStory<typeof Checkbox> = () => <Checkbox />

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
