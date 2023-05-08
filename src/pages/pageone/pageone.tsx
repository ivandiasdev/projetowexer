import './pageone.css'
import Logo from "./img/logo.png"
import Frame from "./img/Frame.png"
import Mask from "./img/Mask.png"
import Path from "./img/Path.png"
import Rectangle from "./img/Rectangle.png"


function PageOne() {
    return (
        <div className='PageOneContainer'>
            <div className='PageOneTop'>
                <div className='PagenOneLogo'>
                    <span>
                        <img src={Logo} />
                    </span>
                </div>
                <div className='PageOneText'>
                    <h1>Olá, Daniel Silva!</h1>
                    <p>Para iniciar o atendimento,</p>
                    <p>selecione ou cadastre um paciente</p>
                </div>
            </div>
            <div className='PageOneHed'>
                <div className='PageContainerMenu'>
                    <div className='PageMenuButton'>
                        <button><img src={Path}/> Novo Cadastro</button> 
                        <div className='PageContainerFiltraPequisar'>
                            <input type="text" name="nome" placeholder="Pesquisar"/>
                        </div>
                        <div className='PageContainerFiltraPequisarButton'>
                            <input type="submit" name="enviar" value="Filtrar" /> 
                        </div>
                    </div>
                    <p><img src={Mask} /> Filtro simples</p>
                    <div className='PageContainerFiltra'>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageOne