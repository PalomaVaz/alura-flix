import { Link } from 'react-router-dom';
import './botao.css'

const Botao = ({url, children}) => {
    return (
        <Link to={url} className="botao">
            {children}
        </Link>
    )
}

export default Botao

export const BotaoFormulario = ({type, children, onClick}) => {
    const classeBotao = type === 'submit' ? "botao" : "botao2";
    return (
        <button className={classeBotao} type={type} onClick={onClick}>{children}</button> 
    )
}