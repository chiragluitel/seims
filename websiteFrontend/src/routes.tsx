import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Four0Four from "./Pages/404Error";

const routes: RouteObject[] = [
    {
        path:'/', 
        element:
        (  
            <>
                {/* <div className="grid grid-cols-[auto_1fr_400px] h-screen w-screen overflow-hidden">
                    <LandingPage />
                    <div className="p-4 overflow-hidden">
                        <Outlet />
                    </div>
                    <LandingPage />
                </div> */}
                <Outlet/>
            </> 
        ),
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:'/home',
                element: <LandingPage />
            }
        ]
    },

    {
        path:'*', 
        element: <Four0Four />
    }
]
export const router = createBrowserRouter(routes);