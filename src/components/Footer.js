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
            <div className="col-lg-12 text-center mb-3">
                <p>Pour les passionné-e-s des plantes</p>
                <p>Laissez-nous votre mail:</p>
                <input
                    style={{ width: 250 }}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={(e) => checkValue(e.target.value)}
                    name="mail"
                    placeholder="Ecrivez votre mail"
                />
            </div>
        </div>
    )
}

export default Footer
