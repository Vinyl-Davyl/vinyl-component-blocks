import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Spinner, { SpinnerProps } from ".";
import styled from "styled-components";

const meta: Meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
  },
};

const DarkBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #2c2c59;
`;

export const Light: React.FC = () => (
  <DarkBackground>
    <Spinner size={50} light />
  </DarkBackground>
);
