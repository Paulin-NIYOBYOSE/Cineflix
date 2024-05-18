import React from 'react';
import Layout from '../Layout/Layout';
import Banner from '../Components/Banner';
import PopularMovies from "../Components/PopularMovies";
import Promos from '../Components/Promos';
import TopRated from '../Components/TopRated';


const HomeScreen = () => {
    return (

        <Layout>
            <div className='container mx-auto min-h-screen px-2 mb-6'>
                <Banner />
                <PopularMovies />
                <Promos />
                <TopRated />
            </div>
        </Layout>
    )
}

export default HomeScreen