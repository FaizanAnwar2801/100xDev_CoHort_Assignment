import './App.css'
import './index.css'
import Assignment1 from './components/Assignment1.jsx'
import Assignment2 from './components/Assignment2.jsx'
import Landing from './components/Landing.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        path = '/' 
        element = {<Landing/>}
        />
        <Route 
        path = '/assignment1' 
        element = {<Assignment1/>}
        />
        <Route 
        path = '/assignment2' 
        element = {<Assignment2/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
