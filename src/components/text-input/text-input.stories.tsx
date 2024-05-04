import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import TextInput, { TextInputProps } from ".";
import styled from "styled-components";
import UserIcon from "../../icons/User";

const meta: Meta = {
  title: "Components/TextInput",
  component: TextInput,
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
    width: "250px",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
    width: "250px",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Login",
    icon: UserIcon,
    width: "250px",
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Wrong input",
    width: "250px",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    width: "250px",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Not editable",
    width: "250px",
    readonly: true,
  },
};

export const Clearable = () => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      placeholder="Type and clear"
      width="250px"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      clearable
    />
  );
};

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <Row>
        <TextInput placeholder="large" size="large" />
        <TextInput placeholder="default" size="default" />
        <TextInput placeholder="small" size="small" />
      </Row>
    </>
  );
};
