import CareScale from './CareScale'

function PlantItem({ id, name, cover, light, water, category, price, cart, updateCart }) {
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)

        if (currentPlantAdded) {
            const cartFilterdPlantAdded = cart.filter((plant) => plant.name !== name)

            updateCart([
                ...cartFilterdPlantAdded,
                { name, price, amount: currentPlantAdded.amount + 1 },
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className="col-lg-3">
            <div key={`${id}`} className="card mb-4">
                <img
                    className="card-img-top"
                    src={cover}
                    alt={`${name} cover`}
                    style={{ width: 221, height: 221 }}
                />
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">{name}</h5>
                        </div>
                        <div className="col text-end">
                            <CareScale careType="water" scaleValue={water} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p className="card-text">{category}</p>
                        </div>
                        <div className="col text-end">
                            <CareScale careType="light" scaleValue={light} />
                        </div>
                    </div>

                    <div className="text-start mt-2">
                        <span className="text-danger">{price} FCFA</span>
                    </div>

                    <div className="text-end mt-2">
                        <button
                            className="btn btn-outline-success btn-sm"
                            onClick={() => addToCart(name, price)}
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantItem
