import React from 'react'
import HeroBtn from '../components/HeroBtn'
import { offer } from '../assets/images'
import SpecialOfferBtn from '../components/SpecialOfferBtn'


const SpecialOffer = () => {
    return (
        <div className='flex xl:flex-row flex-col-reverse gap-8 justify-center items-center'>
            <div>
                <img src={offer} alt="Offer image" width={800} height={800} />
            </div>
            <div className='xl:w-[800px] flex flex-col'>
                <h1 className='text-4xl font-palanquin font-bold mb-5'><span className='text-coral-red'>Special </span>Offer</h1>
                <p className='info-text mb-8'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className='info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                <div className='flex flex-row justify-start items-center gap-6 mt-12'>
                    <HeroBtn />
                    <SpecialOfferBtn />
                </div>
            </div>

        </div>
    )
}

export default SpecialOffer
