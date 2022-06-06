import { useState } from 'react'

function Cart() {
    const monteraPrice = 8
    const [cart, updateCart] = useState(0)

    return (
        <div className="col-lg-3 ms-0">
            <div className="card text-dark bg-light mb-3">
                <div className="card-header">Panier</div>
                <div className="card-body">
                    <div>
                        <p>Monstera {monteraPrice} FCFA</p>
                        <button onClick={() => updateCart(cart + 1)} className="btn btn-success btn-sm">Ajouter</button>
                        <p>
                            Total{' '}
                            <span className="text-success">
                                {monteraPrice * cart}
                            </span>{' '}
                            FCFA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
