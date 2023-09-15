import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
    return (
        <div className=' max-xl:padding-x flex gap-9 flex-wrap'>
            {services.map((service, i) => (
                <ServiceCard service={service} key={i} />
            ))}
        </div>
    )
}

export default Services
