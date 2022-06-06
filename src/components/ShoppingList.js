import React from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

function ShoppingList() {
    return (
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
                />
            ))}
        </div>
    )
}

export default ShoppingList
