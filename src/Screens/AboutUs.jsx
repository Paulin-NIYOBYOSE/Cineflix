import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Components/Head';

const AboutUs = () => {
    return (
        <Layout>
            <div className='min-height-screen container mx-auto px-2 my-6'>
                <Head title="About us" />
                <div className='xl:py-20 py-10 px-4 '>
                    <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
                        <div>
                            <h3 className='text-xl lg:text-3xl mb-4'>
                                Welcome to our Cineflixo
                            </h3>
                        </div>
                        <div className='mt-3 text-sm leading-8 text-text'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Ab dolores facere iusto reiciendis deserunt
                                consectetur accusamus et natus temporibus possimus
                                veritatis voluptates eum, animi necessitatibus
                                explicabo? Dolores quam numquam cum!
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Ea vel earum molestiae aperiam temporibus
                                tempora iste quae debitis dolor accusantium minus
                                sunt veritatis animi totam facilis deserunt esse
                                ipsa. Veritatis.
                            </p>
                        </div>
                        <div className='p-8 bg-dry rounded-lg'>
                            <span className='text-3xl block font-extrabold mt-4'>
                                10K
                            </span>
                            <h4 className='text-lg font-bold mb-1'>Listed Movies</h4>
                            <p className='mb-0 text-text leading-7 text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit..
                            </p>
                        </div>
                        <div className='p-8 bg-dry rounded-lg'>
                            <span className='text-3xl block font-extrabold mt-4'>
                                8K
                            </span>
                            <h4 className='text-lg font-bold mb-1'>Lovely users</h4>
                            <p className='mb-0 text-text leading-7 text-sm'>
                                Completely free without registration
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUs;
