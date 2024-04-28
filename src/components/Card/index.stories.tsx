import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "./index";
import { Input, Text } from "@/components";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Normal.args = {children: <Button width={'132px'} height={'42px'} color={'white'} margin={'20px 0px'} backgroundColor={'blue'} buttonText={'Secondary'} />}
  args: {
    children: <div style={{ width: "300px", height: "300px" }}></div>,
  },
};

export const Primary: Story = {
  args: {
    children: (
      <div>
        <Text
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Username
        </Text>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />
      </div>
    ),
  },
};
