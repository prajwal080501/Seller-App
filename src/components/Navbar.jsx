import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    return (
        <div className='flex px-4 bg-white justify-between items-center'>
          <div>
            <Logo />
          </div>
            <div className='w-[30%]'>
                {/* search */}
                <input className='bg-gray-100 outline-none ring-1 focus:ring-2 focus:ring-blue-500 duration-200 p-2 w-full rounded-lg' type="text" placeholder='Search' />
            </div>
        </div>
    )
}

export default Navbar