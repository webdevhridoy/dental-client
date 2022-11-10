import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../Hook/useTitle';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();
    const [review, setReview] = useState(reviews);

    const { rewiewDetails, serviceTitle } = review;

    useTitle('Update Your Review');

    const current = new Date().toLocaleString();


    // Updating current reviews of the specific user
    const handleSubmitReview = (event) => {
        event.preventDefault();

        fetch(`https://bandaid-dental-server.vercel.app/my-reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    toast.success('Reivew has been updated');
                }

            });
    };

    // getting input value and passing on backend to update 
    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review, current };
        newReview[field] = value;
        setReview(newReview);
        // console.log(newReview);
    };

    return (
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 md:pb-20 my-10 lg:justify-center">
            <div className='bg-base-100 shadow-xl text-left pl-2 ml-1 py-5 rounded-md'>
                <h1 className="text-2xl font-bold sm:text-3xl p-6">Update your feedback here...👎</h1>
                <form onSubmit={handleSubmitReview} className="space-y-6 ng-untouched ng-pristine ng-valid p-5">
                    <div className="space-y-1 text-sm">
                        <textarea defaultValue={rewiewDetails} onBlur={handleOnBlur} required className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " name="rewiewDetails" id="" cols="50" rows="10"></textarea>
                    </div>
                    <div className="space-y-1 text-sm">
                        <input onBlur={handleOnBlur} defaultValue={serviceTitle} readOnly required type="title" name="title" id="title" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input onBlur={handleOnBlur} defaultValue={user?.displayName} required type="name" name="name" id="name" placeholder="Write Your name" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input onBlur={handleOnBlur} readOnly defaultValue={user?.photoURL} required type="text" name="photoURL" id="photoURL" className="w-full px-4 py-3 border border-gray-600  rounded-md text-black " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input onBlur={handleOnBlur} required type="rating" name="rating" id="rating" placeholder="Rating: 5*" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <input onBlur={handleOnBlur} defaultValue={user?.email} required type="email" name="email" id="email" placeholder="Write Your email" className="w-full px-4 py-3 border border-gray-600 rounded-md text-black " />
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>Submit Review</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateReview;