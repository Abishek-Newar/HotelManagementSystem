import Home from "./pages/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App