import { useState } from 'react'
import './menu.css'
import People from "./img/people.png"
import Todo from "./img/todo.png"
import Add from "./img/add.png"
import Config from "./img/settings.png"

const MenuLateral = () => {

  return (
    <div className='AppMenu'>
      <div className="containerMenuLateral">
        <img src={People}/>
        <img src={Todo}/>
        <img src={Add}/>
        <img src={Config}/>
      </div>
         {/*<div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
            <div className='hamburguer hamburguerIcon'></div>
         </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className='list'>
          <ul className='listItems'>
            <li><span><img src={People}/></span> Meus pacientes</li>
            <li><span><img src={Todo}/></span>Modelos</li>
            <li><span><img src={Add}/></span> Cadastros</li>
            <li><span><img src={Config}/></span> Preferências</li>
          </ul>
        </div>
  </div>*/}
    </div>

  )
}

export default MenuLateral