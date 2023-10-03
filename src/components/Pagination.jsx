import {Link} from 'react-router-dom';


const Pagination = () => {
    // display numbers 1 to 10 for now
    const pages = [];

    for(let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center space-x-2">
            {pages.map(page => (
                <Link to={
                    page === 1 ? '/' : `/${page}`
                } key={page} className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">{page}</Link>
            ))}
        </div>
    )
}

export default Pagination