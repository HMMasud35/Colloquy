import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Not_Found from './Pages/Not_Found';
import Login from './Pages/Login';
import Sign_up from './Pages/Sign_up';
import Rootlayout from './Component/Rootlayout';
import Deshboard from './Pages/Deshboard';
import Message from './Pages/Message';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Deshboard },
      { path: "message", Component: Message},
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Not_Found />,
  },
  {
    path: "/signup",
    element: <Sign_up />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App