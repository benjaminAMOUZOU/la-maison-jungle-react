import { useState } from 'react'

function checkValue(value) {
    if (!value.includes('@')) {
        alert("Votre adresse email n'est pas une adresse valide !")
    }
}

function Footer() {
    const [inputValue, setInputValue] = useState('Ecrivez votre mail')

    return (
        <div className="row">
            <div className="offset-lg-5 col-lg-3 mb-3 mt-3 text-center">
                <p>Pour les passionné-e-s des plantes</p>
                <p>Laissez-nous votre mail:</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={(e) => checkValue(e.target.value)}
                    name="mail"
                    placeholder="Ecrivez votre mail"
                    className="form-control form-control-sm"
                />
            </div>
        </div>
    )
}

export default Footer
