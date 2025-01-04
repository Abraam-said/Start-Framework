import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React from 'react'
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Portfolio from "./Components/Portfolio/Portfolio"
import Notfound from "./Components/Notfound/Notfound"


export default function App() {

  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> }
      ]
    }

  ])

  return (
    <RouterProvider router={router} />
  )
}

