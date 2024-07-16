import { useEffect, useState } from "react";
import Banner from "../../componentes/Banner";
import Categoria from "../../componentes/Categoria";

function Inicio() {
    const [selectedVideo, setSelectedVideo] = useState({
        url: "https://www.youtube.com/embed/y8FeZMv37WU",
        descricao: "Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'!",
        titulo: "SEO com React",
        categoria:"Mobile",
        imagem:"./player1.png"
    });

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/PalomaVaz/aluraflix-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    console.log(videos)

    function verVideo(id) {
      setSelectedVideo(videos.find(v => v.id === id))
    }

  return (
    <div>
      <Banner video={selectedVideo}/>
      <Categoria 
        videos={videos.filter(video => video.categoria === "Front-End")} 
        categoria={{nome:"Front-End", cor:"#6BD1FF"}}
        verVideo={verVideo}
      />
      <Categoria 
        videos={videos.filter(video => video.categoria === "Back-End")} 
        categoria={{nome:"Back-End", cor:"#00C86F"}}
        verVideo={verVideo}
      />
      <Categoria 
        videos={videos.filter(video => video.categoria === "Mobile")} 
        categoria={{nome:"Mobile", cor:"#FFBA05"}}
        verVideo={verVideo}
      />
    </div>
  )
}

export default Inicio;
