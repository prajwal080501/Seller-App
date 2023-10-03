import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link href="/">
            <p className='font-bold text-4xl p-4'>Logo</p>
        </Link>
    )
}

export default Logo