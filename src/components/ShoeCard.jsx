import React from 'react'

const ShoeCard = ({ imgUrl, bigshoeImg, changebigShoeImg }) => {
    const handleClick = () => {
        if (bigshoeImg !== imgUrl.bigShoe) { changebigShoeImg(imgUrl.bigShoe) }
    }
    return (
        <div className={`flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 sm:p-4 rounded-lg ${bigshoeImg == imgUrl.bigShoe ? "border-2 border-coral-red " : "border-0"}`} onClick={handleClick} >
            <img src={imgUrl.bigShoe} alt="" width={300} height={300} className='object-contain' />
        </div>
    )
}

export default ShoeCard
