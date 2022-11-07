import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = () => {
    return (
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:justify-center">
            <div>
                <h1 className="text-3xl font-bold sm:text-6xl">Our <span className=" text-blue-500">Services</span>
                </h1>
                <p className="mt-6 mb-8 text-lg mx-2 md:mx-52 sm:mb-12">The Bandaid Dental is a place where a dentist performs procedures and treatments on patients. A dental clinic ordinarily provides basic services, such as checkups, fillings and root canals.
                </p>
            </div>
            <div className="max-w-xs rounded-md shadow-md m-3 mx-auto">
                <PhotoProvider>
                    <PhotoView src="/https://i.ibb.co/gVvXd5H/doctor-with-patient-6-A8-ZF4-L.jpg">
                        <img className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" src="https://i.ibb.co/gVvXd5H/doctor-with-patient-6-A8-ZF4-L.jpg" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between space-y-8">

                    <div className="mt-2 text-start mx-2">
                        <h2 className="text-3xl font-semibold tracking-wide mt-2">Donec lectus leo</h2>
                        <p className='text-lg mt-1'>Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget...</p>
                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-lg'>Price: $524</p>
                            <p className='text-lg'>Rating: 5*</p>
                        </div>
                    </div>

                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-700 text-white">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Services;