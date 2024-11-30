import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home"
import Adventure from "../Components/Adventure"
import AdventureDetails from "../Pages/AdventureDetails"
import Login from "../Pages/Login"
import Registration from "../Pages/Registration"
import UserProfile from "../Pages/UserProfile"
import UpdateProfile from "../Pages/UpdateProfile"
import PrivateRoute from "../Components/PrivateRoute"
import ForgetPass from "../Pages/ForgetPass"


const routes = createBrowserRouter([
    {   
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Adventure></Adventure>,
                        loader: ()=>fetch('/data.json'),
                      },
                   
                ]
            },
            {
                path: '/data/:ID',
                element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
                loader: ()=>fetch('/data.json'),
            },
            {
                path: '/login',
                element :<Login></Login>
            },
            {
                path: '/registration',
                element :<Registration></Registration>
            },
            {
                path: '/forget',
                element :<ForgetPass></ForgetPass>
            },

            {
                path: '/profile',
                element :<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
               
            },
            {
                path: '/update',
                element :<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
        ] 
        
    }
   
])
export {routes}