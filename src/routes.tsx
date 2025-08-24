import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Four0Four from "./pages/404Error";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Homepage";
import WidgetsPage from "./pages/WidgetsPage";

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