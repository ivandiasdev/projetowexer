import './dados.css'
import Formulario from './form'
import Add from "./img/Button.png"
import Mask from "./img/Mask.png"
import Salve from "./img/save.png"

function DadosCadastrais() {
  
  return (
    <div>
        <h1>Novo paciente</h1>
        <div className='ContainerDados'>
            <div className='TituloDados'>
                <p>Dados Cadastrais</p>
                <p>Protuário</p>
                <button className='ButtonSalvar'><span><img src={Salve} /></span> Salvar</button>
                <button className='ButtonRetornar'><span><img src={Mask} /></span> Retornar á listagem</button>
            </div>
            <div className='DadosGerais'>
                <p className='TituloDados'>Dados gerais</p>
            </div>
            <div className='FormularioDados'>
                <Formulario />
            </div>
            <div className='DadosGerais'>
                <p className='TituloDados'>Documentos</p>
                <img src={Add} />
            </div>
            <div className='DadosGerais'>
                <p className='TituloDados'>Endereços</p>
                <img className='TituloAddd'src={Add} />
            </div>
            <div className='DadosGerais'>
                <p className='TituloDados'>Contatos</p>
                <img className='TituloAdd' src={Add} />
            </div>
            <div className='DadosGerais'>
                <p className='TituloDados'>Observações</p>
            </div>
            <div className='DadosObs'>
                <p>Observções</p>
                    <textarea id="cpf" placeholder='Digite' />
            </div>
            <div className='TituloRodape'>
                <button className='ButtonSalvar'><span><img src={Salve} /></span> Salvar</button>
                <button className='ButtonRetornar'><span><img src={Mask} /></span> Retornar á listagem</button>
            </div>

        </div>

    </div>
  )
}

export default DadosCadastrais
