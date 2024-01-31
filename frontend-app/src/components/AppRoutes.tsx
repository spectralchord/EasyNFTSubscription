import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DetailsPage from "@/pages/DetailsPage";
import SubscriptionList from "@/pages/SubscriptionList";
import AppWrapper from "@/components/AppWrapper";
import {ThemeProvider} from "@/providers/ThemeProvider";
import Landing from "@/pages/Landing/Landing";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing/>,
    },
    {
        path: '/app',
        element: <ThemeProvider defaultTheme="dark">
            <AppWrapper/>
        </ThemeProvider>,
        children: [
            {
                path: '/app/',
                element: <SubscriptionList/>,
            },
            {
                path: '/app/:id',
                element: <DetailsPage/>,
            }
        ],
    },
]);

const AppRoutes = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRoutes;