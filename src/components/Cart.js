function Cart() {
    var plantes = [
        { titre: 'Monstera', prix: 8 },
        { titre: 'Lierre', prix: 10 },
        { titre: 'Bouquet de fleurs', prix: 15 },
    ]
    return (
        <div className="col-lg-3 ms-0">
            <div className="card text-dark bg-light mb-3">
                <div className="card-header">Panier</div>
                <div className="card-body">
                    <div>
                        <ul>
                            <li>
                                {plantes[0].titre} {plantes[0].prix} FCFA
                            </li>
                            <li>
                                {plantes[1].titre} {plantes[1].prix} FCFA
                            </li>
                            <li>
                                {plantes[2].titre} {plantes[2].prix} FCFA
                            </li>
                        </ul>
                        <p>
                            Total{' '}
                            <span className="text-success">
                                {plantes[0].prix +
                                    plantes[1].prix +
                                    plantes[2].prix}
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
