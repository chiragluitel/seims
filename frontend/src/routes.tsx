import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Four0Four from "./pages/404Error";
import WidgetsPage from "./pages/WidgetsPage";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/HomePage";
import CheckoutBar from "./components/Checkout/CheckoutBar";
import WMS from "./pages/WMS";
import NewProductRegistration from "./pages/Admin/NewProductRegistration";
import UpdateExistingProducts from "./pages/Admin/UpdateExistingProducts";
import UpdateExistingProductUpdateScreen from "./pages/Admin/UpdateExistingProductUpdateScreen";
import StockReceive from "./pages/Admin/StockReceive";
import NewUserRegistration from "./pages/Admin/NewUserRegistration";
import LoginPage from "./pages/LoginPage";

const routes: RouteObject[] = [
    {
        path:'/', 
        element:
        (  
            <>
                <div className="grid grid-cols-[auto_1fr_400px] h-screen w-screen overflow-hidden">
                    <Navbar />
                    <div className="p-4 overflow-hidden">
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
            },
            {
                path: '/updateproduct',
                element: <UpdateExistingProducts />
            },
            {
                path: '/updateproduct/:sku',
                element: <UpdateExistingProductUpdateScreen />
            },
            {
                path: '/receivestock',
                element: <StockReceive />
            },
            {
                path: '/newuser',
                element: <NewUserRegistration />
            },
        ]
    },
    {
        path:'/login',
        element: <LoginPage />
    },
    {
        path:'*', 
        element: <Four0Four />
    }
]
export const router = createBrowserRouter(routes);