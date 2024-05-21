import { Route, Routes } from 'react-router-dom'
import Index from '../pages/manager/Index/Index'
import RequestProduct from '../pages/manager/RequestProduct/RequestProduct'
import AuctionsList from '../pages/manager/Auctions/AuctionsList'
const RouterComManager = () => {
  return (
    <>
      <Routes>
        <Route path="/manager" element={<Index />} />
        <Route path="/manager/request" element={<RequestProduct />} />
        <Route path="/manager/auction" element={<AuctionsList />} />
      </Routes>
    </>
  )
}

export default RouterComManager
