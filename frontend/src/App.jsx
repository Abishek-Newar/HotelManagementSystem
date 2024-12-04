import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserAuth from "./Pages/userAuth"
import Landing from "./Pages/Landing"
import AddHotel from "./Pages/addHotel"
import SellerAuth from "./Pages/SellerAuth"
import SellerDashboard from "./Pages/SellerDashboard"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing />} />
      <Route path="/auth"  element={<UserAuth />} />
      <Route path="/seller/auth"  element={<SellerAuth />} />
      <Route path="/seller/add" element={<AddHotel />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
