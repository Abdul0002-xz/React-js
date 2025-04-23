import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5;
  let [counter , setCounter] =  useState(0);

  

  const addValue = ()=>{
    // console.log("clicked" , counter);
    // counter = counter + 1

    // if (counter >= 20) {
    //   return; 
    // }
    
    // setCounter(counter + 1 );
    // setCounter(counter + 1 );
    // setCounter(counter + 1 );
    // setCounter(counter + 1 );

    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );     //This is an interview question
    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );
    
  }

  const RemoveValue = ()=>{

    if (counter <= 0) {
      return; 
    }

    setCounter(counter - 1);
  }

  return (
    <>
     
     <h1>React Project</h1>
     <h2>Counter Value : {counter} </h2>
     <button onClick={addValue}>Add Value  </button>
     <br />
     <button onClick={RemoveValue}>Remove value </button>
      
    </>
  )
}

export default App
