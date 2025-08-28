import React from 'react'
import Banner from '../components/Header/Banner'
import Products from '../components/products/Products'
import Services from '../components/Services/Services'

const HomeScreen = () => {
    return (
        <main className="w-full">
            <Banner />
            <Services />
            <Products />
        </main>
    )
}

export default HomeScreen
