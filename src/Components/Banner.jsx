import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9e53035105msh502678ca814e5d8p15ecccjsn871314f03935',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setMovies(result.d);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        <div className='relative w-full'>
            <div className='movies'>
                {movies.map((item, index) => (
                    <div key={index}>
                        <img src={item.i && item.i.imageUrl} alt={item.l} />
                        <h2>{item.l}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
