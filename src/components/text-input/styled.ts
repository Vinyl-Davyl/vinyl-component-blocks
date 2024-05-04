import styled from "styled-components";
import { ComponentSize, heights, sidePaddings } from "../../config/sizes";
import CrossIcon from '../../icons/Cross';

interface StyledWrapperProps {
    width: string;
    innerSize: ComponentSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    position: relative;
    width: ${pr => pr.width};
    height: ${ pr => heights[pr.innerSize]}px;
`;

interface StyledTextInputProps {
    innerSize: ComponentSize;
    disabled: boolean;
    error: boolean;
    width: string;
    withIcon: boolean;
    withCross: boolean;
}


/* Real tag is assigned dynamically */
export const StyledTextInput = styled.input<StyledTextInputProps>`
    box-sizing: border-box;
    position: relative;
    background-color: ${ (pr) => pr.error ? '#ffe3e6' : '#EEEEEE' };
    padding: 0;
    padding-left: ${ pr => sidePaddings[pr.innerSize] + (pr.withIcon ? sidePaddings[pr.innerSize] + 10/* icon */ : 0) }px;
    padding-right: ${ pr => sidePaddings[pr.innerSize] + (pr.withCross ? sidePaddings[pr.innerSize]/* cross */ : 0) }px;
    height: ${ pr => heights[pr.innerSize]}px;
    width: ${pr => pr.width};
    border: none;
    color: #000;
    ${ pr => pr.disabled ? `
    background-color: #a6a6a6;
    color: #5e5e5e;
    cursor: not-allowed;
    
    &:hover {
        background-color: #a6a6a6 !important;
        color: #5e5e5e !important;
    }
    ` : ''}
    border-radius: 0;
    outline: none;
    transition: 0.1s ease-out;
    
    box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : 'transparent'};
    &:focus {
        box-shadow: inset 0 0 0 2px ${pr => pr.error ? '#d93848' : '#000'};
    }
`;

interface StyledIconProps {
    innerSize: ComponentSize;
}

export const StyledIcon = styled.div.withConfig({
    shouldForwardProp: (prop, defPropValFN) =>
      !["innerSize"].includes(prop) && defPropValFN(prop),
  })<StyledIconProps>`
    box-sizing: border-box;
    position: absolute;
    left: ${ pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);

    height: 15px;
    width: 15px;
`;

interface StyledCrossProps {
    innerSize: ComponentSize;
}

export const StyledCross = styled(CrossIcon)<StyledCrossProps>`
    box-sizing: border-box;
    position: absolute;
    right: ${ pr => sidePaddings[pr.innerSize]}px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    height: 15px;
`;