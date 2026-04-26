import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Categorias from "./pages/Categorias.jsx";
import { ProductosPorCategoria } from "./pages/ProductbyCategory.jsx";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "categorias",
                element: <Categorias/>
            },
            {
                path: "productos/:categoryId",
                element: <ProductosPorCategoria/>
            }
        ]
    }
])