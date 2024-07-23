import './App.css'
import './index.css'
import Assignment1 from './components/Assignment1.jsx'
import Assignment2 from './components/Assignment2.jsx'
import Assignment3 from './components/Assignment3.jsx'
import Assignment4 from './components/Assignment4.jsx'
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
        path = '/assignment - 1' 
        element = {<Assignment1/>}
        />
        <Route 
        path = '/assignment - 2' 
        element = {<Assignment2/>}
        />
        <Route 
        path = 'assignment - 3' 
        element = {<Assignment3/>}
        />
        <Route 
        path = 'assignment - 4' 
        element = {<Assignment4/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
