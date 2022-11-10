import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Swal from 'sweetalert2';
import ServicePageReview from './ServicePageReview';

const SingleService = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const serviceDetails = useLoaderData();
    const { photoURL, title, _id, rating, price, textarea } = serviceDetails;
    const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const current = new Date().toLocaleString();

    // Review section function 
    useEffect(() => {
        const url = `https://bandaid-dental-server.vercel.app/my-review?reviewId=${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id]);


    // passing single service reviews to backend
    const handleSubmitReview = event => {
        event.preventDefault();

        const form = event.target;
        const rewiew = form.rewiew.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const title = form.title.value;
        const rating = form.rating.value;
        const email = user?.email || 'unregisterd';

        const review = {
            reviewId: _id,
            rewiewDetails: rewiew,
            userImage: photoURL,
            name: name,
            serviceTitle: title,
            rating: rating,
            email: email,
            current: current
        };
        fetch('https://bandaid-dental-server.vercel.app/my-reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Review added!',
                        'Your can check your reviews on my Review page!',
                        'Thank you'
                    );
                    event.target.reset();
                }
            });

    };



    return (
        // single service details started
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
                        </div>
                        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
                        <div>
                            <span>By</span> <span className='font-bold'>{user?.displayName}</span> <span className='text-gray-600'>{current}</span>
                        </div>
                        <p className="mt-6  text-lg mr-2 sm:mb-6">{textarea}
                        </p>
                    </div>
                    <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gray-700  text-gray-600">
                        <h2 className="text-2xl font-bold sm:text-3xl p-6">
                            What People Say About Me.
                        </h2>
                        {
                            reviews.length === 0 ?
                                <>
                                    <h1 className='text-blue-700 text-1xl text-center font-bold sm:text-xl p-6'>No Reviews Were Added</h1>
                                </>
                                :
                                <>
                                    {
                                        reviews.map(review => <ServicePageReview
                                            key={review._id}
                                            review={review}
                                        ></ServicePageReview>)
                                    }
                                </>
                        }

                    </div>
                </div>

                {/* conditional rendering for if someone not logged to put their review */}
                <div className='py-20'>
                    {user?.uid || user?.email ?
                        <>
                            <div className='bg-base-100 shadow-xl text-left pl-2 ml-1 py-5 rounded-md'>
                                <h1 className="text-2xl font-bold sm:text-3xl p-6">Leave feedback about this</h1>
                                <form onSubmit={handleSubmitReview} className="space-y-6 ng-untouched ng-pristine ng-valid p-5">
                                    <div className="space-y-1 text-sm">
                                        <textarea required className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " name="rewiew" id="" cols="50" rows="10" placeholder='Write your review'></textarea>
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <input defaultValue={title} readOnly required type="title" name="title" id="title" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <input defaultValue={user?.displayName} required type="name" name="name" id="name" placeholder="Write Your name" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <input readOnly defaultValue={user?.photoURL} required type="text" name="photoURL" id="photoURL" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <input required type="rating" name="rating" id="rating" placeholder="type rating" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <input defaultValue={user?.email} required readOnly type="email" name="email" id="email" placeholder="Write Your email" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                                    </div>

                                    <div className='mt-5'>
                                        <button type='submit' className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                        </>
                        :
                        <>
                            <div className='bg-base-100 shadow-xl text-left px-2 mr-1 py-5 rounded-md flex justify-between items-center'>
                                <h1 className="text-2xl font-bold sm:text-3xl p-6">Please <Link to='/login' state={{ from: location }} className='text-blue-700 hover:underline'>login</Link> to add a review</h1>

                                <Link to="/login" state={{ from: location }} replace type='submit' className='bg-blue-700 text-xl text-white px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white duration-500 ease-in-out'>Add Review</Link>
                            </div>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleService;