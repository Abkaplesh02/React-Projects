import { useState } from 'react'
import React from 'react'
import './App.css'
import BrowserTab from './components/BrowserTab'
import { BrowserRouter, createBrowserRouter , NavLink, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import Features from './components/Features'



function App() {
  
  const router=createBrowserRouter(
    [
      {path:'/',
        element:<Home/>
      },
      {path:'/about',
        element:<AboutPage/>
      },
      {path:'/features',
        element:<Features/>
      }
    ]
  )
 
  return (
    <div className='app'>
      <BrowserRouter>
      <div className="browser">
        <div className="tabs">
          <NavLink to='/'>
         <BrowserTab>
         Home
          </BrowserTab>
          </NavLink>
          <NavLink to='/about'>
         <BrowserTab  >
         About
         </BrowserTab>
         </NavLink>
         <NavLink to='/features'>
         <BrowserTab >
         Features 
         </BrowserTab>
         </NavLink>
        </div>

        <div className="viewport">
          <RouterProvider router={router}/>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
