import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import SubmitReview from '../../MyReviews/SubmitReview';

const SingleService = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { photoURL, title, _id, rating, price, textarea, time } = serviceDetails;

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    return (
        <div className='container p-6 mx-auto'>
            <div>
                <div className=" bg-base-100 shadow-sm text-left">
                    <figure className="pt-10">
                        <img src={photoURL} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <span className='bg-blue-100 py-2 rounded-md w-28 pl-2 ml-1'>Price: ${price}</span>
                            <span className='bg-blue-100 py-2 rounded-md w-28 pl-2 ml-1'>Rating: {rating} </span>
                            <span className='bg-blue-100 py-2 rounded-md w-28 pl-2 ml-1 flex justify-start items-center'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <span className='ml-1'>{time}</span>
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
                        <div>
                            <span>By</span> <span className='font-bold'>{user?.displayName}</span> <span className='text-gray-600'>{date}</span>
                        </div>
                        <p className="mt-6  text-lg mr-2 sm:mb-6">{textarea}
                        </p>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='bg-base-100 shadow-xl text-left px-2 mr-1 py-5 rounded-md flex justify-between items-center'>
                        <h1 className="text-2xl font-bold sm:text-3xl p-6">Leave feedback about this</h1>

                        <Link to={`/service/${_id}`} type='submit' className='bg-blue-700 text-xl text-white px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white duration-500 ease-in-out'>Add Review</Link>
                    </div>
                </div>
                <div className='py-20'>
                    <SubmitReview></SubmitReview>
                </div>
            </div>

        </div>
    );
};

export default SingleService;