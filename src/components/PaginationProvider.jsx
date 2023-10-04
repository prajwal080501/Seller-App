import { useState } from "react";
import { CarData } from "../data/data"
import PaginationContext from "../context/PaginationContext";


const PaginationProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(6);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
//    set currentCars 6 per page

    const currentCars = CarData.filter((car) => {
        if (searchTerm === "") {
            return car
        } else if (car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return car
        }
    }).slice(indexOfFirstCar, indexOfLastCar);
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
        <PaginationContext.Provider value={{ goToNextPage, goToPreviousPage, currentPage, totalPages, currentCars, searchTerm, setSearchTerm}}>
            {children}
        </PaginationContext.Provider>
    )
}

export default PaginationProvider