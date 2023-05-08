import './login.css'
import Logo from "./img/logo-login.png"
import { Link } from "react-router-dom"

export function Login() {
    return (
            <section className='containerLogin'>
                <img src={Logo}/>
                <form className='form'>
                    <label className='textName'>Login
                        <input type="text" placeholder='daniel.silva@wexer.com.br' name='name'/>
                    </label>
                    <label className='textName'>Senha
                        <input type="password" placeholder='**************' name='password'/>
                    </label>
                    <div className='btnEsqueci'>Esqueci a senha</div>
                    <Link className='btn' to='/thema'>Entrar</Link>
                    <Link className='btnCadastro' to='/cadastro'>Cadastre-se gratuitamente</Link>
                </form>
            </section>
    )
} 