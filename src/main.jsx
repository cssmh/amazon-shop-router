import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import HomeLayout from './Component/Home/HomeLayout/HomeLayout';
import Products from './Component/Home/Products/Products';
import Dashboard from './Component/Home/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path: "/products",
        loader: ()=> fetch("https://dummyjson.com/products"),
        element: <Products></Products>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
