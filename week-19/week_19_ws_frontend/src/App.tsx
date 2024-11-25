import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("")

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connection established');
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setLatestMessage(message.data);
    }

    return () => {
      socket.close()
    }

  }, [])


  if(!socket){
    return <div>
      Connect to socket server.....
    </div>
  }

  return (
    <>
    <div>
      {latestMessage}
    </div>
    <div>
      <input aria-label='Input' onChange={(e)=>{
        setMessage(e.target.value)
      }}></input>
    </div>
    <div>
    <button onClick={()=>{
        socket.send(message)
      }}>send</button>
    </div>
    </>
  )
}

export default App