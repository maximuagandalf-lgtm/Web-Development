import { useState } from 'react'
import NavBar from './components/NavBar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Login from "./components/Login"
import About from './components/About'
import User from './components/User'


function App() {
    const router = createBrowserRouter([
      {
        path:"/",
      element: <><NavBar /><Home /></>
    },
      {
        path:"/login",
        element: <><NavBar /><Login /></>
      },
      {
        path:"/about",
        element:<><NavBar /><About/></>
      },
      {
        path: "/user/:username",
        element: <><NavBar /><User /></>
      }

    ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
