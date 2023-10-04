import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PaginationContext from '../context/PaginationContext';


const Pagination = () => {
    const { goToNextPage, goToPreviousPage, totalPages } = useContext(PaginationContext);
    return (
        <div>
            <button onClick={goToPreviousPage}>Previous</button>
            <button onClick={goToNextPage}>Next</button>
        </div>
    )
}


export default Pagination