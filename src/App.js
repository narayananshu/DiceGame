import { useState } from 'react';
import './App.css';
import HomePage from './Component/HomePage';
import Pagetwo from './Component/Page2/Pagetwo';

function App() {
  var [isGame,setIsGame]= useState(false);
  const game=()=>{
console.log("hello")
setIsGame((prev)=>!prev)
  }
  return (
  

    <div className="App">
  { isGame?<Pagetwo/>:<HomePage toggle={game}/>}
    </div>
  );
}

export default App;
