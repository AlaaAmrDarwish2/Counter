import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import Counter from "./Counter";
import Login from "./login";
import SignUp from "./signup";

const router = createBrowserRouter([
  { path: '/', element: <Login/>},
  { path: '/signup', element: <SignUp/>},
  { path: '/counter', element: <Counter/>},
  

 
  // { path: '*', element: <Error/>}

]
)



function App() {

  return <RouterProvider router={router} />;

}

export default App;
