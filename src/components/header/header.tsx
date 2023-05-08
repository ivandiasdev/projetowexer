import './header.css'
import { useState} from 'react'
import Logo from "./img/logo.png"
import Menu from "./img/menu.png"
import Seta from "./img/Mask.png"
import MaskMenu from "./img/MaskMenu.png"

import People from "../menu/img/people.png"
import Todo from "../menu/img/todo.png"
import Add from "../menu/img/add.png"
import Config from "../menu/img/settings.png"

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <div>
        <div className='containerMenu'>
          <div className='containerLogo'>
            <img src={Logo} />
          </div>
          <div className='textMenu'>
                <img className='menu' src={Menu} onClick={() => {
                  const list = document.querySelector('.list');
                  if (list) {
                    list.classList.toggle('active')
                  }
          }}/>
                <p>Bem vindo(a), <span>Daniel</span><span><img src={Seta} /></span></p>
          </div>
        </div>        
      <div className='list'>
        <div className='listItemsMenu'>
            <p><img className='ListAdd' src={People}/>Meus pacientes</p>
            <a className='hasSubMenu' onClick={() =>{
                        const list = document.querySelector('.subMenu');
                        if (list) {
                          list.classList.toggle('active')
                        }}}>
            <img className='ListAdd' src={Todo} />Modelos <span><img src={MaskMenu} /></span></a>
            <div className='subMenu'>
              <span className='MenuText'>Entrevistas</span>
              <span className='MenuText'>Roteiro de Teste</span>
              <span className='MenuText'>Documentos</span>
            </div>


            {/*<a className='hasSubMenu' onClick={() => setShowSubMenu(true)}><img className='ListAdd' src={Todo} />Modelos <span><img src={MaskMenu} /></span></a>
          {showSubMenu && (
            <div className='subMenu'>
              <span className='MenuText'>Entrevistas</span>
              <span className='MenuText'>Roteiro de Teste</span>
              <span className='MenuText'>Documentos</span>
            </div>
          )}*/}
            <a className='hasSubMenu' onClick={() =>{
                        const list = document.querySelector('.subMenuMax');
                        if (list) {
                          list.classList.toggle('active')
                        }}}><img className='ListAdd' src={Add}/>Cadastros<span><img src={MaskMenu} /></span></a>
          <div className='subMenuMax'>
                <span className='MenuText'>Perguntas</span>
                <span className='MenuText'>Testes</span>
                <span className='MenuText'>Tipo de avaliações</span>
          </div>
            <a><img className='ListAdd' src={Config}/>Preferências</a>
        </div>
      </div>
    </div>

  )
}

export default Header