import './CampoLista.css'

    function CampoLista({label, aoAlterado, valor, obrigatorio = false, opcoes, placeholder }) {
    return (
        <div className="campoLista">
            <label>{label}</label>
            <select className="campoInput"
                placeholder={placeholder} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor} >
                    <option className="opcoes" value="">Selecione uma categoría...</option> 
                {opcoes.map(opcao => {
                    return <option className="opcoes" key={opcao}>{opcao}</option>
                })}
            </select>
        </div>
    )

}

export default CampoLista