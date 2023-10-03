import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { PiSteeringWheelBold } from 'react-icons/pi'
const CarCard = ({ name, rent, image, model, average, transmission, capacity, fuel }) => {
    return (
        <div className='bg-white hover:opacity-70 cursor-pointer hover:scale-105 duration-200 ease-linear px-4 py-3 rounded-lg shadow-sm'>
            <div className=''>
                <img className='object-contain bg-gray-100' src={image} alt="image" />
            </div>
            <hr className='p-4' />
            <div className='flex justify-between items-center'>
                <p className='font-extrabold text-3xl'>{name}</p>
                <p className='text-gray-500 font-bold bg-gray-100 p-2 rounded-lg'>Model: {model}</p>
            </div>
            {/* features */}
            <div className='grid grid-cols-2 w-full place-items-center  ring-2 ring-gray-200 p-2 rounded-lg gap-y-4 mt-4'>
                <div className='text-lg font-bold text-gray-600 flex items-center'>
                    <PiSteeringWheelBold className='font-bold text-blue-500 text-lg mr-2' /> {transmission}
                </div>
                <div className='text-lg font-bold text-gray-600 flex items-center space-x-4'>
                    <BsPeople className='font-bold text-blue-500 text-lg mr-2' /> {capacity}
                </div>
                <div className='text-lg font-bold text-gray-600'>{fuel}</div>
                <div className='text-lg font-bold text-gray-600'>{average}/litre</div>
            </div>
            <div className='flex justify-between items-center mt-6'>
                <p className='text-2xl font-bold'>₹{rent}/day</p>

                <button className='px-3 py-2 rounded-lg text-lg font-medium bg-blue-500 text-white'>
                    Rent now
                </button>
            </div>
        </div>
    )
}

export default CarCard