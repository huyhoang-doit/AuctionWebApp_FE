import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index/Index'
import RequestProduct from '../pages/manager/RequestProduct/RequestProduct'
import AuctionsList from '../pages/manager/Auctions/AuctionsList'
import CreateAuction from '../pages/manager/Auctions/CreateAuction'
import ViewProducts from '../pages/manager/View/ViewProducts';
import ViewAuctionsList from '../pages/manager/View/ViewAuctionsList';
const RouterComManager = () => {
  return (
    <>
      <Routes>
        <Route path="/manager" element={<Index />} />
        <Route path="/manager/request" element={<RequestProduct />} />
        <Route path="/manager/auction" element={<AuctionsList />} />
        <Route path="/manager/create-auction" element={<CreateAuction />} />
        <Route path="/manager/view/viewproducts" element={<ViewProducts />} />
        <Route path="/manager/view/Viewauctionslist" element={<ViewAuctionsList />} />
      </Routes>
    </>
  )
}

export default RouterComManager
