import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Four0Four from "./pages/404Error";
import WidgetsPage from "./pages/WidgetsPage";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/HomePage";
import CheckoutBar from "./components/Checkout/CheckoutBar";
import WMS from "./pages/WMS";
import NewProductRegistration from "./pages/Admin/NewProductRegistration";

const routes: RouteObject[] = [
    {
        path:'/', 
        element:
        (  
            <>
                <div className="grid grid-cols-[auto_1fr_400px] h-screen w-screen overflow-hidden">
                    <Navbar />
                    <div className="p-4 overflow-y-auto">
                        <Outlet />
                    </div>
                    <CheckoutBar />
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
            },
            {
                path:'/configs',
                element: <WMS />
            },
            {
                path: '/newproduct',
                element: <NewProductRegistration />
            }
        ]
    },

    {
        path:'*', 
        element: <Four0Four />
    }
]
export const router = createBrowserRouter(routes);