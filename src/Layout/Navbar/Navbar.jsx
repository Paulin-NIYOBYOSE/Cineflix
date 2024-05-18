import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
    const hover = "hover:text-subMain transitions text-white"
    const Hover = ({ isActive }) => (isActive ? 'text-subMain' : 'hover"text-subMain')
    return (
        <>
            <div className='bg-main shadow-md sticky top-0 z-20'>
                <div className='container mx-auto py-6 px-2 lg:grid gap-20 grid-cols-7 justify-between'>
                    <div className='col-span-1 lg:block hidden'>
                        <Link to="" >
                            <img
                                src="/images/Logo.png"
                                alt="logo"
                                className='w-full h-12 object-contain' />
                        </Link>
                    </div>
                    <div className='col-span-3'>
                        <form className='w-full text-sm bg-dryGray rounded flex-btn gap-4'>
                            <button type='submit' className='bg-subMain w-12 flex-colo h-12 rounded text-white'>
                                <FaSearch />
                            </button>
                            <input type="text" placeholder=' Search Movie name here' className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black' />
                        </form>

                    </div>
                    {/* menu */}
                    <div className='col-span-3 font-medium text-sm hidden  gap-7 lg:flex items-center justify-end mr-20 '>
                        <NavLink to="/movies" className={hover} >
                            Movies
                        </NavLink>
                        <NavLink to="/about-us" className={hover} >
                            About us
                        </NavLink>
                        <NavLink to="/contact-us" className={hover} >
                            Contact us
                        </NavLink>
                        <NavLink to="/login" className={hover} >
                            <FaUser className="w-8 h-8" />
                        </NavLink>
                        <NavLink to="/favorite" className={`${hover} relative inline-block`}>
                            <FaHeart className="w-8 h-8" />
                            <div className='w-5 h-5 flex items-center justify-center rounded-full text-xs bg-subMain text-white absolute -top-2 -right-2'>
                                2
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar