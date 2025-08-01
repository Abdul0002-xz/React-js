import { useEffect, useState } from "react";
import { logout , login} from "./store/authSlice";
import AuthService from "./appwrite/Auth";
import {useDispatch} from 'react-redux'
import "./App.css";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";


function App() {

  const [loading , setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },)
  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between  bg-gray-400 ">
      <div className="w-full block">
        <Header/>
        <main>
        TODO :  <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App;
