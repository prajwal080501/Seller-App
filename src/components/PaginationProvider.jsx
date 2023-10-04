import { useState } from "react";
import { CarData } from "../data/data"
import PaginationContext from "../context/PaginationContext";


const PaginationProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(6);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = CarData.slice(indexOfFirstCar, indexOfLastCar);
    const totalPages = Math.ceil(CarData.length / carsPerPage);

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
        <PaginationContext.Provider value={{ goToNextPage, goToPreviousPage, currentPage, totalPages, currentCars}}>
            {children}
        </PaginationContext.Provider>
    )
}

export default PaginationProvider