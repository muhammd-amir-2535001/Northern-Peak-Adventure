import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './components/Github/Github'
import GalleryReact from './components/TabMenu/GalleryReact'
// import login from ./components/LoginPage/login.jsx
import Login from './components/LoginPage/Login'
// import Slideshow from './components/Slider/Slideshow'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//     {
//       path:"",
//       element: <GalleryReact/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     },
//     {
//       path:"github",
//       element:<Github/>
//     }
//     ]
//   }
// ])

const router = createBrowserRouter(
createRoutesFromElements(
  
   <Route path='/' element={<Layout/>}>
     <Route path='GalleryReact' element={<GalleryReact/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<Github/>}/>
    {/* <Route path='Slideshow' element={<Slideshow/>}/>  */}
    {/* <Route path='Login' element={<login />}/> */}
     <Route path='login' element={<Login/>} />  {/* Add the route for the Login component */}
    <Route path='galleryReact' element={<galleryReact/>}/>

    <Route 
           path='github' 
           element={<Github/>}
           loader={githubInfoLoader}
           
    />
   </Route> 
   
 
)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
