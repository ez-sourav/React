import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import InputData from './InputData.jsx'
import { DashBoard } from './DashBoard.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/inputdata',
    element:<InputData/>
  },
  {
    path:'/dashboard',
    element:<DashBoard/>,
    action: async({request}) =>{
      const formData = await request.formData() 
      const name = formData.get('name')
      const salary = formData.get('salary')
      const phNumber = formData.get('phNumber')
      console.log(name,salary,phNumber)

      return {
          name,salary,phNumber
      }
      
    }

  }

])
createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
