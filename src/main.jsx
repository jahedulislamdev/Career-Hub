import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Error from './components/NotFound/Error'
import Home from './components/Home/Home';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import ViewJobDetails from './components/JobDetails/ViewJobDetails';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import AllJobs from './components/AllJobs/AllJobs';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <App></App>,
    children: [
      {
        path: '/featured_jobs',
        loader: () => fetch("metrial.json"),
        element: <FeaturedJobs></FeaturedJobs>
      },
      {
        path: '/',
        loader: () => fetch("metrial.json"),
        element: <Home></Home>
      },
      {
        path: '/featured-job/:id',
        loader: () => fetch("../metrial.json"),
        element: <ViewJobDetails></ViewJobDetails>
      },
      {
        path: '/applied_jobs',
        loader: () => fetch("../metrial.json"),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/all_jobs',
        loader: () => fetch("public/allJobs.json"),
        element: <AllJobs></AllJobs>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
