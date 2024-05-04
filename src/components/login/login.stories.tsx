import React from 'react';
import { Meta, StoryObj } from "@storybook/react";


import Login, { LoginProps } from '.';

const meta: Meta = {
  title: "Components/Login",
  component: Login,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
args: {
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
},
}