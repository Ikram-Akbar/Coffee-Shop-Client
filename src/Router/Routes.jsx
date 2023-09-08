import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import AddCoffee from "../Pages/AddCoffe/AddCoffee";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "home",
                element: <Home></Home>,  
            },
            {
                path: "addcoffee",
                element: <AddCoffee></AddCoffee>,  
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }
        ]
    },
]);
export default router;