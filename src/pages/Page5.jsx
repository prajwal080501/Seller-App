import React from 'react'
import CarList from '../components/CarList'
import { Link } from 'react-router-dom'
import {  CarData5 } from '../data/data'

const Page5 = () => {
    return (
        <div>
            <CarList carData={CarData5} />
            <Link to="/4" className="text-blue-500">Page 4</Link>
        </div>
    )
}

export default Page5