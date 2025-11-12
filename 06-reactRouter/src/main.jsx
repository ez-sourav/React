
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Login from './Login.jsx';
import { DashBoard } from './DashBoard.jsx';
const router =  createBrowserRouter([
  {
    path : '/',
    element : <App/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/dashboard',
    element:<DashBoard/>,
    action : async({request}) =>{
      const formData = await request.formData();
      const name = formData.get("name"); 
      const email = formData.get("email"); 
      const password = formData.get("password"); 
      const x = {
        name:name,
        email:email,
        password:password,
      }
      console.log(x)
      return x
    }
  }
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
