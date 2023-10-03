import React from 'react'
import CarList from '../components/CarList'
import { Link } from 'react-router-dom'
import { CarData4, CarData6 } from '../data/data'

const Page6 = () => {
    return (
        <div>
            <CarList carData={CarData6} />
            <Link to="/4" className="text-blue-500">Page 4</Link>
        </div>
    )
}

export default Page6