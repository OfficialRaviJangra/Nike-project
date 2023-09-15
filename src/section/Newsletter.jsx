import React from 'react'

const Newsletter = () => {
    return (
        <div className='padding w-full flex flex-col flex-1 lg:flex-row lg:justify-between justify-center items-center max-lg:gap-10'>
            <div className='w-full lg:w-[450px]'>
                <h1 className='text-4xl font-palanquin font-bold text-center lg:text-start max-lg:text-start'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
            </div>
            <form action="#" className='w-full lg:max-w-[550px] flex flex-1 items-center justify-between border-solid border border-gray-500 rounded-full py-2 pr-2 pl-8'>
                <input type="email" name="" id="" placeholder='subscribe@nike.com' className='outline-none ' />
                <input type="submit" value="Sign Up" className='bg-coral-red font-montserrat text-white font-light rounded-full px-7 py-4 text-lg cursor-pointer' />
            </form>
        </div>
    )
}

export default Newsletter
