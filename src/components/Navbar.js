import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="p-3 pr-10   flex justify-end items-center bg-gradient-to-b from-gray-700 to-gray-600 text-white font-semibold">
            <ul className="flex justify-center items-center">
                <li className='pl-6 hover:text-red-600 duration-500'> <Link to='/'>Home</Link></li>
                <li className='pl-6 hover:text-red-600 duration-500'><Link to='/ArticleList'>ArticleList</Link></li>
                <li className='pl-6 hover:text-red-600 duration-500'><Link to='/About' >About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
