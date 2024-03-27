import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Store="count";
const [count,setCount]=useState(Number(localStorage.getItem("count") ? localStorage.getItem("count"):0 ));

useEffect(() => {
  localStorage.setItem("count",Number(count));
},[count]);

return(
  <div>
    <button onClick={()=> setCount((count) => count +1)}>
      Count is {Number(count)}
    </button>
  </div>
)
 
}
export default App
