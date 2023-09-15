import React from 'react'
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from '../constants'
const Nav = () => {
    return (
        <header className=' w-full absolute z-10 py-8 padding-x'>
            <nav className='flex flex-row justify-between items-center max-container'>
                <div className='cursor-pointer'>
                    <a href="#home">
                        <img src={headerLogo} alt="Header logo" />
                    </a>
                </div>
                <ul className='flex justify-center max-lg:hidden flex-1 gap-16 '>
                    {navLinks.map((navLink, i) => (
                        <li className='font-montserrat text-lg' key={i}>
                            <a href={navLink.href} className='text-gray-500'>{navLink.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='max-lg:hidden wide:mr-24'>
                    <p className='font-montserrat font-medium text-lg cursor-pointer'>Sign in / Explore Now</p>
                </div>
                <div className='lg:hidden cursor-pointer'>
                    <img src={hamburger} alt="" width={25} height={25} />
                </div>

            </nav>
        </header>
    )
}

export default Nav
