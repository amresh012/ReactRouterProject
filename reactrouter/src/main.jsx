import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Transaction from './component/Transaction/Transaction'
import Data  from './component/Data/Data.jsx'

// const router = createBrowserRouter([{
//   path :"/",
//   element:<App/>,
//   children :[
//     {path:"",
//     element:<Home/>
//   },
//   {path:"about",
//   element:<About/>
// },
// {path:"contact",
// element:<Contact/>
// },
// {path:"github",
// element:<Github/>
// }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="transaction" element={<Transaction/>}/>
      <Route 
       path="data"
       element={<Data/>}/>
      {/* <Route 
      loader={githubInfoLoader}
      path="github"
       element={<Github/>}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
