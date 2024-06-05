import { Route, Routes } from "react-router-dom";
import Index from "../pages/manager/Index/Index";
import RequestProduct from "../pages/manager/RequestProduct/RequestProduct";
import AuctionsList from "../pages/manager/Auctions/AuctionsList";
import CreateAuction from "../pages/manager/Auctions/CreateAuction";
import ViewProducts from "../pages/manager/View/ViewProducts";
import ViewAuctionsList from "../pages/manager/View/ViewAuctionsList";
import StaffList from "../pages/manager/ManagerStaff/StaffList";
const RouterComManager = () => {
  return (
    <>
      <Routes>
        <Route path="/manager" element={<Index />} />
        <Route path="/manager/request" element={<RequestProduct />} />
        <Route path="/manager/auction" element={<AuctionsList />} />
        <Route path="/manager/staffList" element={<StaffList />} />
        <Route path="/manager/account/staff" element={<StaffList />} />
        <Route path="/manager/create-auction" element={<CreateAuction />} />
        <Route path="/manager/view/viewproducts" element={<ViewProducts />} />
        <Route
          path="/manager/view/Viewauctionslist"
          element={<ViewAuctionsList />}
        />
      </Routes>
    </>
  );
};

export default RouterComManager;
