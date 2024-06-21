import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Index from "../pages/Index/Index";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyAccount from "../pages/MyAccount/MyAccount";
import Error from "../pages/404/Error";
import { PageSendJewelry } from "../pages/FormSendJewelry/PageSendJewelry";
import MyAccountStaff from "../pages/MyAccount/MyAccountStaff";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import RegisterForAuction from "../pages/RegisterForAuction/RegisterForAuction";
import AuctionDetail from "../pages/AuctionDetail/AuctionDetail";
import { AuctionBid } from "../pages/Bid/AuctionBid";
import AuctionList from "../pages/AuctionList/AuctionList";
import { AuctionRegistrationGuard } from "./AuctionRegistrationGuard";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ForgotPassword/ResetPassord";

export default function RouterCom() {
  return (
    <Routes>
      {/* ///// */}
      <Route path="/" element={<Index />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/activation/:token" element={<Login />} />
      <Route path="/danh-sach-dau-gia" element={<AuctionList />} />
      <Route path="/danh-sach-dau-gia/state/:state" element={<AuctionList />} />
      <Route
        path="/danh-sach-dau-gia/category/:cateId"
        element={<AuctionList />}
      />
      <Route
        path="/danh-sach-dau-gia/name/:txtSearch"
        element={<AuctionList />}
      />
      <Route
        path="/danh-sach-dau-gia/date/:fromDateFilter/:toDateFilter"
        element={<AuctionList />}
      />
      <Route path="/tai-san-dau-gia/:id" element={<AuctionDetail />} />
      {/* ///// */}

      {/* ///        CHƯA CÓ TOKEN THÌ VÀO ĐC       // */}
      <Route element={<GuestRoute />}>
        <Route path="/dang-nhap" element={<Login />} />
      </Route>
      <Route element={<GuestRoute />}>
        <Route path="/reset-thanh-cong/:token" element={<Login />} />
      </Route>
      <Route element={<GuestRoute />}>
        {/* <Route path="/dang-ky" element={<Register />} /> */}
      </Route>
      <Route element={<GuestRoute />}>
        <Route path="/reset-mat-khau/:token" element={<ResetPassword />} />
      </Route>
      <Route element={<GuestRoute />}>
        <Route path="/quen-mat-khau" element={<ForgotPassword />} />
      </Route>
      {/* ///// */}

      {/* ///         ĐĂNG KÍ PHIÊN THÌ ĐC VÀO      // */}
      <Route
        path="/dau-gia-san-pham/:id"
        element={<AuctionRegistrationGuard element={<AuctionBid />} />}
      />
      {/* ///// */}

      {/* //          PHÂN QUYỀN                   /// */}
      <Route
        element={
          <ProtectedRoute roles={["MEMBER", "STAFF", "MANAGER", "ADMIN"]} />
        }
      >
        <Route path="/form-send-jewerly" element={<PageSendJewelry />} />
      </Route>
      <Route element={<ProtectedRoute roles={["MEMBER", "ADMIN"]} />}>
        <Route path="/dang-ki-dau-gia/:id" element={<RegisterForAuction />} />
      </Route>
      <Route
        element={<ProtectedRoute roles={["MEMBER", "MANAGER", "ADMIN"]} />}
      >
        <Route path="/thong-tin-ca-nhan" element={<MyAccount />} />
      </Route>
      <Route element={<ProtectedRoute roles={["STAFF", "ADMIN"]} />}>
        <Route path="/my-account-staff" element={<MyAccountStaff />} />
      </Route>
      {/* ///// */}

      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
