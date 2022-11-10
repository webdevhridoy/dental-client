import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo.png';
import { AuthContext } from '../../../context/AuthProvider';
import userProfile from '../../../assest/userImage.png';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);


    // sign out authentication start that from authProvider 
    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Log out successfully!');
            })
            .then(error => console.error(error));
    };

    return (
        // Header area started
        <div className='container px-10 mx-auto bg-blue-50'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {user?.uid ?
                                <>
                                    <li><Link to='/' className='text-xl hover:text-blue-700'>Home</Link></li>
                                    <li><Link to='/services' className='text-xl hover:text-blue-700'>Services</Link></li>
                                    <li><Link to='/blogs' className='text-xl hover:text-blue-700'>Blogs</Link></li>
                                    <li><Link to='/my-reviews' className='text-xl hover:text-blue-700'>My Reviews</Link></li>
                                    <li><Link to='/services/add-new-service' className='text-xl hover:text-blue-700'>Add Service</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to='/' className='text-xl hover:text-blue-700'>Home</Link></li>
                                    <li><Link to='/services' className='text-xl hover:text-blue-700'>Services</Link></li>
                                    <li><Link to='/blogs' className='text-xl hover:text-blue-700'>Blogs</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                    <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {user?.uid ?
                            <>
                                <li><Link to='/' className='text-xl hover:text-blue-700'>Home</Link></li>
                                <li><Link to='/services' className='text-xl hover:text-blue-700'>Services</Link></li>
                                <li><Link to='/blogs' className='text-xl hover:text-blue-700'>Blogs</Link></li>
                                <li><Link to='/my-reviews' className='text-xl hover:text-blue-700'>My Reviews</Link></li>
                                <li><Link to='/services/add-new-service' className='text-xl hover:text-blue-700'>Add Service</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/' className='text-xl hover:text-blue-700'>Home</Link></li>
                                <li><Link to='/services' className='text-xl hover:text-blue-700'>Services</Link></li>
                                <li><Link to='/blogs' className='text-xl hover:text-blue-700'>Blogs</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    {user?.uid || user?.email || user?.photoURL ?
                        <>
                            <img className='mr-3' style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" title={user?.displayName} />
                        </>
                        :
                        <>
                            <img className='mr-3' style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={userProfile} alt="" title={user?.displayName} />

                        </>
                    }

                    {user?.uid ?
                        <>
                            <Link onClick={handleSignOut} className="bg-blue-700 px-3 py-2 text-sm md:text-xl text-white flex flex-row justify-center items-center rounded-lg hover:bg-blue-900 hover:text-white duration-500 ease-in-out">
                                <span className='ml-2 flex justify-between items-center'>
                                    <span>Sign out</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </span>
                                </span>
                            </Link>
                        </>
                        :
                        <>

                            <Link to='/services/add-new-service' className="bg-blue-700 px-3 py-2 text-md md:text-xl text-white flex flex-row justify-center items-center rounded-lg hover:bg-blue-900 hover:text-white duration-500 ease-in-out mr-2">
                                <span className='ml-2 flex justify-between items-center md:text-lg text-sm'>
                                    <span>Add Service</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    </span>
                                </span>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;