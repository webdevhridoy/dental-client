import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const SingleService = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    const { photoURL, title, _id, rating, price, textarea, time } = serviceDetails;
    const { user } = useContext(AuthContext);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const name = form.name.value;
        const rating = form.rating.value;
        const email = form.email.value;
        console.log(review, name, rating, email);
    };


    return (
        <div className='container p-6 mx-auto'>
            <div>
                <div className='py-20'>
                    <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800">
                        Read Our Latest
                    </h1>
                    <p role="contentinfo" className="text-base leading-normal text-center text-gray-600 mt-4">
                        Whether article spirits new her covered hastily sitting her. Money witty books nor son
                    </p>
                </div>
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
                    <div className='bg-base-100 shadow-xl text-left pl-2 ml-1 py-5 rounded-md'>
                        <h1 className="text-2xl font-bold sm:text-3xl p-6">Leave feedback about this</h1>
                        <form onSubmit={handleSubmitReview} className="space-y-6 ng-untouched ng-pristine ng-valid p-5">
                            <div className="space-y-1 text-sm">
                                <textarea className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " name="rewiew" id="" cols="50" rows="10" placeholder='Write your review'></textarea>
                            </div>
                            <div className="space-y-1 text-sm">

                                <input type="name" name="name" id="name" placeholder="Write Your name" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="rating" name="rating" id="rating" placeholder="Rating: 5*" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                            </div>
                            <div className="space-y-1 text-sm">
                                <input type="email" name="email" id="email" placeholder="Write Your email" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                            </div>
                            <div className='mt-5'>
                                <button type='submit' className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleService;