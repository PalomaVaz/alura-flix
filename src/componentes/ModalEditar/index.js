import'./ModalEditar.css'
import CampoFormulario from "../CampoFormulario";
import CampoLista from "../CampoLista";
import Textarea from "../Textarea";
import { BotaoFormulario } from '../Botao'
import { useEffect, useState } from 'react'

function ModalEditar({ video, aoSalvar, aoFecharModal, categorias }) {

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [url, setUrl] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo)
            setDescricao(video.descricao)
            setUrl(video.url)
            setImagem(video.imagem)
            setCategoria(video.categoria)
        } else {
            setTitulo('');
            setDescricao('');
            setUrl('');
            setImagem('');
            setCategoria('');
        }
    }, [video])

    const submit = (event) => {
        event.preventDefault();
        const videoAtualizado = {
            id: video.id,
            titulo,
            descricao,
            url,
            imagem,
            categoria
        }
        aoSalvar(videoAtualizado)
        aoFecharModal()
    }

    return (
        <>
            {video && <>
                <div className="overley" />
                <dialog open={!!video} className="modal">
                    <div onClick={aoFecharModal} className="iconeFechar">X</div>
                    <h1>Editar card</h1>
                    <form onSubmit={submit} method="dialog">
                        <div className="sessaoCampos">
                            <div className="campos">
                                <CampoFormulario className="campoModal"
                                    obrigatorio={true}
                                    label="Título"
                                    placeholder="Insira o título"
                                    valor={titulo}
                                    aoAlterado={valor => setTitulo(valor)}
                                />

                                <CampoLista
                                    obrigatorio={true}
                                    label="Categoría"
                                    placeholder="Selecione uma categoía..."
                                    opcoes={categorias}
                                    valor={categoria}
                                    aoAlterado={valor => setCategoria(valor)}
                                />

                                <CampoFormulario
                                    obrigatorio={true}
                                    label="Imagem"
                                    placeholder="URL da imagem"
                                    valor={imagem}
                                    aoAlterado={valor => setImagem(valor)}
                                />

                                <CampoFormulario
                                    obrigatorio={true}
                                    label="Vídeo"
                                    placeholder="URL do vídeo"
                                    valor={url}
                                    aoAlterado={valor => setUrl(valor)}
                                />

                                <Textarea
                                    obrigatorio={true}
                                    label="Descrição"
                                    placeholder="Sobre o que é esse vídeo?"
                                    valor={descricao}
                                    aoAlterado={valor => setDescricao(valor)}
                                />

                            </div>
                            <div className="botoesModal">
                                <BotaoFormulario
                                    children="Guardar"
                                    type='submit'
                                />
                                <BotaoFormulario
                                    children="Limpar"
                                    type='reset'
                                />
                            </div>
                        </div>
                    </form>
                </dialog>
            </>}
        </>
    )
}


export default ModalEditar