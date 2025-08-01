import "./App.css";
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamsComp from "./components/paramsComp";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path : "/",
    element : 
    <div>
      <Navbar />
      <Home />
    </div>
  },

  {
    path : "/about",
    element : 
    <div>
      <Navbar />
      <About />
    </div>
  },

  {
    path : "/dashboard",
    element : 
    <div>
      <Navbar />
      <Dashboard />
    </div>,
    children : [
      {
        path  : "courses",
        element : <Courses/>  
      },
      {
        path : "mock-test",
        element : <MockTest/>
      },
      {
        path : "Reports",
        element: <Reports/>
      },
    ],
  },

  {
    path : '*',
    element : <NotFound/>
  },

  {
    path : "/student/:id",
    element : 
    <div>
      <Navbar />
      <ParamsComp />
    </div>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
