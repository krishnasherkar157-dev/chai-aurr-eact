import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/components/Home/Home'
import About from './assets/components/About/About.jsx'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [   // ✅ fixed
      {
        path: '',
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
