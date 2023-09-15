import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ review }) => {
    return (
        <div className='max-w-[380px] flex flex-col justify-center items-center'>
            <img src={review.imgURL} alt="" width={120} height={120} className='rounded-full object-contain mb-6' />
            <p className='info-text text-center'>{review.feedback}</p>
            <span className='flex gap-2 items-center font-montserrat my-3'><img src={star} alt="rating star" /> ({review.rating})</span>
            <h2 className='font-palanquin font-bold text-3xl'>{review.customerName}</h2>
        </div>
    )
}

export default ReviewCard
