import React from 'react'
import HeroBtn from '../components/HeroBtn'
import { shoe8 } from '../assets/images'
import QualityProdBtn from '../components/QualityProdBtn'


const QualityProduct = () => {
    return (
        <div className='max-xl:padding-x flex flex-col lg:flex-row gap-12 sm:gap-8 lg:justify-between xl:padding-t'>
            <div className='lg:w-[540px]'>
                <h1 className='text-4xl font-palanquin font-bold'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
                <p className='font-montserrat mt-4 mb-8 text-lg text-gray-500 leading-7 '>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                </p>
                <p className='font-montserrat mb-12 text-lg text-gray-500 leading-7 '>Our dedication to detail and excellence ensures your satisfaction</p>
                <QualityProdBtn />
            </div>
            <div className='flex justify-center xl:padding-r max-lg:py-25'>
                <img src={shoe8} alt="Qualtiy Shoes" />
            </div>
        </div>
    )
}

export default QualityProduct
