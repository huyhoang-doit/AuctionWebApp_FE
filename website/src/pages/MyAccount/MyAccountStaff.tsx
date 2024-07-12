import { Link } from "react-router-dom";
import { MyAccountDetail } from "./Components/MyAccountDetail";
import useAccount from "../../hooks/useAccount";
import { useEffect, useState } from "react";
import { User } from "../../models/User";
import AssignedAuctionList from "./Components/staff/AssignedAuctionList";
import { LogoutModal } from "./Modal/Modal";
import { ChangePassword } from "./Components/staff/ChangePassword";
import { useTranslation } from "react-i18next";
import AssetValuation from "./Components/staff/AssetValuation";
import ReceiveAndHandover from "./Components/staff/ReceiveAndHandover";
export default function MyAccountStaff() {
  const token = localStorage.getItem("access_token");
  const { account, setAccount } = useAccount(token);

  const [userState, setUserState] = useState<User | null>(account);
  const [listNumber, setListNumber] = useState<number>(0);

  const { t } = useTranslation(["MyAccountStaff"]);

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
              <li className="active">{t("MyAccount.ThongTinTaiKhoan")}</li>
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
                  <li className="nav-item"
                    onClick={() => {
                      setListNumber(1);
                    }}>
                    <a
                      className="nav-link active"
                      id="account-dashboard-tab"
                      data-bs-toggle="tab"
                      href="#account-details"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      {t("MyAccount.ThongTinTaiKhoan")}
                    </a>
                  </li>
                  <li className="nav-item"
                    onClick={() => {
                      setListNumber(2);
                    }}>
                    <a
                      className="nav-link"
                      id="change-password-tab"
                      data-bs-toggle="tab"
                      href="#change-password"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      {t("MyAccount.DoiMatKhau")}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(3);
                    }}
                  >
                    <a
                      className="nav-link"
                      id="account-orders-tab"
                      data-bs-toggle="tab"
                      href="#asset-valuation"
                      role="tab"
                      aria-controls="account-orders"
                      aria-selected="false"
                    >
                      {t("MyAccount.DinhGiaTaiSan")}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(4);
                    }}
                  >
                    <a
                      className="nav-link"
                      id="account-details-tab"
                      data-bs-toggle="tab"
                      href="#receive-handover"
                      role="tab"
                      aria-controls="account-details"
                      aria-selected="false"
                    >
                      {t("MyAccount.TiepNhanVaBanGiao")}
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => {
                    setListNumber(5);
                  }}>
                    <a
                      className="nav-link"
                      id="account-details-tab"
                      data-bs-toggle="tab"
                      href="#auction-job"
                      role="tab"
                      aria-controls="account-details"
                      aria-selected="false"
                    >
                      {t("MyAccount.CacPhienDuocPhanCong")}
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
                  <MyAccountDetail
                    isAfterPay={false}
                    user={userState}
                    setUser={setUserState}
                  />
                  <ChangePassword user={userState} />
                  <AssetValuation
                    user={userState}
                    setUser={setUserState}
                    listNumber={listNumber}
                    setListNumber={setListNumber}
                  />
                  <ReceiveAndHandover
                    user={userState}
                    listNumber={listNumber}
                    setListNumber={setListNumber}
                  />
                  <AssignedAuctionList
                    user={userState}
                    setUser={setUserState}
                    listNumber={listNumber}
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
