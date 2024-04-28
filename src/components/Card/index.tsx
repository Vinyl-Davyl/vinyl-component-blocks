import React from "react";
import styled from "styled-components";
import { ICardProps } from "../../utils/types";

interface props extends ICardProps {
  backgroundColor?: string;
  children?: any;
  padding?: string;
}

export const Card: React.FC<props> = ({ children, ...props }) => {
  return (
    // {...props.cardAttribute: spreads the properties defined in the cardAttributes prop onto the CardBody component. allowing the parent component to pass additional HTML attributes (as className, id, etc.) to the CardBody component.
    <CardBody style={props.cardStyle} {...props.cardAttributes} {...props}>
      {children}
    </CardBody>
  );
};

const CardBody = styled.div<props>`
  background-color: ${(props) => props.backgroundColor ?? "white"};
  padding: ${(props) => props?.padding ?? "20px 30px 10px 30px"};
  max-width: max-content;
  border-radius: 8px;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
