import React, { useState } from "react";
import { Meta } from "@storybook/react";

import Search from ".";

const meta: Meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Search
      placeholder="Search the site"
      width="400px"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
};
