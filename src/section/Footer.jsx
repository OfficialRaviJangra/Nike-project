import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
    return (
        <div className='max-container flex flex-col text-white font-montserrat'>
            <div className='flex flex-col lg:flex-row gap-20 items-start'>
                <div className='max-w-sm'>
                    <img src={footerLogo} alt="Footer-logo" width={150} height={150} className='mb-7' />
                    <p className=' mb-10 slate-gray leading-relaxed text-gray-300'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                    <div className='flex gap-5'>
                        {socialMedia.map((link, i) => (
                            <span key={i} className='cursor-pointer'><img src={link.src} alt={link.alt} className='bg-white rounded-full p-3' /></span>
                        ))}
                    </div>
                </div>
                <div className='flex flex-1 flex-wrap justify-between gap-20'>
                    {footerLinks.map((link, i) => (
                        <div key={i} className='flex flex-col'>
                            <h1 className='text-2xl font-medium mb-6'>{link.title}</h1>
                            {link.links.map((link, i) => (
                                <a href={link.link} key={i} className='my-[5px] slate-gray text-gray-300 hover:text-slate-gray '>{link.name}</a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center  justify-center text-center sm:justify-between mt-20 text-md'>
                <a href='#'>&#169; Copyright. All rights reserved.</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>
    )
}

export default Footer
