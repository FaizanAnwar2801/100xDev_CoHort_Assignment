import './App.css'
import Assignment1 from './components/Assignment1.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
      <Route
          path='/assignment1'
          element={<Assignment1 />}
        />
      </Routes>

    </>
  )
}

export default App
