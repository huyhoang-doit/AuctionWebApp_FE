import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Index from "../pages/Index/Index";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyAccount from "../pages/MyAccount/MyAccount";
import ShopLeftSibar from "../pages/ShopLeftSibar/ShopLeftSibar";
import Error from "../pages/404/Error";
import { PageSendJewelry } from "../pages/FormSendJewelry/PageSendJewelry";
import MyAccountStaff from "../pages/MyAccount/MyAccountStaff";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import RegisterForAuction from "../pages/RegisterForAuction/RegisterForAuction";
import AuctionDetail from "../pages/AuctionDetail/AuctionDetail";

export default function RouterCom() {
    return (
        <Routes>

            <Route path="/about" element={<About />} />
            <Route path="/" element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/activation/:token" element={<Login />} />
            <Route path="/shop-left-sibar" element={<ShopLeftSibar />} />
            <Route path="/shop-left-sibar/state/:state" element={<ShopLeftSibar />} />
            <Route path="/shop-left-sibar/category/:cateId" element={<ShopLeftSibar />} />
            <Route path="/shop-left-sibar/name/:txtSearch" element={<ShopLeftSibar />} />
            <Route path="/shop-left-sibar/date/:fromDateFilter/:toDateFilter" element={<ShopLeftSibar />} />
            <Route path="/single-auction/:id" element={<AuctionDetail />} />


            {/* ///// */}
            <Route element={<GuestRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<GuestRoute />}>
                <Route path="/register" element={<Register />} />
            </Route>
            {/* ///// */}

            {/* ///// */}
            <Route element={<ProtectedRoute roles={['MEMBER', 'STAFF', 'MANAGER', 'ADMIN']} />}>
                <Route path="/form-send-jewerly" element={<PageSendJewelry />} />
            </Route>
            <Route element={<ProtectedRoute roles={['MEMBER', 'ADMIN']} />}>
                <Route path="/dang-ki-dau-gia/:id" element={<RegisterForAuction />} />
            </Route>
            <Route element={<ProtectedRoute roles={['MEMBER', 'MANAGER', 'ADMIN']} />}>
                <Route path="/my-account" element={<MyAccount />} />
            </Route>
            <Route element={<ProtectedRoute roles={['STAFF', 'ADMIN']} />}>
                <Route path="/my-account-staff" element={<MyAccountStaff />} />
            </Route>
            {/* ///// */}

            <Route path="/*" element={<Error />} />
        </Routes>
    );
}
