import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const SubmitReview = () => {
    const serviceDetails = useLoaderData();
    const { title, _id } = serviceDetails;
    const { user } = useContext(AuthContext);

    const handleSubmitReview = event => {
        event.preventDefault();

        const form = event.target;
        const rewiew = form.rewiew.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const title = form.title.value;
        const rating = form.rating.value;
        const email = user?.email || 'unregisterd';
        // console.log({ rewiew, name, photoURL, title, rating, email });

        // passing clients reviews to backend
        const review = {
            reviewId: _id,
            rewiewDetails: rewiew,
            userImage: photoURL,
            name: name,
            serviceTitle: title,
            rating: rating,
            email: email
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
        <div>
            {/* clients submit reviews secitons */}
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
                                    <input required type="rating" name="rating" id="rating" placeholder="Rating: 5*" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <input defaultValue={user?.email} required type="email" name="email" id="email" placeholder="Write Your email" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                                </div>
                                <div className='mt-5'>
                                    <button type='submit' className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>Submit Review</button>
                                </div>
                            </form>
                        </div>
                    </>
                    :
                    <>
                        <h2>Please login to add a review</h2>
                    </>
                }
            </div>
        </div>
    );
};

export default SubmitReview;