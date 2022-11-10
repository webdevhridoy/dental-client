import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';

const AddService = () => {
    useTitle('Add New Service');
    const [services, setServices] = useState({});
    const current = new Date().toLocaleString();

    // adding new service data to backend
    const handleAddNew = (event) => {
        event.preventDefault();
        event.target.reset();

        fetch('https://bandaid-dental-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New service has been created');

                }
                else {
                    toast.success('Something error. do it again');
                }
            });
    };

    // passing filed and value to backend
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newServices = { ...services, current };
        newServices[field] = value;
        setServices(newServices);
    };

    return (
        // add new service section started
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 md:py-20 my-10 lg:justify-center">
            <div className='text-start'>
                <div className='md:ml-5'>
                    <div className='ml-55'>
                        <h1 className="text-3xl font-bold text-center md:text-start">Add New Service</h1>
                    </div>
                    <form onSubmit={handleAddNew}>
                        <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input required onBlur={handleOnBlur} type="text" name="title" placeholder="enter service title" className="input input-bordered rounded-lg w-3/4" />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input required onBlur={handleOnBlur} type="text" name="rating" placeholder="enter service rating" className="input input-bordered rounded-lg w-3/4" />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input required onBlur={handleOnBlur} type="text" name="price" placeholder="enter price" className="input input-bordered rounded-lg w-3/4" />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input required onBlur={handleOnBlur} type="text" name="photoURL" placeholder="enter Photo ULR" className="input input-bordered rounded-lg w-3/4" />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center my-5'>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea minLength={150} required onBlur={handleOnBlur} type="text" name="textarea" id="" cols="30" rows="10" placeholder="enter service long description" className="input input-bordered rounded-lg w-3/4"></textarea>
                        </div>
                        <div className='mt-10 text-center md:text-start'>
                            <button type='submit' className='bg-blue-700 text-xl text-white px-6 py-3 rounded-lg hover:bg-blue-900 hover:text-white duration-500 ease-in-out'>Add now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;