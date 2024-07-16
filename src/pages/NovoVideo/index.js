import "./NovoVideo.css";
import CampoFormulario from "../../componentes/CampoFormulario/index.js";
import { useState } from "react";
import Textarea from "../../componentes/Textarea";
import CampoLista from "../../componentes/CampoLista";
import { BotaoFormulario } from "../../componentes/Botao";

const NovoVideo = () => {
  const defaultData = {
    titulo: "",
    descricao: "",
    imagem: "",
    url: "",
    categoria: "",
  };
  const [formData, setFormData] = useState(defaultData);

  const categorias = ["Front-End", "Back-End", "Mobile"];

  const limparData = () => {
    setFormData(defaultData);
  };

  const aoSubmeter = async () => {
    console.log("aoSubmeter");
    console.log(formData);
    // evento.preventDefault();

    try {
      await fetch(
        "http://localhost:3000/videos",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.parse({
            titulo:formData.titulo,
            descricao:formData.descricao,
            imagem:formData.imagem,
            url:formData.url,
            categoria:formData.categoria,
          }),
        }
      );
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  };

  return (
    <form className="formulario">
      <div className="cabecalhoFormulario">
        <h1>Novo vídeo</h1>
        <p>Complete o formulário para criar um novo card de vídeo.</p>
      </div>
      <div className="sessaoCampos">
        <h2>Criar Card</h2>
        <div className="campos">
          <CampoFormulario
            obrigatorio={true}
            label="Título"
            placeholder="Insira o título"
            valor={formData.titulo}
            aoAlterado={(valor) => setFormData({ ...formData, titulo: valor })}
            tipo="text"
            minLength="3"
            maxLength=""
          />

          <CampoLista
            obrigatorio={true}
            label="Categoria"
            placeholder="Selecione uma categoria..."
            opcoes={categorias}
            valor={formData.categoria}
            aoAlterado={(valor) =>
              setFormData({ ...formData, categoria: valor })
            }
          />

          <CampoFormulario
            obrigatorio={true}
            label="Imagem"
            placeholder="URL da imagem"
            valor={formData.imagem}
            aoAlterado={(valor) => setFormData({ ...formData, imagem: valor })}
            tipo="url"
          />

          <CampoFormulario
            obrigatorio={true}
            label="Vídeo"
            placeholder="URL do vídeo"
            valor={formData.url}
            aoAlterado={(valor) => setFormData({ ...formData, url: valor })}
            tipo="url"
          />

          <Textarea
            obrigatorio={true}
            label="Descrição"
            placeholder="Sobre o que é esse vídeo?"
            valor={formData.descricao}
            aoAlterado={(valor) =>
              setFormData({ ...formData, descricao: valor })
            }
            tipo="text"
            minLength="10"
            maxLength="250"
          />
        </div>
        <div className="botoesFormulario">
          <BotaoFormulario 
            children="Guardar" 
            type="submit" 
            onClick={aoSubmeter}
        />
          <BotaoFormulario
            children="Limpar"
            type="reset"
            onClick={limparData}
          />
        </div>
      </div>
    </form>
  );
};

export default NovoVideo;

// function NovoVideo() {
//     return (
//         <>
//             <section>
//                 Hello World!
//             </section>

//         </>
//     )
// }

// export default NovoVideo;
