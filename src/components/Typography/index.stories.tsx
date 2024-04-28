import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from ".";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "Full test functionality of the vinyl-component-block library to be deployed as a package on NPM store, this is the text component test",
  },
};
