import React from 'react'
import { star } from '../assets/icons'
const ProductCard = ({ product }) => {
    return (
        <div className='flex flex-col gap-8'>
            <img src={product.imgURL} alt="" width="282px" height="282px" />
            <div>
                <span className="flex items-center font-montserrat text-lg ">
                    <img src={star} alt="product-img" className='mr-2' width={25} height={25} />
                    (4.5)
                </span>
                <h3 className='my-3 font-semibold  text-xl'>{product.name}</h3>
                <h3 className='font-bold text-lg text-coral-red'>{product.price}</h3>
            </div>
        </div>
    )
}

export default ProductCard
