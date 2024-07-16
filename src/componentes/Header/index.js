import Menu from '../Menu'
import './header.css'

const Header = () => {
    return (
    <header className="cabecalho">
        <img src='/alura-flix.png' alt='Logo do Alura Flix'/>
        <Menu/>
    </header>)
}

export default Header