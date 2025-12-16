import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  function numchange() {
    setnum(30)
  }

  return (
    <div>
      <h1>This is a {num}</h1>
      <button onClick={numchange}>click</button>
    </div>
  )
}

export default App
