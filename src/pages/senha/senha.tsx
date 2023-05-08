import './senha.css'
import Logo from "./img/logo.png"
import Mask from "./img/Mask.png"
import { Link } from "react-router-dom"

export function Senha() {
    return(
        <div>
            <section className='containerSenha'>
            <div className='cont'>
                <img src={Logo}/>
                <p className='textSeja'>Seja bem-vindo(a)!</p>
                <p className='textCampos'>Escolha uma senha</p>
            </div>
            <form className='formSenha'>
                <label className='textNameSenha'>Senha
                    <input type="password" placeholder='******' name='password'/>
                </label>
                <label className='textNameSenha'>Confirmar senha
                    <input type="password" placeholder='******' name='password'/>
                </label>
            </form>
            <Link className='btnSenha' to='/'>Cadastrar <img className='MaskSenha' src={Mask} /></Link>
            <div className='regras'>
                <p><span>*</span>Precisa no mínimo 8 digitos</p>
                <p><span>*</span>Precisa conter um caractere especial */+.</p>
                <p><span>*</span>Precisa conter uma letra em MAIÚSCULA</p>
            </div>
        </section>
        </div>
       
    )
}