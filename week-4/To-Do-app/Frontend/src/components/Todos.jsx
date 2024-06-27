/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

// import { useState } from "react"
// import axios from 'axios'



export function Todos({todos}) {

// const [completed , setCompleted] = useState(false);

// async function updateTask(){

// }


// const handleToggleCompleted = async () => {
//     try {
//     await axios.put('http://localhost:3000/completed', { id: todos._id });
//     setCompleted(!completed);
//     } catch (error) {
//     console.error('Error toggling completed:', error);
//     }
// };

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <h3>{todo._id}</h3>
                <button onClick={async()=>{
                        await fetch("http://localhost:3000/completed", {  // Fetches To-Do list Stored in the Backend DB.
                            method: "PUT",
                            body: JSON.stringify({
                                id: todo._id                 
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(async function() {
                            alert("Todo updated");
                        })
                }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

// Hard-Coded To-Do list Block 

/* todos = [
{
    title: "go to gym",
    description: "go to gym",
}]
*/


// Deprecated code toggle for Completed / MArk as completed removed

