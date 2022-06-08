function Cart({ cart, updateCart }) {
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

    return (
        <div className="col-lg-3 ms-0">
            <div className="card text-dark bg-light mb-3">
                <div className="card-header">Panier</div>
                <div className="card-body">
                    <ul>
                        {cart.map(({ name, amount, price }, index) => (
                            <li key={`${name}-${index}`}>
                                {name} - {price} FCFA * {amount}
                            </li>
                        ))}
                    </ul>
                    <p>
                        Total <span className="text-success">{total}</span> FCFA
                    </p>

                    <button
                        className="btn btn-outline-success btn-sm"
                        style={{ width: '100%' }}
                        onClick={() => updateCart([])}
                    >
                        Vider le panier
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
