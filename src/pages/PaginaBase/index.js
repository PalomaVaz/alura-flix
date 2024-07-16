import { Outlet } from "react-router-dom";
import Header from "../../componentes/Header";
import Rodape from "../../componentes/Rodape";
import VideosProvider from "../../contextos/videos";

function PaginaBase() {
    return (
        <main>
            <Header />
                <VideosProvider>
                    <Outlet />
                </VideosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;