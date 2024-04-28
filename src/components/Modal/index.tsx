import React, { useState } from "react";
import "./index.css";
type props = {
  children: any;
};

export const Modal: React.FC<props> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(true);
  function toggleModal() {
    let tempModal = showModal;
    setShowModal(!tempModal);
  }
  return (
    <div className="modal-container">
      <div className={`modal ${showModal ? "show-modal" : ""}`}>
        <div className="modal-content">
          <span className="close-button" onClick={toggleModal}>
            x
          </span>
          {props.children}
        </div>
      </div>
    </div>
  );
};
