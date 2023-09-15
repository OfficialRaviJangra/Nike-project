import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
    return (
        <div className='flex flex-col flex-1 justify-center items-center  w-full bg-purple-100/50 padding-x box-border padding-y'>
            <h1 className='text-4xl font-palanquin font-bold mb-5 text-center'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
            <p className='info-text sm:w-[550px] text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            <div className='w-full xl:px-[180px] flex flex-col lg:flex-row items-center lg:justify-between max-lg:gap-[100px] mt-[100px]'>
                {reviews.map((review, i) => (
                    <ReviewCard review={review} key={i} />
                ))}
            </div>
        </div>
    )
}

export default CustomerReview
