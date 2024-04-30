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

import MyLIst from "./MyLIst";
// import PrivateRoute from "./components/PrivateRoute";
import AddItem from "./components/AddItem";
import AllCraft from "./AllCraft";
import TableView from "./TableView";
import Update from "./components/Update";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./components/Contact";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch(' https://artandcraft-exg1s96rd-sakib-sarkar-emons-projects.vercel.app/homecard')
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader : ({params})=> fetch(` https://artandcraft-exg1s96rd-sakib-sarkar-emons-projects.vercel.app/homecard/${params.id}`)
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/allCraft',
        element: <PrivateRoute>
          <AllCraft></AllCraft>
        </PrivateRoute>,
        
        
      },
      {
        path: '/addCraft',
        element: <PrivateRoute>
          <AddItem></AddItem>
        </PrivateRoute>,
        
      },
      {
        path: '/myList',
        element: <MyLIst></MyLIst>,
        loader : ()=> fetch(' https://artandcraft-exg1s96rd-sakib-sarkar-emons-projects.vercel.app/addItemData')
      },
      {
        path: '/myList/:id',
        element: <TableView></TableView>,
        loader : ({params})=> fetch(` https://artandcraft-exg1s96rd-sakib-sarkar-emons-projects.vercel.app/addItemData/${params.id}`)
      },
      {
        path: '/update/:id',
        element: 
          <Update></Update>
        
      },
      {
        path: '/contact',
        element: 
          <Contact></Contact>
        
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
