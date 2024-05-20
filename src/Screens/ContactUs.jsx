import React from 'react'
import Layout from '../Layout/Layout';
import Head from '../Components/Head';
import { FaPhoneAlt, FaVoicemail } from 'react-icons/fa';
import { FaMapPin } from 'react-icons/fa';
const ContactUs = () => {
    const ContactData = [
        {
            id: 1,
            title: "Email Us",
            info: "Interactively grow backend ideas for cross-platform.",
            icon: <FaVoicemail className='h-8 w-8' />,
            contact: "cineflix@gmail.com"
        },
        {
            id: 2,
            title: "Call us",
            info: "Distinctively exploit optimal alignments",
            icon: <FaPhoneAlt className='h-8 w-8' />,
            contact: "+250784794400"
        },
        {
            id: 3,
            title: "Location",
            info: "Gisenyi, Rubavu, Rwanda ",
            icon: <FaMapPin className='h-8 w-8' />,
            contact: "",
        },

    ]
    return (
        <Layout>
            <div className='min-height-screen container mx-auto px-2 my-6'>
                <Head title="Contact us" />
                <div className='grid gap-6 lg:mt-20 mt-10 w-full sm:px-[10px] px-[30px]' >
                    <div className='grid lg:grid-rows-1 lg:grid-cols-3 md:gird-rows-2 md:grid-cols-2 gap-4 xl:gap-16 items-center '>
                        {ContactData.map((item) => (
                            <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center w-full'>
                                <span className='flex-colo w-20 h-20 rounded-full bg-main text-subMain'>
                                    {item.icon}
                                </span>
                                <h5 className='text-2xl font-semibold mb-2'>{item.title}</h5>
                                <p className='mb-0 text-sm text-text leading-7 '>
                                    <a href="" className='text-blue-600'>{item.contact}</a>
                                    {item.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs