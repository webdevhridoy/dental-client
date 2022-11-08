import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServicesGrid = ({ product }) => {
    // console.log(product);
    const { photoURL, title, _id, rating, price, textarea, time } = product;
    return (
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
                                {textarea.slice(0, 100) + '...'}
                            </>
                            :
                            <>
                                {textarea}
                            </>}
                    </p>
                    <div className='flex justify-between items-center mt-5'>
                        <p className='text-lg'>Price: ${price}</p>
                        <p className='text-lg'>Rating: {rating}</p>
                        <p className='text-lg flex justify-between items-center'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span>{time}</span>
                        </p>
                    </div>
                </div>

                <Link to={`/services/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-700 text-white">Read more</Link>
            </div>
        </div>
    );
};

export default ServicesGrid;