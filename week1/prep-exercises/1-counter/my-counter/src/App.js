
import { useState } from 'react';
import './App.css';



function App() {
  const [count, setCount] = useState(0);
 
  const addOne = () => {
    let feedback=count;
        setCount(feedback + 1)
 }
 
  const minusOne = () => {
    let feedback=count;
    if (feedback <= 0) {
      alert("Value can't be lower than 0!");
     
      return;
    } else
    setCount(feedback - 1)
 }
 const clearMe = () => {
       setCount(0);
 }
 return (
  <div className='App'>
    Counter
    <div className='counter'>
      {count}
      
    </div>
    <div className='pLocation'>
        <p>{count> 10 ? "It's higher than 10!":"Keep counting..."}</p>
         </div>
         
    <div className="buttons">
      <button 
        onClick={addOne}>Add 1!</button>
        <button id="minus"
        onClick={minusOne}>Minus 1!</button>
        <button 
        onClick={clearMe}>clear Me</button>
          </div>
           
  </div>
)
}


export default App;
