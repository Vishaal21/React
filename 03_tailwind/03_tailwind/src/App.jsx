import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  const obj = {username : "vishal" , age : "23" }
  return (
    <>
      {/* <h1 className='bg-slate-800'>Hello</h1> */}
      <Card  username="vishal" bttnText="click Me"/>
       <Card username="vishali" bttnText="Dont click Me"/>
      <Card username= "vishadfldhl"/> 
    </>
  )
}

export default App
