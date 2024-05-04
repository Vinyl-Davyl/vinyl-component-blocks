import React, { useState } from "react";
// import { StyledModal, ModalContent, CloseButton, ShowModal } from "./styled";
import "./index.css";

export type ModalProps = {
  children: any;
};

const Modal: React.ForwardRefRenderFunction<HTMLDivElement, ModalProps> = (
  props,
  ref
) => {
  const { children } = props;
  const [showModal, setShowModal] = useState<boolean>(true);
  function toggleModal() {
    let tempModal = showModal;
    setShowModal(!tempModal);
  }

  return (
    <div ref={ref} className="modal-container">
      <div className={`modal ${showModal ? "show-modal" : ""}`}>
        <div className="modal-content">
          <span className="close-button" onClick={toggleModal}>
            <strong>x</strong>
          </span>
          {children}
        </div>
      </div>
    </div>
    // <>
    //   <StyledModal
    //     ref={ref}
    //     className={`StyledModal ${showModal ? ShowModal : null}`}
    //   >
    //     <ModalContent>
    //       <CloseButton onClick={toggleModal}>
    //         <strong>x</strong>
    //       </CloseButton>
    //       {children}
    //     </ModalContent>
    //   </StyledModal>
    // </>
  );
};

export default React.forwardRef<HTMLDivElement, ModalProps>(Modal);
