import React, { useContext, useEffect, useState } from 'react';
import MyReviewsData from './MyReviewsData';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../Hook/useTitle';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user, userSignOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    // getting specific account reviews by fileting query email
    useEffect(() => {
        fetch(`https://bandaid-dental-server.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('bandaid-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userSignOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            });
    }, [user?.email, userSignOut]);

    // deleting speciic review of the specific user
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
                {/* added conditional rendering when the user haven't any review and added map to get the total reviews */}
                <div >
                    {
                        reviews.length === 0 ?

                            <>
                                <h1 className='text-blue-700 text-xl'>No Reviews Were Added</h1>
                            </>
                            :
                            <>
                                <div className=" grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full ">
                                    {
                                        reviews.map(review => <MyReviewsData
                                            key={review._id}
                                            review={review}
                                            handleDelete={handleDelete}
                                        ></MyReviewsData>)
                                    }
                                </div>
                            </>


                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;