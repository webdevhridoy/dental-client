import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServicesGrid = ({ service }) => {
    const { photoURL, title, _id, rating, price, textarea, } = service;
    return (
        // service grid started
        <div className="max-w-xs rounded-md shadow-md m-3 mx-auto">
            <PhotoProvider>
                <PhotoView src={photoURL}>
                    <img className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" src={photoURL} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between space-y-8">

                <div className="mt-2 text-start mx-2">
                    <h2 className="text-2xl font-semibold tracking-wide mt-2">{title}</h2>
                    <p className='text-lg mt-1'>
                        {textarea.length > 100 ?
                            <>
                                {textarea.slice(0, 80) + '...'}
                            </>
                            :
                            <>
                                {textarea}
                            </>}
                    </p>
                    <div className='flex justify-between items-center mt-5'>
                        <p className='text-lg'>Price: ${price}</p>
                        <p className='text-lg'>Rating: {rating}</p>
                    </div>
                </div>

                <Link to={`/services/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-700 text-white">View Details</Link>
            </div>
        </div>
    );
};

export default ServicesGrid;