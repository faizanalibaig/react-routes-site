import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home1 from './components/Home1/Home.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import About from './components/ABout/About.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//          path:'',
//          element:<Home1/>
//       },{
//         path:'about',
//          element:<About/>
//       },{
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
       <Route path='' element={<Home1/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:id' element={<User/>}/>
       <Route path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
