import Signup from "./components/Signup"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App