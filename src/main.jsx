import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Packages from './pages/Packages.jsx'
import PackageDetails from './pages/PackageDetails.jsx'
import Visa from './pages/Visa.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'


const router = createBrowserRouter([
{ path: '/', element:<App/>, children:[
{ index:true, element:<Home/> },
{ path:'packages', element:<Packages/> },
{ path:'packages/:slug', element:<PackageDetails/> },
{ path:'dubai-visa', element:<Visa/> },
{ path:'contact', element:<Contact/> },
{ path:'about', element:<About/> },
]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
)