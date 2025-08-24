import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Four0Four from "./pages/404Error";
import WidgetsPage from "./pages/WidgetsPage";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/HomePage";

const routes: RouteObject[] = [
    {
        path:'/', 
        element:
        (  
            <>
                <div className="grid grid-cols-[auto_1fr] h-screen">
                    <Navbar />
                <div className="p-4">
                    <Outlet />
                </div>
                    

                </div>
            </> 
            
        ),
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:'/home',
                element: <HomePage />
            },
            {
                path:'/widgets',
                element: <WidgetsPage />
            }
        ]
    },

    {
        path:'*', 
        element: <Four0Four />
    }
]
export const router = createBrowserRouter(routes);