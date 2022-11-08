import React from 'react';

const MyReviews = () => {
    return (
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 md:py-20 my-10 lg:justify-center">
            <div className="py-8 w-full">
                <div className="lg:flex items-center justify-center w-full ">
                    {/* lg flex start for inline dive  */}
                    <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded hover:shadow-lg duration-500 ease-in-out">
                        <div className="flex items-center border-b border-gray-200 pb-6">
                            <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt='' className="w-12 h-12 rounded-full" />
                            <div className="flex items-start justify-between w-full">
                                <div className="pl-3 w-full">
                                    <p className="text-xl font-medium leading-5 text-gray-800">Dogecoin nerds</p>
                                    <p className="text-sm leading-normal pt-2 text-gray-500">36 members</p>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="m-1 cursor-pointer hover:text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="px-2">
                            <p className="text-sm leading-5 py-4 text-gray-600">A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                            <div className="flex">
                                <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#dogecoin</div>
                                <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#crypto</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;