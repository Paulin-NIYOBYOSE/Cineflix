import React from 'react'

const Head = ({ title }) => {
    return (
        <div className='w-full bg-deepGray lg:h-64 relative overflow-hidden rounded-md'>
            <img
                src="/images/About.jpeg"
                alt="aboutus"
                className='w-full h-full object-cover'
            />
            <div className='absolute lg:top-24 top-16 w-full flex-colo'>
                <h1 className='text-3xl lg:text-5xl text-white text-center font-bold'>
                    {title && title}
                </h1>
            </div>
        </div>
    );
}

export default Head