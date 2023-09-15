import React from 'react'
import { arrowRight } from "../assets/icons"
const HeroBtn = () => {
    return (
        <button className='flex items-center justify-center gap-2 px-7 py-4 bg-coral-red rounded-full font-montserrat text-white max-w-[200px]'>
            Shop Now <span className='ml-3'><img src={arrowRight} alt="right-arrow" width={20} height={20} /></span>
        </button>
    )
}

export default HeroBtn
