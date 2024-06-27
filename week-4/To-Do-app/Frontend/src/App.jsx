import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
const [todos, setTodos] = useState([]);
useEffect(()=>{
  setInterval(fetchData, 10000);
  }, [])
  
  
  const fetchData = async () => {
  const response = await fetch("http://localhost:3000/home");
  const json = await response.json();
  setTodos(json.todos)
  }

// (.then syntax block....)
// fetch("http://localhost:3000/home")
// .then(async function (res){
//   const json = await res.json();
//   setTodos(json.todos);
// })
// (Block Ends here...)



  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
