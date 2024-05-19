import React from 'react'
import { FaUser } from 'react-icons/fa'

const Promos = () => {
    return (
        <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
                <div className='flex lg:gap-10 gap-6 flex-col'>
                    <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium leading-relaxed'>
                        Download Your Movies & Watch Offline <br /> Enjoy on your mobile
                    </h1>
                    <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
                        doloribus molestias sequi asperiores architecto in rem, iusto hic
                        molestiae veniam quidem eligendi reprehenderit voluptatem corrupti
                        tempore debitis voluptatibus velit nesciunt.
                    </p>
                    <div className='flex gap-4 md:text-lg text-sm'>
                        <div className='flex-colo bg-black text-subMain px-6 py-3 rounded font-bold'>
                            HD 4K
                        </div>
                        <div className='flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold'>
                            <FaUser /> 2K
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Promos