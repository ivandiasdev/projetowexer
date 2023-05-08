import React from 'react'
import './modal.css'
import Logo from "./img/imglogo.png"
import { Link } from "react-router-dom"

type ModalBemVindoProps = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  modalIsOpen: boolean
}

const ModalBemVindo: React.FC<ModalBemVindoProps> = ({ setModalIsOpen, modalIsOpen }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className='modalBem'>
      <img className='logoModalBem' src={Logo} alt="Logo"/>
      <a className='title'>Bem vindo(a) ao Wexer Psi!</a>
      <a className='textModalBem'>Vamos começar atualizando seus dados</a>
      <Link className='btnModalBem' to='/thema' onClick={closeModal}>Vamos lá</Link>
    </div>
  )
}

export default ModalBemVindo;