import styled from "styled-components";

const modalBackgroundColor = "rgba(0, 0, 0, 0.5)";

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${modalBackgroundColor};
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition:
    visibility 0s linear 0.25s,
    opacity 0.25s 0s,
    transform 0.25s;
  z-index: 200;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
`;

export const CloseButton = styled.button`
  float: right;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;

  &:hover {
    background-color: darkgray;
  }
`;

export const ShowModal = styled(StyledModal)`
  opacity: 1;
  display: block;
  visibility: visible;
  transform: scale(1);
  transition:
    visibility 0s linear 0s,
    opacity 0.25s 0s,
    transform 0.25s;
`;
