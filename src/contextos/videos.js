import { createContext, useContext, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    return (
        <VideosContext.Provider
            value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideoContext() {
    const { videos, setVideos } = useContext(VideosContext);

    function adicionarVideo(novoVideo) {
        const videoRepetido = videos.some(item => item.id === novoVideo.id);

        let novaLista = [...videos];

        if (!videoRepetido) {
            novaLista.push(novoVideo);
            return setVideos(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoVideo), 1);
        return setVideos(novaLista);
    }
    return {
        videos,
        adicionarVideo
    }
}