import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Menu from "./Pages/Menu";
import AddFood from "./Pages/AddFood";
import Details from "./Pages/Details";
import ModifyFood from "./Pages/ModifyFood";
import Items from "./Pages/Items";
import Error from "./Pages/Error";
import Blog from "./Pages/Blog";
import AddOrder from "./Pages/AddOrder";
import PrivateRoutes from "./Components/PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://y-orcin-nu.vercel.app/categories/'),
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/signIn",
          element:<SignIn></SignIn>,
        },
        {
          path: "/addFood",
          element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/category/:category",
          element:<PrivateRoutes><Items></Items></PrivateRoutes> ,
          loader: ({params}) => fetch(`https://y-orcin-nu.vercel.app/category/${params.category}/`)
             
      },
        {
          path: "/updateFood/:id",
          element:<PrivateRoutes><ModifyFood></ModifyFood></PrivateRoutes>,
          loader: ({params}) => fetch(`https://y-orcin-nu.vercel.app/menu/${params.id}/`)
      },
        {
          path: "/details/:id",
          element:<PrivateRoutes><Details></Details></PrivateRoutes> ,
          loader: ({params}) => fetch(`https://y-orcin-nu.vercel.app/menu/${params.id}/`)
      },
        {
          path: "/menu",
          element:<Menu></Menu>,
          loader: () => fetch('https://y-orcin-nu.vercel.app/menu'),
        },
        {
          path: "/addOrder",
          element: <PrivateRoutes><AddOrder></AddOrder></PrivateRoutes>,
      },
      ]
    },
  ]);

export default router;