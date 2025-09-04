import { createBrowserRouter, Outlet, type RouteObject } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Four0Four from "./Pages/404Error";
import NavbarForLoggedIn from "./components/Navigation/NavbarForLoggedIn";
import Footer from "./components/Footer";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ScrollToTop from "./helpers/scrollToTop";

const routes: RouteObject[] = [
    {
        path:'/', 
        element:
        (  
            <>
                <div className="min-h-screen flex flex-col">
                    <ScrollToTop />
                    <NavbarForLoggedIn />
                    <div className="flex-1">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </> 
        ),
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path:'/products',
                element: <ProductsPage />
            },
            {
                path:'/product/:productID',
                element: <ProductDetailPage />
            }
        ]
    },

    {
        path:'*', 
        element: (
            <div className="min-h-screen flex flex-col">
                <NavbarForLoggedIn />
                <div className="flex-1">
                    <Four0Four />
                </div>
                <Footer />
            </div>
        )
    }
]
export const router = createBrowserRouter(routes);