import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PaginationContext from '../context/PaginationContext';


const Pagination = () => {
    const { goToNextPage, goToPreviousPage, totalPages } = useContext(PaginationContext);
    return (
        <div className='flex justify-center items-center space-x-5 pb-5 mb-5'>
            <button className="bg-blue-500 text-white font-medium p-3 rounded-lg" onClick={goToPreviousPage}>Previous</button>
            <button className="bg-blue-500 text-white font-medium p-3 rounded-lg" onClick={goToNextPage}>Next</button>
        </div>
    )
}


export default Pagination