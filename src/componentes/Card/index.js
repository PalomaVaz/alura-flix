import './Card.css';
import deletar from'./delete.png'
import editar from './edit.png'

function Card({ video, verVideo, aoDeletar, aoEditar }) {
    return (
        <div className="container">
            <img 
                onClick={() => verVideo(video.id)} 
                src={video.imagem} 
                alt={video.titulo} 
                className={video.imagemItem} 
            />
            <div className="botoes">
                <div className="botao_card" onClick={() => aoDeletar(video.id)}>
                    <img src={deletar} alt='Deletar'/>
                    <p>DELETAR</p>
                </div>
                <div className="botao_card" onClick={() => aoEditar(video.id)}>
                    <img src={editar} alt='Editar'/>
                    <p>EDITAR</p>
                </div>
            </div>
           
        </div>
    )
}

export default Card;