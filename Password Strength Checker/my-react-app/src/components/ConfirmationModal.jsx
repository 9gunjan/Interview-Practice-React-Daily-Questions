import React, { useState } from "react";

const ConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [actionStatus, setActionStatus] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setActionStatus("Confirmed");
    closeModal();
  };

  const handleCancel = () => {
    setActionStatus("Cancelled");
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Confirmation Modal</button>

      {isOpen && (
        <div>
          <h1>Confirm Action</h1>
          <p>Are u sure you want to continue?</p>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      {actionStatus && <p>{actionStatus}</p>}
    </div>
  );
};

export default ConfirmationModal;
