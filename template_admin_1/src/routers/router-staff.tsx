import { Route, Routes } from "react-router-dom"
import Index from "../pages/staff/Index/Index"
import JewelrysList from "../pages/staff/Jewelrys/JewelrysList"

const RouterComStaff = () => {
  return (
    <Routes>
      <Route path="/staff" element={<Index />} />
      <Route path="/staff/jewelry" element={<JewelrysList />} />
      <Route path="/staff/send-request" element={<JewelrysList />} />
      <Route path="/staff/handover" element={<JewelrysList />} />
    </Routes>
  )
}

export default RouterComStaff
