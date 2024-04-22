import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

// Define the metadata for the Button component
const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  //   argTypes: {
  //     // Define any argTypes if needed
  //   },
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

// Define the story for the Default button
// const Template: StoryFn = (args: any) => <Button {...args} />;

type Story = StoryObj<typeof meta>;

// Export the Default button story
export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};
