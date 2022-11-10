import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='bg-blue-50 sticky top-0 z-50'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;