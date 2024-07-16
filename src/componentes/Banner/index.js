import './banner.css';

function Banner({video}) {
    return (
      <div className='banner-container' style={{backgroundImage: `url("${video.imagem}")`}}>
        <div className='banner-overlay'>
            <div className='banner-detalhes'>
                <div className='banner-categoria'>{video.categoria}</div>
                <div className='banner-titulo'>{video.titulo}</div>
                <div className='banner-descricao'>{video.descricao}</div>
            </div>

            <div className='banner-video'>
            <iframe width="100%" height="72%" src={video.url}
                title={video.titulo} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
        </div>    
      </div>
    )
  }
  
  export default Banner;