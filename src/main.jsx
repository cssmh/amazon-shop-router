import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './Component/Products/Products';
import ProductDetails from './Component/Products/ProductDetails';
import DashboardLayout from './Component/DashboardLayout/DashboardLayout';
import Dashboard from './Component/DashboardLayout/Dashboard';
import Profile from './Component/DashboardLayout/Profile';
import EditProfile from './Component/DashboardLayout/EditProfile';
import HomeLayout from './Component/HomeLayout/HomeLayout';
import Home from './Component/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        loader: ()=> fetch("https://dummyjson.com/products"),
        element: <Products></Products>
      },
      {
        path: "/products/:productId",
        loader: ({params})=> fetch(`https://dummyjson.com/products/${params.productId}`),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>
          },
          {
            path: "/dashboard/edit-profile",
            element: <EditProfile></EditProfile>
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
