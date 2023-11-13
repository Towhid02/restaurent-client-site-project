import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Menu from "./Pages/Menu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            // loader: () => fetch('https://localhost:5000/menu'),
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
          path: "/menu",
          element:<Menu></Menu>,
          loader: () => fetch('http://localhost:5000/menu'),
        }
      ]
    },
  ]);

export default router;