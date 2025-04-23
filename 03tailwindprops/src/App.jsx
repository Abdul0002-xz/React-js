// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  // let myObj = {
  //   username : "Abdul Fater",
  //   age : 21
  // }

  // let newArr = [1,2,3,4];
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Test</h1>
      <Cards username= "Akshay"/> <br />
      <Cards username = "Abdul" />
    </>
  )
}

export default App
