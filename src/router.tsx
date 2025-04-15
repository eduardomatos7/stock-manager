import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items/Items";
import ErrorPage from "./ErrorBoundary";
import RootLayout from "./pages/RootLayout";
import NewItem from "./components/NewItem";
import ListItem from "./components/ListItem";


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
                element: <Items/>,
                children: [
                    {
                        path: "newItem",
                        element: <NewItem/>
                    },
                    {
                        path: "listItems",
                        element: <ListItem/>
                    }
                ]
            },
        ]
    },
    
])

export default router