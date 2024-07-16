import Botao from '../Botao'
import './menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <Botao url="./">
                HOME
            </Botao>
            <Botao url="./novovideo">
                NOVO VÍDEO
            </Botao>
        </div>
    )
}

export default Menu