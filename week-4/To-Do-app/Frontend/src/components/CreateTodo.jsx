import { useState } from "react";

export function CreateTodo() {
    // react-query
    const [title, setTitle] = useState(""); // Tiltle set as a blank initial state.
    const [description, setDescription] = useState(""); // Description s et to be a black iinitial state.

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            setTitle(e.target.value); // Function to recieve title as user input.
        }}></input> <br />
    
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            setDescription(e.target.value); // Function to recieve description as user input.
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/home", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function() {
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}


// Depricated code block without user-input target function....

// export function CreateTodo(){
//     return <div>
//         <input type="text" placeholder="Title" ></input>
//         <br />
//         <input type="text" placeholder="Description" ></input>
//         <br />


//         <button onClick={()=>{
//                 fetch("http://localhost:3000/todo", {
//                     method: "POST",
//                     body: JSON.stringify({
//                         title: title,
//                         description: description
//                     }),
//                     headers: {
//                         "Content-type": "application/json"
//                     }
//                 })
//                     .then(async function(res) {
//                         const json = await res.json();
//                         alert("Todo added");
//                     })
//         }}>Add To-Do</button>
//     </div>
// }

// End of code block.....
