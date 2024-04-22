import React from "react";
import { Box, BoxProps } from "../Box";
import { cn } from "@/utils";

type StackProps = BoxProps;

export const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box className={cn("flex flex-col items-start", className)} {...props} />
  );
};
