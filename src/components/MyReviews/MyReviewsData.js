import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hook/useTitle';

const MyReviewsData = ({ review, handleDelete }) => {
    const { serviceTitle, rewiewDetails, _id, rating, userImage } = review;

    useTitle('My-Reviews');
    return (
        // this is all reviews by grid system
        <div className=" lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow-lg rounded hover:shadow-xl duration-500 ease-in-out m-2">
            <div className="flex items-center border-b border-gray-200 pb-6">
                <img src={userImage} alt='' className="w-12 h-12 rounded-full" />
                <div className="flex items-start justify-between w-full">
                    <div className="pl-3 w-full">
                        <p className="text-xl font-medium leading-5 text-gray-800">{serviceTitle}</p>
                        <p className="text-sm leading-normal pt-2 text-gray-500 flex justify-center items-center">
                            <span className='mr-2'>I gave: {rating}</span>
                        </p>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="m-1 cursor-pointer hover:text-blue-700 text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 20 20" fill="none">
                                <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#2847C5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#2847C5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#2847C5" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 border-2 border-blue-300  w-52">
                            <li><Link to={`/my-reviews/${_id}`}>Edit</Link></li>
                            <li><Link onClick={() => handleDelete(review)}>Delete</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="px-2">
                <p className="text-sm leading-5 py-4 text-gray-600">{rewiewDetails}</p>
            </div>
        </div>
    );
};

export default MyReviewsData;