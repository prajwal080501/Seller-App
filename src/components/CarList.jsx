import React, { useContext, useState } from 'react'
import CarCard from './CarCard'
import PaginationContext from '../context/PaginationContext';

const CarList = () => {

    const { currentCars} = useContext(PaginationContext);
    console.log(currentCars);
    return (
        <>
            <div className='mt-8 max-w-[90%] mx-auto gap-8 grid grid-cols-2 lg:grid-cols-3 bg-white p-2 mb-8 rounded-lg'>
                {
                    currentCars.map(({ name, id, rent, image, model, average, transmission, fuel, capacity }, index) => {
                        return (
                            <CarCard key={image} name={name} rent={rent} image={image} model={model} transmission={transmission} fuel={fuel} capacity={capacity} average={average} />
                        )
                    }
                    )
                }

            </div>
        </>
    )
}

export default CarList