import React from 'react'
import CarList from '../components/CarList'
import { Link } from 'react-router-dom'
import { CarData3 } from '../data/data'

const Page3 = () => {
    return (
        <div>
            <CarList carData={CarData3} />
            <Link to="/3" className="text-blue-500">Page 2</Link>
        </div>
    )
}

export default Page3