import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import Typography, { TypographyProps } from ".";

const meta: Meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

// Export the metadata as default
export default meta;

export const Sizes = () => {
  return (
    <>
      <Typography variant="h1" align="center" className="Typography">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi
        libero iure enim ipsa nihil harum qui, ad saepe molestias amet, nesciunt
        ipsum reiciendis, quibusdam labore ratione alias perferendis!
        Perspiciatis!
      </Typography>

      <Typography variant="h2" align="left" className="Typography">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi
        libero iure enim ipsa nihil harum qui, ad saepe molestias amet, nesciunt
        ipsum reiciendis, quibusdam labore ratione alias perferendis!
        Perspiciatis!
      </Typography>

      <Typography variant="h3" align="left" className="Typography">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi
        libero iure enim ipsa nihil harum qui, ad saepe molestias amet, nesciunt
        ipsum reiciendis, quibusdam labore ratione alias perferendis!
        Perspiciatis!
      </Typography>
    </>
  );
};
