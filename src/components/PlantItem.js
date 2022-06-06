import CareScale from './CareScale'

function handleClick(name) {
    console.log(`Ceci est un clic sur ${name}`)
}

function PlantItem({ id, name, cover, light, water, category, price }) {
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
                    <div class="row">
                        <div className="col">
                            <h5 className="card-title">{name}</h5>
                        </div>
                        <div className="col text-end">
                            <CareScale careType="water" scaleValue={water} />
                        </div>
                    </div>

                    <div class="row">
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
                            onClick={() => handleClick(name)}
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
