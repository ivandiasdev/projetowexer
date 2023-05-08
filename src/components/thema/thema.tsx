import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalOne from '../../pages/modal/home';
import Header from '../header/header';
import MenuLateral from '../menu/menu';
import PageOne from '../../pages/pageone/pageone';
import './thema.css';


const Thema = () => {

  return (
    <div className="containerHome">
      <Header />
      <PageOne />
      <MenuLateral />
      <ModalOne />
    </div>
  );
};

export default Thema;