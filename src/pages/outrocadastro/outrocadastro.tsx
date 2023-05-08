import './outcadastro.css'
import Logo from "./img/logo.png"


export function OutroCadastro(){
    return(
        <div className='body'>
            <section className='container'>
                <div className='topo'>
                    <img src={Logo}/>
                    <p>Seja bem-vindo(a)!</p>
                </div>
                <div className='complete'>
                    <span>Complete os seus dados</span>
                    <hr className='hr'/>
                    <form className='form'>
                        <label className='textName'>Nome
                            <input className='input' type="name" placeholder='Daniel' name='name'/>
                        </label>
                        <label className='textName'>E-mail
                            <input className='input' type="email" placeholder='daniel@gmail.com' name='email'/>
                        </label>
                    </form>
                    <form className='form'>
                        <label className='textName'>CPF
                            <input className='input' type="cpf" placeholder='132.655.595-66' name='cpf'/>
                        </label>
                        <label className='textName'>Telefone
                            <input className='input' type="telefone" placeholder='(31)' name='telefone'/>
                        </label>
                    </form>
                    <form className='form'>
                        <label className='textName'>Documento Profissional (CRP)
                            <input className='input' type="cpf" placeholder='132.655.595-66' name='cpf'/>
                        </label>
                        <label className='textName'>Sexo/Gênero
                            <select className='input' name='sexo'>
                                <option value='masculino'>Masculino</option>
                                <option value='feminino' selected>Feminino</option>
                            </select>
                        </label>
                    </form>                        
                        <span>Preencha os dados da clinica</span>
                        <hr className='hr' />
                    <form className='form'>
                        <label className='textName'>Nome da clinica
                            <input className='input' type="name" placeholder='Talita Rodrigues' name='name'/>
                        </label>
                        <label className='textName'>CEP
                            <input className='input' type="number" placeholder='11370-000' name='number'/>
                        </label>
                    </form> 
                    <form className='form'>
                        <label className='textName'>Rua
                            <input className='input' type="rua" placeholder='Flores' name='name'/>
                        </label>
                        <label className='textNumero'>Número
                            <input className='inputNumero' type="number" placeholder='25' name='number'/>
                        </label>
                        <label className='textBairro'>Bairro
                            <input className='inputBairro' type="name" placeholder='Alterosa' name='name'/>
                        </label>
                    </form> 
                    <form className='form'>
                        <label className='textName'>Cidade
                            <input className='input' type="name" placeholder='Betim' name='name'/>
                        </label>
                        <label className='textName'>Estado
                            <input className='input' type="name" placeholder='Minas Gerais' name='name'/>
                        </label>
                    </form>                        
                        <span>Crie uma senha segura</span>
                        <hr />
                    <form className='form'>
                        <label className='textName'>Senha
                            <input className='input' type="password" placeholder='*******' name='password'/>
                        </label>
                        <label className='textName'>Confirmar senha
                            <input className='input' type="password" placeholder='*******' name='password'/>
                        </label>
                    </form>
                </div>
            </section>
        </div>
    )
}