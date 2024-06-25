import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0) // useState react hooks keeps track of the initial and changing state

  return (
    <>
    <button onClick={() => setCount((count) => count + 1)}> 
          count is {count}
        </button>
    </>
  )
}

export default App
