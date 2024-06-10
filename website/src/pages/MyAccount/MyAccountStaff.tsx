import { Link } from "react-router-dom";
import { MyAccountDetail } from "./Components/MyAccountDetail";
import useAccount from "../../hooks/useAccount";
import { useEffect, useState } from "react";
import { User } from "../../models/User";
import JewelriesWaitList from "./Components/staff/JewelriesWaitList";
import AssignedAuctionList from "./Components/staff/AssignedAuctionList";
import JewelriesHandOverList from "./Components/staff/JewelriesHandOverList";
import { LogoutModal } from "./Modal/Modal";
import { ChangePassword } from "./Components/staff/ChangePassword";
export default function MyAccountStaff() {
  const token = localStorage.getItem("access_token");
  const {account, setAccount} = useAccount(token);

  const [userState, setUserState] = useState<User | null>(account);

  useEffect(() => {
    setUserState(account);
  }, [account]);
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="active">Tài khoản của tôi</li>
            </ul>
          </div>
        </div>
      </div>

      <main className="page-content">
        <div className="account-page-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <ul
                  className="nav myaccount-tab-trigger"
                  id="account-page-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="account-dashboard-tab"
                      data-bs-toggle="tab"
                      href="#account-details"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      Thông tin tài khoản
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="change-password-tab"
                      data-bs-toggle="tab"
                      href="#change-password"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      Đổi mật khẩu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="account-orders-tab"
                      data-bs-toggle="tab"
                      href="#account-orders"
                      role="tab"
                      aria-controls="account-orders"
                      aria-selected="false"
                    >
                      Danh sách trang sức được gửi tới
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="account-address-tab"
                      data-bs-toggle="tab"
                      href="#account-address"
                      role="tab"
                      aria-controls="account-address"
                      aria-selected="false"
                    >
                      Danh sách trang sức bàn giao
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="account-details-tab"
                      data-bs-toggle="tab"
                      href="#auction-job"
                      role="tab"
                      aria-controls="account-details"
                      aria-selected="false"
                    >
                      Các phiên đấu giá được phân công
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to={""}>
                      <LogoutModal />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div
                  className="tab-content myaccount-tab-content "
                  id="account-page-tab-content"
                >
                  <MyAccountDetail user={userState} setUser={setUserState} />

                  <ChangePassword user={userState} />

                  <JewelriesWaitList user={userState} setUser={setUserState} />

                  <JewelriesHandOverList
                    user={userState}
                    setUser={setUserState}
                  />

                  <AssignedAuctionList
                    user={userState}
                    setUser={setUserState}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
