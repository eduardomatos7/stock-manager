import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items/Items";
import ErrorPage from "./ErrorBoundary";
import RootLayout from "./pages/RootLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home/>
            },
            {
                path: "/items",
                element: <Items/>
            }
        ]
    },
    
])

export default router