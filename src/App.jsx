import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home';
import Not_Found from './Pages/Not_Found';
import Login from './Pages/Login';
import Sign_up from './Pages/Sign_up';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "*",
    element: <Not_Found/>,
  },
  {
    path: "/signup",
    element: <Sign_up/>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App