import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx';  

 export function MyApp(){

      return (
            <div>
                  <h1>Custom React App</h1>
            </div>
      )
}

// const ReactElement = {
//       type : 'a',
  
//       props : {
//           href : 'https://google.com',
//           target : '_blank'
//       },
  
//       children : 'Click me to visit Google'
//   }

//   const anotherElement = (
//       <a href="https://google.com" target='_blank'>Visit to Google</a>
//   )

  const ReactElement = React.createElement(
      'a',
      {href: 'https://google.com' , target:'_blank'},
      'click here to google ok na !'
  )


createRoot(document.getElementById('root')).render(
  
      <App/> 
  
)
