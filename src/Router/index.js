import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LocationBar from '../components/LocationBar';
import Sidebar from '../components/Sidebar';
import Root from '../Root';

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/LocationBar",
                element:<LocationBar/>,
            },
            {
                path:"/Sidebar",
                element:<Sidebar/>,
            }
        ]
    }
]);

export default router;