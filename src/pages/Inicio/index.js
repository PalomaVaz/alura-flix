import { useEffect, useState } from "react";
import Banner from "../../componentes/Banner";
import Categoria from "../../componentes/Categoria";
import ModalEditar from "../../componentes/ModalEditar";

function Inicio() {
    const [selectedVideo, setSelectedVideo] = useState({
        url: "https://www.youtube.com/embed/y8FeZMv37WU",
        descricao: "Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma 'Pokedex'!",
        titulo: "SEO com React",
        categoria:"Mobile",
        imagem:"./player1.png"
    });

    const [videos, setVideos] = useState([]);
    const [videoEdicao, setVideoEdicao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    async function aoDeletar(id) { 
      setVideos(videos.filter(v => v.id !== id));
      try {
        await fetch(
          `http://localhost:3000/videos/${id}`,
          {
            method: "DELETE"
          }
        );
      } catch (error) {
        console.log(error)
      }
    }

    const aoSalvar = async (video) => {
      try {
        await fetch(
          `http://localhost:3000/videos/${video.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              titulo: video.titulo,
              descricao: video.descricao,
              imagem: video.imagem,
              url: video.url,
              categoria: video.categoria
            }),
          }
        );
      } catch (error) {
        console.log(error);
        alert(error.message)
      }
    };

    function verVideo(id) {
      setSelectedVideo(videos.find(v => v.id === id))
    }

    function editarVideo(video) {
      setVideoEdicao(video)
    }

    const categoria = {
      frontEnd: "Front-End",
      backEnd: "Back-End",
      mobile: "Mobile",
    }

    const cores = {
      "Front-End": "#6BD1FF",
      "Back-End": "#00C86F",
      "Mobile": "#FFBA05"
    }

  return (
    <div>
      <Banner video={selectedVideo} cores={cores}/>
      <Categoria 
        videos={videos?.filter(v => v.categoria === categoria.frontEnd)} 
        categoria={{nome: categoria.frontEnd, cor: cores[categoria.frontEnd]}}
        verVideo={verVideo}
        aoDeletar={aoDeletar}
        aoEditar={editarVideo}
      />
      <Categoria 
        videos={videos?.filter(v => v.categoria === categoria.backEnd)} 
        categoria={{nome: categoria.backEnd, cor: cores[categoria.backEnd]}}
        verVideo={verVideo}
        aoDeletar={aoDeletar}
        aoEditar={editarVideo}
      />
      <Categoria 
        videos={videos?.filter(v => v.categoria === categoria.mobile)} 
        categoria={{nome:categoria.mobile, cor: cores[categoria.mobile]}}
        verVideo={verVideo}
        aoDeletar={aoDeletar}
        aoEditar={editarVideo}
      />
      <ModalEditar
        video={videoEdicao}
        aoSalvar={aoSalvar}
        aoFecharModal={() => setVideoEdicao(null)}
        categorias={Object.keys(cores)} 
      />
    </div>
  )
}

export default Inicio;
