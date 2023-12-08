import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Blog, { loaderBlogs } from '../pages/Blog'
import Posts, { loaderPost } from '../pages/Posts'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [

            {
                errorElement: <NotFound />,
                children: [

                    {
                        index: true,
                  
                        element: <Home />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/services",
                        element: <Services />,
                    },

                    {
                        path: "/blog",
                        element: <Blog />,
                        loader: loaderBlogs,
                    },

                    {
                        path: "/blog/:id",
                        element: <Posts />,
                        loader: loaderPost,
                    }, {
                        path: "/contact",
                        element: <Contact />,
                    },
                ]
            }
        ],
    },
]);