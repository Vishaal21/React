import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 7;      //here comes the need of hookes to propogate the change in the UI
  // let addValue = ()=>{
  //   counter++
  //   console.log(counter);
  // }

  let [counter, setCounter] = useState(15); //15 will be the default value of the counter . setCounter sets the new value of the counter

  let addValue = () => {
    if(counter <=19){
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      setCounter((prevCounter)=>prevCounter + 1)
      setCounter((prevCounter)=>prevCounter + 1)
      setCounter((prevCounter)=>prevCounter + 1)
      setCounter((prevCounter)=>prevCounter + 1)
    }
  };

  let removeValue = ()=>{
    if(counter>=1){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick ={removeValue}>Remove Value</button>
      <h2>Counter Value : {counter}</h2>
    </>
  );
}

export default App;

/*
The reason for this behavior is to batch and optimize state updates. React wants to be efficient when it comes to rendering and updating the user interface. If it immediately updated the state variable with every setCounter call, it could lead to unnecessary re-renders of the component, which could be inefficient and slow.

React batches multiple state updates together and only performs the actual update once during a single render cycle
*/