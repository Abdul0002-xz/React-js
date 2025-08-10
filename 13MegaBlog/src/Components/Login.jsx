import React from 'react'
import { useState } from 'react'
import AuthService  from '../appwrite/Auth.js'
import {login as authLogin} from '../store/authSlice.js'
import {useForm} from 'react-hook-form'
import {Button , Input , Logo} from './index.js'
import {Link , useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const [error , setError] = useState("");

    const login = async(data)=>{
        setError("");
        try {

          const session =  await AuthService.login(data)

          if(session){
            const userData = await AuthService.getCurrentUser(userData)
            if(userData){
                dispatch(authLogin(userData));
                navigate("/");
            }
          }
            
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default Login
