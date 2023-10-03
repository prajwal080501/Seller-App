import React from 'react'
import CarList from '../components/CarList'
import { Link } from 'react-router-dom'
import { CarData4 } from '../data/data'

const Page10 = () => {
    return (
        <div>
            <CarList carData={CarData4} />
            <Link to="/4" className="text-blue-500">Page 4</Link>
        </div>
    )
}

export default Page10