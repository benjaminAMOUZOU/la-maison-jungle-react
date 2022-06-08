import React from 'react'

function Categorie({ categorie, updateCategorie }) {
    return (
        <div className="col-lg-12 text-center">
            <div className="row mb-3">
                <div className="offset-lg-3 col-lg-4 mt-2 me-0">
                    <select
                        className="form-select form-select-sm"
                        aria-label="Default select example"
                        value={categorie}
                        onChange={(e) => updateCategorie(e.target.value)}
                    >
                        <option defaultValue={''}>Choisissez une catégorie</option>
                        <option value="Classique">Classique</option>
                        <option value="Extérieur">Extérieur</option>
                        <option value="Plante grasse">Plante grasse</option>
                    </select>
                </div>
                <div className="col-lg-2 mt-2">
                    <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => updateCategorie('')}
                    >
                        Reinitialiser
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categorie
