import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalBemVindo from '../../components/modal/modal';

const customStyles = {
  content: {
    width: '557px',
    borderRadius: '16px',
    height: '477px',
    margin: 'auto',
    marginTop: '60px',
  },
};

Modal.setAppElement('#root');

const ModalOne = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Modal isOpen={modalIsOpen} contentLabel="" style={customStyles}>
      <ModalBemVindo setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
    </Modal>
  );
};

export default ModalOne;



