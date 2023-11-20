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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/categories/'),
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
          element:<AddFood></AddFood>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/category/:category",
          element:<Items></Items> ,
          loader: ({params}) => fetch(`http://localhost:5000/category/${params.category}/`)
             
      },
        {
          path: "/updateFood/:id",
          element:<ModifyFood></ModifyFood>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}/`)
      },
        {
          path: "/signIn",
          element:<SignIn></SignIn>,
        },
        {
          path: "/details/:id",
          element:<Details></Details> ,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}/`)
      },
        {
          path: "/menu",
          element:<Menu></Menu>,
          loader: () => fetch('http://localhost:5000/menu'),
        },
        {
          path: "/addOrder",
          element: <AddOrder></AddOrder>,
      },
      ]
    },
  ]);

export default router;