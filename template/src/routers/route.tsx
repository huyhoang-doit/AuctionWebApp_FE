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
import SingleProductSale from "../pages/SingleProductSale/SingleProductSale";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export default function RouterCom() {
    return (
        <>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/index" element={<Index />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/shop-left-sibar" element={<ShopLeftSibar />} />
                <Route
                    path="/single-product-sale"
                    element={<SingleProductSale />}
                />
                <Route path="/single-product" element={<SingleProduct />} />
            </Routes>
        </>
    );
}
