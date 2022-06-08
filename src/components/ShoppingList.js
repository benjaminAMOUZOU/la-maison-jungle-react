import React from 'react'
import { useState } from 'react'
import { plantList } from '../datas/plantList'
import Categorie from './Categorie'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
    const text = 'Ici achetez toutes les plantes dont vous avez toujours rêvé !'
    const [categorie, updateCategorie] = useState('')

    let plantFiltered = plantList
    if (categorie !== '') {
        plantFiltered = plantList.filter((plant) => {
            return plant.category === categorie
        })
    }

    return (
        <div className="col-lg-9">
            <p>{text}</p>
            <div className="row">
                <Categorie categorie={categorie} updateCategorie={updateCategorie} />
            </div>
            <div className="row">
                {plantFiltered.map((plant) => (
                    <PlantItem
                        key={`${plant.id}`}
                        id={plant.id}
                        name={plant.name}
                        category={plant.category}
                        cover={plant.cover}
                        light={plant.light}
                        water={plant.water}
                        price={plant.price}
                        cart={cart}
                        updateCart={updateCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShoppingList
