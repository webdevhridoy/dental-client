import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo.png';

const Header = () => {
    return (
        <div className='container px-10 mx-auto '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='text-xl hover:text-blue-700'>Home</Link></li>
                            <li><Link className='text-xl hover:text-blue-700'>Services</Link></li>
                            <li><Link className='text-xl hover:text-blue-700'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='text-xl hover:text-blue-700'>Home</Link></li>
                        <li><Link className='text-xl hover:text-blue-700'>Services</Link></li>
                        <li><Link className='text-xl hover:text-blue-700'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="bg-blue-700 px-3 py-2 text-xl text-white flex flex-row justify-center items-center rounded-lg hover:bg-blue-900 hover:text-white duration-500 ease-in-out">
                        <span className='ml-2 flex justify-between items-center'>
                            <span>Login</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;