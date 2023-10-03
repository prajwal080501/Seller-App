import React from 'react'
import CarList from '../components/CarList'
import { Link } from 'react-router-dom'
import { CarData2 } from '../data/data'

const Page2 = () => {
    return (
        <div>
            <h1>Page 2</h1>
            <CarList carData={CarData2} />
            <Link to="/2" className="text-blue-500">Page 2</Link>
        </div>
    )
}

export default Page2