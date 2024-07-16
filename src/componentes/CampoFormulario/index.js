import './CampoFormulario.css'

function CampoFormulario(
    { tipo, maxlength, minlength, placeholder, label, valor, obrigatorio = false, aoAlterado }
) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo" >
            <label>{label}</label>
            <input
                className="campoInput"
                type={tipo}
                minLength={minlength}
                maxLength={maxlength}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoFormulario