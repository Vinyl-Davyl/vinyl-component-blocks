import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Link, { LinkProps } from ".";

const meta: Meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "#",
  },
};

export const CustomElement: Story = {
  args: {
    children: "I am span",
    href: "#",
    as: "span",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled link",
    href: "#",
    disabled: true,
  },
};
