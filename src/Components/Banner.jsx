import React from 'react'
import Swiper from 'swiper';
import { Movies } from "../../src/Data/Movies"

const Banner = () => {
    return (
        <div className='relative w-full'>
            <Swiper
                direction="vertical"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[AutoPlay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full xl:h-96 bg-dry lg:h-64 h-48"
            >
                {
                    Movies.slice(0, 6).map((movie, index))
                }
            </Swiper>
        </div >
    );
}

export default Banner