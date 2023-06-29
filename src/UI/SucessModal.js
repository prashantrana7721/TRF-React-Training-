import React from 'react';

const SuccessModal = ({ message, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Success</h2>
        <p>{message}</p>
        <button onClick={onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default SuccessModal;
