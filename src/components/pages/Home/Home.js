import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assest/banner.png';
import useTitle from '../../Hook/useTitle';
import './Home.css';

const Home = () => {
    useTitle('Home');
    return (

        <div>
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold sm:text-6xl customtitle">CREATING <span className=" text-blue-500">BEAUTIFUL</span> SMILES
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">I proudly provide quality dental care
                        <br className="hidden md:inline lg:hidden" /> when people seek the best treatment for their dental issues.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded  bg-blue-700 text-white">Our BLogs</Link>
                        <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded  border-gray-500">Services</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                    <img className='rounded-2xl' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;