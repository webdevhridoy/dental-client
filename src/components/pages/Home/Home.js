import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assest/banner.png';
import useTitle from '../../Hook/useTitle';
import './Home.css';
import ServicesGrid from '../Services/ServicesGrid';


const Home = () => {
    const [services, setServices] = useState([]);
    useTitle('Home');

    useEffect(() => {
        fetch('https://bandaid-dental-server.vercel.app/home-service',)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (

        <div>
            {/* Home section start  */}
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold sm:text-6xl customtitle">CREATING <span className=" text-blue-500">BEAUTIFUL</span> SMILES
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">I proudly provide quality dental care
                        <br className="hidden md:inline lg:hidden" /> when people seek the best treatment for their dental issues.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/blogs' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold rounded  bg-blue-700 text-white">My BLogs</Link>
                        <Link to='/services' rel="noopener noreferrer" className="px-8 py-3 text-lg font-semibold border rounded  border-gray-500">Services</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                    <img className='rounded-2xl' src={banner} alt="" />
                </div>
            </div>

            {/* feature section start */}
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
                <div className='flex flex-col justify-center items-center bg-blue-50 m-3 rounded-md shadow-md p-10 md:p-16'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    </span>
                    <span className='my-3'>
                        <h2 className='text-lg md:text-2xl font-bold text-gray-900'>Find A Doctor</h2>
                        <p className=' text-lg mt-2'>Here I proudly provide you with the best treatment ever which is mid-range cost.So, don't be late.</p>
                    </span>
                </div>

                <div className='flex flex-col justify-center items-center bg-blue-700 text-white m-3 rounded-md shadow-md p-10 md:p-16'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>

                    </span>
                    <span className='my-3'>
                        <h2 className='text-lg md:text-2xl font-bold'>Get an Appointment</h2>
                        <p className=' text-lg mt-2'>You can get an appointment which is really easy. Phone me at 01647221566 and get your appointment.</p>
                    </span>
                </div>

                <div className='flex flex-col justify-center items-center bg-blue-50 m-3 rounded-md shadow-md p-10 md:p-16'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg>
                    </span>
                    <span className='my-3'>
                        <h2 className='text-lg md:text-2xl font-bold text-gray-900'>Solved Problem</h2>
                        <p className='text-lg mt-2'>I believe you will get my best treatment and I always make sure that my patient get the best service ever.</p>
                    </span>
                </div>
            </div>

            {/* Services section started */}
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:justify-center bg-blue-50 bg-opacity-40">
                <div>
                    <h1 className="text-3xl font-bold sm:text-6xl">Our <span className=" text-blue-500">Services</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg mx-2 md:mx-52 sm:mb-12">The Bandaid Dental is a place where a dentist performs procedures and treatments on patients. A dental clinic ordinarily provides basic services, such as checkups, fillings and root canals.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    {
                        services.map(service => <ServicesGrid
                            key={service._id}
                            service={service}
                        ></ServicesGrid>)
                    }
                </div>
                <div className='pt-20 pb-5 flex justify-center items-center'>
                    <Link to='/services' type="button" className="flex items-center justify-center  px-7 py-3 font-semibold tracking-wide rounded-md bg-blue-700 hover:bg-blue-900 hover:text-white text-white">See All</Link>
                </div>
            </div>

            {/* Newsletter part started */}
            <div className="container flex justify-center p-6 mx-auto sm:py-12 mb-20 mt-20 lg:py-16 lg:flex-row lg:justify-center items-center bg">
                <div>
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                    <form>
                        <label className="input-group">
                            <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                            <span>Email</span>
                        </label>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;