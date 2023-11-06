import './App.css'
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const Layout = ()=>{
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path: "/product",
        element: <Product/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
