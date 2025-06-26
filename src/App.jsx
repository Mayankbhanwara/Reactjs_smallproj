import { useState } from "react"
 
function App() {
  const [color, setColor] = useState()

  return (
  
    <div className="w-full h-screen duration-200"
    style ={{backgroundColor:color}} 
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl  ">
        <button
        onClick={()=>{setColor("red") }}
        className="outline-non  px-3 py-2 rounded-xl text-white shadow-sm " style={{backgroundColor:"red"}}>Red</button>
         <button
         onClick={()=>{setColor("blue") }}
        className="outline-non  px-3 py-2 rounded-xl text-white shadow-sm " style={{backgroundColor:"Blue"}}>Blue</button>
         <button
         onClick={()=>{setColor("green") }}
        className="outline-non  px-3 py-2 rounded-xl text-white shadow-sm " style={{backgroundColor:"green"}}>Green</button>
         <button
         onClick={()=>{setColor("yellow") }}
        className="outline-non  px-3 py-2 rounded-xl text-white shadow-sm " style={{backgroundColor:"yellow"}}>Yellow</button>
         <button
         onClick={()=>{setColor("orange") }}
        className="outline-non  px-3 py-2 rounded-xl text-white shadow-sm " style={{backgroundColor:"orange"}}>Orange</button>
         <button
         onClick={()=>{setColor("olive") }}
        className="outline-non  px-3 py-2 rounded-xl text-white shadow-sm " style={{backgroundColor:"Olive"}}>Olive</button>
      </div>
    </div>
    </div>
    
  )
}

export default App
