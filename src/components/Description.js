import React from 'react'
import ShoppingList from './ShoppingList'

function Description() {
    const text = 'Ici achetez toutes les plantes dont vous avez toujours rêvé !'

    return (
        <div className="col-lg-9">
            <p>{text}</p>
            <ShoppingList/>
        </div>
    )
}

export default Description
