import React, { useEffect, useState } from 'react';
import MyReviewsData from './MyReviewsData';
import toast from 'react-hot-toast';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://bandaid-dental-server.vercel.app/my-reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const handleDelete = (review) => {
        // console.log(review);
        const agree = window.confirm(`Are you sure to delete: ${review?.serviceTitle}`);
        if (agree) {
            fetch(`https://bandaid-dental-server.vercel.app/my-reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Your review already deleted');
                        const remaining = reviews.filter(riv => riv._id !== review._id);
                        setReviews(remaining);
                    }
                });
        }
    };



    return (
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 md:py-20 my-10 lg:justify-center">
            <div className="py-8 w-full">
                <div className=" grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full ">
                    {
                        reviews.map(review => <MyReviewsData
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></MyReviewsData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;