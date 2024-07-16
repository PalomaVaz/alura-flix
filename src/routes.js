import PaginaBase from "./pages/PaginaBase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NovoVideo from "./pages/NovoVideo";
import Inicio from "./pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaBase />}>
                <Route index element={<Inicio />}></Route>
                <Route path="novovideo" element={<NovoVideo />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
