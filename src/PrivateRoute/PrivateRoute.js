import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import logo from '../../src/assest/logo.png';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center items-center h-screen'>
            <img className='w-32' src={logo} alt="" />
        </div>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    } else {
        return children;
    }
};

export default PrivateRoute;