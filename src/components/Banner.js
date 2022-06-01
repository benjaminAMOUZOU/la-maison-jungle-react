import React from 'react'
import Cart from './Cart'
import Description from './Description'
import Header from './Header'
import Footer from './Footer'

function Banner() {
    return (
        <React.Fragment>
            <Header />
            <div className="row">
                <Cart />
                <Description />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Banner
