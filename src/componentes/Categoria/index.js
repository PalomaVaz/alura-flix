import Card from '../Card'
import './Categoria.css'

function Categoria({ videos, categoria, verVideo, aoDeletar, aoEditar }) {
    return (
        (videos.length > 0) && <section className="categoria">
            <h3 style={{ backgroundColor: categoria.cor }}>
                {categoria.nome}
            </h3>
            <div className="videos">
                {videos.map((video, indice) => {
                    return <Card
                        className="videos"
                        video={video}
                        key={indice}
                        categoria={categoria}
                        verVideo={verVideo}
                        aoDeletar={aoDeletar}
                        aoEditar={aoEditar}
                    />
                })}
            </div>
        </section>
    )
}

export default Categoria