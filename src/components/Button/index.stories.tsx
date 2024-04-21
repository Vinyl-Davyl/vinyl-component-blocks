import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from ".";

// Define the metadata for the Button component
const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Define any argTypes if needed
  },
};

// Export the metadata as default
export default meta;

// Define the story for the Default button
const Template: StoryFn = (args: any) => <Button {...args} />;

// Export the Default button story
export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
};
