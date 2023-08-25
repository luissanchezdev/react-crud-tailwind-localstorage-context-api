import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import ListaPelicula from './components/ListaPelicula.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom'
import AgregarPelicula from './components/AgregarPelicula.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/peliculas',
        element: <ListaPelicula />
      },
      {
        path: '/peliculas/add',
        element: <AgregarPelicula />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router router={ router } >
      <App />
    </Router>
  </React.StrictMode>,
)
