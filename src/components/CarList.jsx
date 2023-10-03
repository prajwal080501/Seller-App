import React, { useState } from 'react'
import { CarData } from '../data/data'
import CarCard from './CarCard'
import Pagination from './Pagination';

const CarList = ({carData}) => {
    const [totalCars, setTotalCars] = useState(carData.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([])
    const carsPerPage = 6;
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = carData.slice(indexOfFirstCar, indexOfLastCar);
    const totalPages = Math.ceil(totalCars / carsPerPage);


    function goToNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    function goToPreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <>
            <div className='mt-8 max-w-[90%] mx-auto gap-8 grid grid-cols-2 lg:grid-cols-3 bg-white p-2 mb-8 rounded-lg'>
                {
                    currentCars.map(({ name, id, rent, image, model, average, transmission, fuel, capacity }, index) => {
                        return (
                            <CarCard key={id} name={name} rent={rent} image={image} model={model} transmission={transmission} fuel={fuel} capacity={capacity} average={average} />
                        )
                    }
                    )
                }

            </div>
        </>
    )
}

export default CarList