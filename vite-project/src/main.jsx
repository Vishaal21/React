import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
  <h1>I am the best</h1>
    </>
  )
}

// const anotherElement = (
//   <a href="https://goole.com">Visit Google</a>
// )
const random = "helllooooooooooooo"

const reactElement = React.createElement(     //babble injects this element into the dom
  "a",     //name of element
  {href : "https://google.com" , target : "_blank"}, //properties of element
  "click me please",    //text of the element
  random     //the value of evaluated variable comes up here
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // MyApp() //it works but we do not use it due to industry standards
    // anotherElement
    reactElement
    // <App />
  
)
