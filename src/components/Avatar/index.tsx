import styled from "styled-components";
import React, { FC } from "react";

/**
 * @typedef props
 *  The URL of the Avatar's image.
 * @prop {string} imageSrc
 */

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export const Avatar: FC<props> = (props) => {
  return (
    <div>
      <AvatarImage src={props.imageSrc} />
    </div>
  );
};

// export default Avatar;

const AvatarImage = styled.img`
  margin: 0px 20px 0px 0px;
  height: 40px;
  border-radius: 50%;
`;

export type props = {
  imageSrc: string;
};
