import React from 'react';
import Titles from '../Titles';
import Slider from 'react-slick';
import { Movies } from '../../Data/MovieData';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            {/* Your custom previous arrow icon or element */}
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            {/* Your custom next arrow icon or element */}
        </div>
    );
};

const TopRated = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="my-16 px-[60px]">
            <Titles title="Top Rated" IconBase={BsBookmarkStarFill} />
            <div className="mt-10">
                <Slider {...settings} className="grid gap-4">
                    {Movies.map((movie, index) => (
                        <div key={index} className="w-full mr-4"> {/* Add mr-4 for gap between slides */}
                            <div className="mr-4 p-4 h-rate border border-border bg-dry rounded-lg">
                                <img
                                    src={`/images/${movie.titleImage}`}
                                    alt={movie.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className='px-4 gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                                    <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full '>
                                        <FaHeart />
                                    </button>
                                    <Link className="font-semibold text-xl" to={`/movie/${movie.name}`}>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TopRated;
