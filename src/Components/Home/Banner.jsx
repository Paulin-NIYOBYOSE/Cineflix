import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Movies } from '../../Data/MovieData';
import FlexMovieItems from '../FlexMovieItems';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: false
    };

    return (
        <div className="w-full bg-dry h-full">
            <Slider {...settings}>
                {Movies.slice(0, 5).map((movie, index) => (
                    <div key={index} className="relative rounded overflow-hidden h-96">
                        <img
                            src={`/images/${movie.image}`}
                            alt={movie.title}
                            className="w-full h-full object-cover" />
                        <div className='absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                            <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                                {movie.name}
                            </h1>
                            <div className='flex gap-5 items-center text-dryGray '>
                                <FlexMovieItems movie={movie} />
                            </div>
                            <div className='flex gap-5 items-center '>
                                <Link to={`/movie/${movie.name}`} className='bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs' >
                                    Watch
                                </Link>
                                <button className='bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Banner;
