import React, { useEffect, useState } from "react";


function App() {

  const [hand, setHand] = useState(window.innerHeight)

  const handleresize = () => {
    setHand(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleresize)
    console.log("innerup");
    return () => {
      window.removeEventListener('resize',handleresize)
    }

})
console.log("outside");
  return (
    <div>
      <h1>Hi</h1>
      <h1>{ hand}</h1>
    </div>
  )
}

export default App;
