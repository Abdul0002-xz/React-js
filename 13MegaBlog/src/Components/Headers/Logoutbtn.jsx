import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/authSlice'
import {AuthService} from '../../appwrite/Auth'

function Logoutbtn() {

    const dispatch = useDispatch();

    const logoutHandler = ()=>{
      AuthService.logout().then(()=>{
        dispatch(logout());
      })
    }
    

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '
    onClick={logoutHandler}
    >
        logout
    </button>
  )
}

export default Logoutbtn
