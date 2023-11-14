import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Menu from "./Pages/Menu";
import Lunch from "./Components/Lunch";

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
          path: "/breakfast",
          element:<Lunch></Lunch>,
          loader: () => fetch('http://localhost:5000/breakfast'),
          
        },
        {
          path: "/lunch",
          element:<Lunch></Lunch>,
          loader: () => fetch('http://localhost:5000/lunch'),
          
        },
        {
          path: "/dinner",
          element:<Lunch></Lunch>,
          loader: () => fetch('http://localhost:5000/dinner'),
          
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