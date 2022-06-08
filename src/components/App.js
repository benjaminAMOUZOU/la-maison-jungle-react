import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
    const [cart, updateCart] = useState([])

    return (
        <React.Fragment>
            <Header />
            <div className="row">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default App
