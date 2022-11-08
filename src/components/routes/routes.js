import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddService from "../pages/Services/AddService";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import MyReviews from "../../components/MyReviews/MyReviews";
import SingleService from "../pages/Services/SingleService";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/add-new-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <SingleService></SingleService>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);