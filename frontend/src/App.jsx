import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App