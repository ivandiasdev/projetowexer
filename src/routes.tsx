import { Route, Routes} from 'react-router-dom'
import { OutroCadastro } from './pages/outrocadastro/outrocadastro'
import { Cadastro } from './pages/cadastro/cadastro'
import { Senha } from './pages/senha/senha'
import { Login } from './pages/login/login'
import  ModalOne  from './pages/modal/home'
import  PrimeiraPage from './components/header/header'
import MenuLateral from './components/menu/menu'
import Thema from './components/thema/thema'
import PageOne from './pages/pageone/pageone'
import DadosCadastrais from './components/dados/dados'

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<ModalOne />} />
            <Route path='/thema' element={<Thema />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/senha' element={<Senha />} />
            <Route path='/header' element={<PrimeiraPage />} />
            <Route path='/menu' element={<MenuLateral />} />
            <Route path='/pageone' element={<PageOne />} />
            <Route path='/dados' element={<DadosCadastrais />} />
        </Routes>
    )
}

export default Rotas