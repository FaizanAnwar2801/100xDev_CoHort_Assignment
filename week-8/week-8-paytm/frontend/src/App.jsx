import { BrowserRouter, Routes , Route} from "react-router-dom";
import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import Landing from "./pages/Landing";

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>)
}

export default App
