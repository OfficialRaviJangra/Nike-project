import React from 'react'
import { products } from '../constants'
import ProductCard from '../components/ProductCard'


const OurProducts = () => {
    return (
        <section id='products' className='max-xl:padding-x padding-y max-sm:mt-12'>
            <h1 className='text-4xl font-palanquin font-semibold'>Our <span className='text-coral-red'>Popular</span> Products</h1>
            <p className='font-montserrat mt-4 mb-12 text-md text-gray-500 leading-6 max-w-lg'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-16 mt-20'>
                {products.map((product, i) => (
                    <ProductCard product={product} key={i} />
                ))}
            </div>
        </section>
    )
}

export default OurProducts
