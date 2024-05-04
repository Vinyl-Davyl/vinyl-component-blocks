import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import Typography, { TypographyProps } from ".";

const meta: Meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

export const Sizes = () => {
  return (
    <>
      <Typography variant="h1" align="center" className="Typography">
        Ensure a cohesive user experience across your application with a
        centralized library of reusable UI components. Say goodbye to design
        inconsistencies. Stop reinventing the wheel! Our well-documented
        component library empowers you to concentrate on building unique
        features and functionalities.
      </Typography>

      <Typography variant="h2" align="left" className="Typography">
        Ensure a cohesive user experience across your application with a
        centralized library of reusable UI components. Say goodbye to design
        inconsistencies. Stop reinventing the wheel! Our well-documented
        component library empowers you to concentrate on building unique
        features and functionalities.
      </Typography>

      <Typography variant="h3" align="left" className="Typography">
        Ensure a cohesive user experience across your application with a
        centralized library of reusable UI components. Say goodbye to design
        inconsistencies. Stop reinventing the wheel! Our well-documented
        component library empowers you to concentrate on building unique
        features and functionalities.
      </Typography>
    </>
  );
};
