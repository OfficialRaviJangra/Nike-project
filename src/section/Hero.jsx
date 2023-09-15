import React, { useState } from 'react'
import HeroBtn from '../components/HeroBtn'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
    const [bigshoeImg, setBigshoeImg] = useState(bigShoe1)
    return (
        <section id='#home' className='flex flex-col items-start xl:flex-row justify-center w-full max-container min-h-screen gap-10  '>
            <div className='relative flex flex-col justify-start xl:w-2/5 pt-28 max-sm:pt-16 max-xl:padding-x'>
                <h2 className='font-montserrat text-coral-red text-xl max-sm:mt-10'>Our Summer collections</h2>
                <h1 className='text-[70px] sm:text-8xl mt-9 font-palanquin font-bold'>
                    <div className='relative bg-white inline-block z-10 xl:whitespace-nowrap pr-10 sm:py-5 max-sm:py-2 max-sm:leading-tight'>The New Arrival</div>
                    <span className='text-coral-red mr-4'>Nike</span>
                    Shoes
                </h1>
                <p className='font-montserrat mt-4 mb-12 text-lg text-gray-500 leading-8 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for you active life.</p>
                <HeroBtn />
                <div className='flex justify-start gap-16 mt-20 flex-wrap'>
                    {statistics.map((stat) => (
                        <div className='flex flex-col' key={stat.value}>
                            <h1 className='text-4xl font-palanquin font-bold'>{stat.value}</h1>
                            <p className="font-montserrat text-gray-500 ">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative  xl:w-3/5  w-full bg-primary bg-hero bg-cover bg-center flex flex-1 h-screen justify-center items-center min-xl:pr-10 max-xl:py-40'>
                <img src={bigshoeImg} alt="" className='object-contain' />
                <div className='flex absolute gap-5 -bottom-[5%] sm:left-[10%] max-sm:px-10'>
                    {shoes.map((shoe) => (
                        <ShoeCard imgUrl={shoe} key={shoe.bigShoe} bigshoeImg={bigshoeImg} changebigShoeImg={(shoe) => { setBigshoeImg(shoe) }} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Hero
