import CareScale from './CareScale'

function handleClick(name) {
    console.log(`Ceci est un clic sur ${name}`)
}

function PlantItem({ id, name, cover, light, water, category }) {
    return (
        <div className="col-lg-3">
            <div key={`${id}`} className="card mb-4">
                <img
                    className="card-img-top"
                    src={cover}
                    alt={`${name} cover`}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{category}</p>
                    <CareScale careType="water" scaleValue={water} />
                    <CareScale careType="light" scaleValue={light} />
                    <div className="text-end">
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
