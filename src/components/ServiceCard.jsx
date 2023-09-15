import React from 'react'

const ServiceCard = ({ service }) => {
    return (
        <div className='flex flex-col px-10 py-16 shadow-3xl rounded-3xl sm:w-[350px] flex-1'>
            <span className='bg-coral-red flex justify-center items-center rounded-full w-11 h-11'>
                <img src={service.imgURL} alt="" className='object-contain' />
            </span>
            <h1 className='text-3xl font-palanquin font-bold mt-4 xl:mb-2 mb-4 max-xl:leading-none'>{service.label}</h1>
            <p className='info-text'>{service.subtext}</p>
        </div>
    )
}

export default ServiceCard
