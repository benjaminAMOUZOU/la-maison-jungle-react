import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
    const text = 'Ici achetez toutes les plantes dont vous avez toujours rêvé !'

    return (
        <div className="col-lg-9">
            <p>{text}</p>
            <div className="row">
                {plantList.map((plant) => (
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
