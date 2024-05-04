import styled from "styled-components";

interface CardProps {
  backgroundColor?: string;
  children?: any;
  padding?: string;
}

export const CardBody = styled.div<CardProps>`
  background-color: ${(props) => props.backgroundColor ?? "white"};
  padding: ${(props) => props?.padding ?? "20px 30px 10px 30px"};
  max-width: max-content;
  border-radius: 8px;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
