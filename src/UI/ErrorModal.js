import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import Backdrop from './Backdrop';

const ErrorModal = ({ message, onConfirm }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <Modal>
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onConfirm}>OK</button>
      </Modal>
    </>,
    document.getElementById('modal-root')
  );
};

export default ErrorModal;
