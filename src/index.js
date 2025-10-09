import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './component/bookingAppointment';
import HomePage from './component/homepage';
import Booking from '../src/seach/BookingData'
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"search",
        element: <Search />
      },
      {
        path:"my-bookings",
        element: <Booking />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
