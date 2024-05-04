import React from 'react';
import { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from '.';
import styled from 'styled-components';
import DownloadIcon from '../../icons/Download';

const meta: Meta = {
  title: "Components/Button",
  component: Button,
 tags: ["autodocs"],
};

export default meta;


type Story = StoryObj<typeof meta>;

export const Default: Story = {
args: {
    children: "Default Button"
},
}

export const DangerButton: Story = {
args: {
  children: "Danger Button",
  type: "danger",
},
}

export const Ghost: Story = {
args: {
  children: "Ghost Button",
  type: "ghost",
},
}

export const Secondary: Story = {
args: {
  children: "Secondary Button",
  type: "secondary",
},
}

export const Disabled: Story = {
args: {
  children: "Disabled Button",
  disabled: true
},
}

export const Loading: Story = {
args: {
  children: "Button",
  loading: true,
},
}

export const WithIcon: Story = {
args: {
  icon: DownloadIcon,
  children: "Download",
},
}

const ButtonRow = styled.div`
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
      <ButtonRow>
        <Button size='large'>Large</Button>
        <Button size='default'>Default</Button>
        <Button size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='danger' size='large'>Large</Button>
        <Button type='danger' size='default'>Default</Button>
        <Button type='danger' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='ghost' size='large'>Large</Button>
        <Button type='ghost' size='default'>Default</Button>
        <Button type='ghost' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button type='secondary' size='large'>Large</Button>
        <Button type='secondary' size='default'>Default</Button>
        <Button type='secondary' size='small'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button loading disabled size='large'>Large</Button>
        <Button loading disabled size='default'>Default</Button>
        <Button loading disabled size='small'>Small</Button>
      </ButtonRow>
    </>
  );
};