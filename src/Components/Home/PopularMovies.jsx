import React from 'react'
import Titles from '../Titles'
import { FaFilm } from 'react-icons/fa'
import { Movies } from '../../Data/MovieData'
import Movie from '../Movie'

const PopularMovies = () => {
    return (
        <div className='my-16 '>
            <Titles title="Popular Movies" IconBase={FaFilm} />
            <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:h-[40rem]'>
                {Movies.slice(0, 8).map((movie, index) => (
                    <Movie key={index} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default PopularMovies;