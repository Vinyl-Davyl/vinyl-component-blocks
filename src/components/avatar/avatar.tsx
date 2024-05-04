import React from "react";
import { AvatarImage } from "./styled";

export type AvatarProps = {
  imageSrc?: string;
};

const Avatar: React.ForwardRefRenderFunction<HTMLImageElement, AvatarProps> = (
  props,
  ref
) => {
  const { imageSrc } = props;

  return (
    <div>
      <AvatarImage ref={ref} src={imageSrc} />
    </div>
  );
};

export default React.forwardRef<HTMLImageElement, AvatarProps>(Avatar);
