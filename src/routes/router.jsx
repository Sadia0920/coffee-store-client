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
            loader: () => fetch('http://localhost:3000/coffee'),
        },
        {
            path: "/about",
            element: <About></About>,
        },
        {
            path: "/users",
            element: <Users></Users>,
            loader: () => fetch('http://localhost:3000/users')
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
          loader: ({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
        },
      ]
    },
  ]);

export default router;