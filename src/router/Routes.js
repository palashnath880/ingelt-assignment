import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/Main/MainLayout';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />
        }
    ]);
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}

export default Routes;
