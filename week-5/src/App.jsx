import './App.css'

function App() {

  function LinkedIn(){
    window.open("Your-LinkedIn-url")
  }

  function Twitter(){
    window.open("Your-Twitter-Link")
  }
  
  return (
    <>

      <div className='container'>
        <h1>Faizan Anwar</h1>
        <p>A CS Undergrad & Web Develepor.</p>

        <div>
          <h2>Interests.</h2>
          <p>Full Stack Develpoment</p>
          <p>Open Source</p>
          <p>Chess</p>
          <p></p>
        </div>

        <div>
          <button onClick={LinkedIn}>LinkedIn</button>
          <button onClick={Twitter}>Twitter</button>
        </div>
      </div>
    </>
  )
}

// Add a Picture...

export default App;
