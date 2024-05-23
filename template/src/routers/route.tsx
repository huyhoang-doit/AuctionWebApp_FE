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
import { Privacy_Policy } from "../pages/Privacy-Policy/Privacy-Policy";
import AuctionDetail from "../pages/AuctionDetail/AuctionDetail";
import { PageSendJewelry } from "../pages/FormSendJewelry/PageSendJewelry";

export default function RouterCom() {
    return (
        <>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Index />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/privacy_policy" element={<Privacy_Policy />} />
                <Route path="/form-send-jewerly" element={<PageSendJewelry />} />
                <Route path="/shop-left-sibar" element={<ShopLeftSibar />} />
                <Route path="/shop-left-sibar/state/:state" element={<ShopLeftSibar />} />
                <Route path="/shop-left-sibar/category/:cateId" element={<ShopLeftSibar />} />
                <Route path="/shop-left-sibar/date/:fromDateFilter/:toDateFilter" element={<ShopLeftSibar />} />
                <Route
                    path="/single-auction/:id"
                    element={<AuctionDetail />}
                />
                <Route path="/*" element={<Error />} />
            </Routes>
        </>
    );
}
