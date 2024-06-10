import { Route, Routes } from "react-router-dom";
import Index from "../pages/manager/Index/Index";
import RequestWaitlist from "../pages/manager/ManageRequest/components/RequestWaitlist";
import AuctionsList from "../pages/manager/Auctions/AuctionsList";
import CreateAuction from "../pages/manager/Auctions/CreateAuction";
import ViewProducts from "../pages/manager/View/ViewProducts";
import ViewAuctionsList from "../pages/manager/View/ViewAuctionsList";
import PassedJewelriesList from "../pages/manager/PassedJewelry/PassedJewelriesList";

const RouterComManager = () => {
  return (
    <>
      <Routes>
        <Route path="/manager" element={<Index />} />
        <Route path="/manager/yeu-cau-dau-gia" element={<RequestWaitlist />} />
        <Route path="/manager/cac-phien-dau-gia" element={<AuctionsList />} />
        <Route path="/manager/tai-san-dang-cho" element={<PassedJewelriesList />} />
        {/* Hiện thông tin staff */}
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
