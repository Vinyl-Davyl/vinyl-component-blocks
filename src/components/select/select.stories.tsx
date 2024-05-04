import React, { useState } from "react";
import { Meta } from "@storybook/react";

import Select, { SelectOption } from ".";
import styled from "styled-components";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const listOptions = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
];

export const Default = () => {
  const [option, setOption] = useState<SelectOption | undefined>(
    listOptions[1]
  );
  return (
    <Select
      width="250px"
      placeholder="Select option"
      option={option}
      listOptions={listOptions}
      onChange={(option) => {
        setOption(option);
      }}
    />
  );
};

export const WithError = () => {
  const [option, setOption] = useState<SelectOption | undefined>(
    listOptions[1]
  );
  return (
    <Select
      error
      width="250px"
      placeholder="Select option"
      option={option}
      listOptions={listOptions}
      onChange={(option) => {
        setOption(option);
      }}
    />
  );
};

export const Disabled = () => {
  const [option, setOption] = useState<SelectOption | undefined>(
    listOptions[1]
  );
  return (
    <Select
      disabled
      width="250px"
      placeholder="Select option"
      option={option}
      listOptions={listOptions}
      onChange={(option) => {
        setOption(option);
      }}
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
    <Row>
      <Select placeholder="large" size="large" listOptions={listOptions} />
      <Select placeholder="default" size="default" listOptions={listOptions} />
      <Select placeholder="small" size="small" listOptions={listOptions} />
    </Row>
  );
};
