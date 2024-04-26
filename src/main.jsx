import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import './index.css'
import Layout from './Layout';
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import GitHub , {githubInfoLoader} from './components/GitHub/GitHub';


// first way u can also use this 
// const router = createBrowserRouter([
//   {
//     'path' : '/',
//      element : <Layout />,
//      children : [
//       {
//         'path' : '',
//         element : <Home />
//       },
//       {
//         path: 'about',
//         element : <About />
//       },
//       {
//         'path' : 'contact',
//         element : <Contact />
//       }
//      ]
//   }

// ])

// second way you can also this easy way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element = {<GitHub />} />
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
