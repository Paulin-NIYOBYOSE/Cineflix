import React from 'react'
import { FaClock, FaRegCalendarAlt } from 'react-icons/fa';

const FlexMovieItems = ({ movie }) => {
    return (
        <>
            <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>
                    {movie.category}
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-subMain text-sm font-medium' />
                <span className='text-sm font-medium'>{movie.year}</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaClock className='text-subMain text-sm font-medium' />
                <span className='text-sm font-medium'>{movie.time}</span>
            </div>
        </>
    );
}

export default FlexMovieItems