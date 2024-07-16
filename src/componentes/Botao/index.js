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