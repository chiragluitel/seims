import { createBrowserRouter, type RouteObject } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Four0Four from "./pages/404Error";

const routes: RouteObject[] = [
    {
        path:'/',
        element: <LandingPage />
    },
    {
        path:"*",
        element:<Four0Four />
    }
]

export const router = createBrowserRouter(routes);