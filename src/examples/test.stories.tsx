import type { Meta, StoryObj } from "@storybook/react";
import { test } from "./test";

const meta: Meta<typeof test> = {
  title: "Examples/test",
  component: test,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
