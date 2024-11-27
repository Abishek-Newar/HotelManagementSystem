import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserAuth from "./Pages/userAuth"
import Landing from "./Pages/Landing"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing />} />
      <Route path="/auth"  element={<UserAuth />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
