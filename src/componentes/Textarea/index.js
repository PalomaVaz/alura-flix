import './Textarea.css';

//
function Textarea(
    { tipo, minlength, maxlength, placeholder, label, valor, obrigatorio = false, aoAlterado }
) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="textarea" >
            <label>{label}</label>
            <textarea className="campoInput"
                type={tipo}
                minLength={minlength}
                maxLength={maxlength}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default Textarea