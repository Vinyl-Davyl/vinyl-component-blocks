import styled from "styled-components";

interface StyledAvatarProps {
  imageSrc?: string;
}

export const AvatarImage = styled.img<StyledAvatarProps>`
  margin: 0px 20px 0px 0px;
  height: 40px;
  border-radius: 50%;
`;
