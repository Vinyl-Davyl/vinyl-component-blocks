import React from "react";
import { CardBody } from "./styled";

export type CardProps = {
  backgroundColor?: string;
  children?: any;
  padding?: string;
};

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  props,
  ref
) => {
  const { backgroundColor, children, padding } = props;
  return (
    <CardBody ref={ref} backgroundColor={backgroundColor} padding={padding}>
      {children}
    </CardBody>
  );
};

export default React.forwardRef<HTMLDivElement, CardProps>(Card);
