import './cadastro.css'
import Logo from "./img/logo.png"
import Mask from "./img/Mask.png"
import { Link } from "react-router-dom"

export function Cadastro() {
    return(
        <section className='containerCadastro'>
            <div className='cont'>
                <img src={Logo}/>
                <p className='textSeja'>Seja bem-vindo(a)!</p>
                <p className='textCampos'>Preencha os campos para se cadastrar</p>
            </div>
            <div className='formCad'>
                <label className='textNameCad'>Nome
                    <input type="text" placeholder='Daniel Silva' name='name'/>
                </label>
                <label className='textNameCad'>E-mail
                    <input type="email" placeholder="daniel.wexer@wexer.com.br" name='email'/>
                </label>
            </div>
            <Link className='btnCad' to='/senha'>Prosseguir <img className='MaskCad' src={Mask} /></Link>
        </section>
    )
}