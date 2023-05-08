
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/Login'
import Inicio from "./components/Inicio"
import Cliente from "./components/CLIENTE"
import Producto from "./components/Producto"
import Proveedor from "./components/Proveedor"

const router = createBrowserRouter([

  {
    path: '/',
    element: <Login/>
  },
  {
    path:'/inicio',
    element:<Inicio/>
  },
  {
    path:'/cliente',
    element:<Cliente/>
  },
  {
    path:'/producto',
    element:<Producto/>
  },
  {
    path:'/proveedor',
    element:<Proveedor/>
  },

])


function App() {


  return (
    
    <div className="App">
        <RouterProvider router={router}/>
    </div> 
    
  )
}

export default App
