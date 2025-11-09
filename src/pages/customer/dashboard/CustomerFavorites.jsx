import ServiceCard from '@/components/common/ServiceCard'
import { mockServices } from '@/data/mockServices'
import React from 'react'

const CustomerFavorites = () => {
    return (
        <div className='w-full font-playfair flex flex-col justify-start gap-3'>
            <h1 className='sm:text-2xl text-xl font-bold'>Favorites</h1>
            <div className='w-full grid c-xxxl:grid-cols-4 grid-cols-1 c-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 c-xxxl:gap-8 gap-4'>
                {
                    mockServices.slice(0, 10).map((service) => (
                        <ServiceCard key={service.id} isFavorite={true} service={service} />
                    ))
                }
            </div>
        </div>
    )
}

export default CustomerFavorites