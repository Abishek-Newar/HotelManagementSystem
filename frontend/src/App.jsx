import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserAuth from "./Pages/User/userAuth"
import Landing from "./Pages/Landing"
import SellerAuth from "./Pages/Owner/SellerAuth"
import SellerDashboard from "./Pages/Owner/SellerDashboard"
import AdminAuth from "./Pages/Admin/AdminAuth"
import SearchPage from "./Pages/User/SearchPage"
import BookHotel from "./Pages/User/BookHotel"
import BookingSuccessful from "./Pages/User/BookingSuccessful"
import Bookings from "./Pages/User/Bookings"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Landing />} />
      <Route path="/auth"  element={<UserAuth />} />
      <Route path="/seller/auth"  element={<SellerAuth />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />}  />
      <Route path="/admin/auth" element={<AdminAuth />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/booknow" element={<BookHotel />} />
      <Route path="/booksucc" element={<BookingSuccessful />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
