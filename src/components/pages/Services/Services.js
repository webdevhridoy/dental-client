import React, { useEffect, useState } from 'react';

import useTitle from '../../Hook/useTitle';
import ServicesGrid from './ServicesGrid';
const Services = () => {
    const [prodcuts, setProducts] = useState([]);
    useTitle('Services');

    useEffect(() => {
        fetch('https://bandaid-dental-server.vercel.app/services',)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);



    return (
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:justify-center">
            <div>
                <h1 className="text-3xl font-bold sm:text-6xl">Our <span className=" text-blue-500">Services</span>
                </h1>
                <p className="mt-6 mb-8 text-lg mx-2 md:mx-52 sm:mb-12">The Bandaid Dental is a place where a dentist performs procedures and treatments on patients. A dental clinic ordinarily provides basic services, such as checkups, fillings and root canals.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    prodcuts.map(product => <ServicesGrid
                        key={product._id}
                        product={product}
                    ></ServicesGrid>)
                }
            </div>

        </div>
    );
};

export default Services;