import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvaider from "./AuthProvaider";
import Home from "./components/Home";
import Root from "./components/Root";
import ViewDetails from "./components/ViewDetails";
import Registration from "./Registration";
import LogIn from "./LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch('http://localhost:9000/homecard')
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader : ({params})=> fetch(`http://localhost:9000/homecard/${params.id}`)
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </React.StrictMode>
);
