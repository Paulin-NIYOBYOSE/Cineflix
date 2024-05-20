import React, { useRef } from 'react';
import Titles from '../Titles';
import Slider from 'react-slick';
import { Movies } from '../../Data/MovieData';
import { BsBookmarkStarFill, BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Rate from './Rate';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-arrow slick-prev" onClick={onClick}>
            <BsCaretLeft />
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-arrow slick-next" onClick={onClick}>
            <BsCaretRight />
        </button>
    );
};

const classNames = "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";

const TopRated = () => {
    const sliderRef = useRef(null);

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

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="my-16 px-[60px]">
            <Titles title="Top Rated" IconBase={BsBookmarkStarFill} />
            <div className="mt-10">
                <Slider {...settings} ref={sliderRef} className="grid gap-4">
                    {Movies.map((movie, index) => (
                        <div key={index} className="w-full mr-4"> {/* Add mr-4 for gap between slides */}
                            <div className="mr-4 p-4 h-rate hovered border border-border bg-dry rounded-lg relative">
                                <img
                                    src={`/images/${movie.titleImage}`}
                                    alt={movie.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className='absolute hoveres  inset-0 flex flex-col justify-center items-center gap-6 text-center bg-black bg-opacity-50'>
                                    <button className='w-12 h-12 flex items-center justify-center transition hover:bg-subMain hover:rounded'>
                                        <FaHeart />
                                    </button>
                                    <Link className='font-semibold text-xl truncate line-clamp-2 text-white' to={`/movies/${movie.name}`}>
                                        {movie.name}
                                    </Link>
                                    <div className='flex gap-2 text-star'>
                                        {/* Assuming Rate component displays star ratings */}
                                        <Rate value={movie.rate} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='w-full px-1 flex-rows gap-6 pt-12'>
                    <button className={classNames} onClick={goToPrevSlide}>
                        <BsCaretLeft />
                    </button>
                    <button className={classNames} onClick={goToNextSlide}>
                        <BsCaretRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;
