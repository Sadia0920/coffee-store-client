import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Details from "../pages/Details";
import About from './../pages/About';
import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';
import Users from "../pages/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://coffee-store-server-omega-gilt.vercel.app/coffee'),
        },
        {
            path: "/about",
            element: <About></About>,
        },
        {
            path: "/users",
            element: <Users></Users>,
            loader: () => fetch('https://coffee-store-server-omega-gilt.vercel.app/users')
        },
        {
            path: "/signin",
            element: <SignIn></SignIn>,
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>,
        },
        {
          path: '/addCoffee',
          element: <AddCoffee></AddCoffee>
        },
        {
          path: 'updateCoffee/:id',
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params})=>fetch(`https://coffee-store-server-omega-gilt.vercel.app/coffee/${params.id}`)
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({params})=>fetch(`https://coffee-store-server-omega-gilt.vercel.app/coffee/${params.id}`)
        },
      ]
    },
  ]);

export default router;