import React, { ReactNode } from "react";
import { H1, H2, H3 } from "./styled";

export type TypographyProps = {
  variant?: "h1" | "h2" | "h3";
  align?: "center" | "right" | "left";
  className?: string;
  children: ReactNode;
};

const Typography: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  TypographyProps
> = (props, ref) => {
  const { variant = "h1", align = "left", className, children } = props;

  const HeadingComponent = (() => {
    switch (variant) {
      case "h1":
        return H1;
      case "h2":
        return H2;
      case "h3":
        return H3;
      default:
        return H1;
    }
  })();

  return (
    <HeadingComponent ref={ref} align={align} className={className}>
      {children}
    </HeadingComponent>
  );
};

export default React.forwardRef<HTMLDivElement, TypographyProps>(Typography);
