import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className='bg-main shadow-md sticky top-0 z-20'>
                <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between'>
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
                            <input type="text" placeholder='Search' className='w-full' />
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar