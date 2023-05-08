import React, { useState } from 'react';
import './form.css'

function Formulario() {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [dataNacimento, setDataNacimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [profissao, setProfissao] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [salario, setSalario] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='InputsDadosOne'>
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          type="text"
          placeholder='Digite'
          value={cpf}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCpf(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTwu'>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="nome"
          placeholder='Digite'
          value={nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNome(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTry'>
        <label htmlFor="dataNacimento">Data de Nascimento</label>
        <input
          id="dataNacimento"
          type="date"
          placeholder='Digite'
          value={dataNacimento}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDataNacimento(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosOne'>
        <label htmlFor="nome">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder='Digite'
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTwu'>
        <label htmlFor="email">Sexo/Gênero</label>
        <input
          id="email"
          type="email"
          placeholder='Digite'
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTry'>
        <label htmlFor="telefone">Nacionalidade</label>
        <input
          id="telefone"
          type="tel"
          placeholder='Digite'
          value={telefone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTelefone(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosOne'>
        <label htmlFor="nome">Naturalidade</label>
        <input
          id="nome"
          type="text"
          placeholder='Digite'
          value={nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNome(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTwu'>
        <label htmlFor="email">Profissão</label>
        <input
          id="email"
          type="email"
          placeholder='Digite'
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTry'>
        <label htmlFor="telefone">Escolaridade</label>
        <input
          id="telefone"
          type="tel"
          placeholder='Digite'
          value={telefone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTelefone(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosOne'>
        <label htmlFor="nome">Estado Civil</label>
        <input
          id="nome"
          type="text"
          placeholder='Digite'
          value={nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNome(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTwu'>
        <label htmlFor="email">Mãe</label>
        <input
          id="email"
          type="email"
          placeholder='Digite'
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
      </div>
      <div className='InputsDadosTry'>
        <label htmlFor="telefone">Pai</label>
        <input
          id="telefone"
          type="tel"
          placeholder='Digite'
          value={telefone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTelefone(event.target.value)
          }
        />
      </div>
      
    </form>
    
  );
}

export default Formulario;
