import { Link } from "react-router-dom";
import { ViewJewelryRequestModal, ViewTransactionModal } from "./Modal/Modal"
import useAccount from "../../hooks/useAccount";
import { MyAccountDetail } from "./Components/MyAccountDetail";
import { MyAccountAuctionHistory } from "./Components/MyAccountAuctionHistory";
import { useEffect, useState } from "react";
import { User } from "../../models/User";
export default function MyAccount() {
    const token = localStorage.getItem("token");
    const user = useAccount(token);

    const [userState, setUserState] = useState<User | null>(user);

    useEffect(() => {
        setUserState(user);
    }, [user]);

    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to={'/'} >Home</Link>
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
                                            Thông tin cá nhân
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-orders-tab"
                                            data-bs-toggle="tab"
                                            href="#transaction-history"
                                            role="tab"
                                            aria-controls="account-orders"
                                            aria-selected="false"
                                        >
                                            Lịch sử giao dịch
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-address-tab"
                                            data-bs-toggle="tab"
                                            href="#auction-activity"
                                            role="tab"
                                            aria-controls="account-address"
                                            aria-selected="false"
                                        >
                                            Lịch sử đấu giá
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-details-tab"
                                            data-bs-toggle="tab"
                                            href="#jewelry-request"
                                            role="tab"
                                            aria-controls="account-details"
                                            aria-selected="false"
                                        >
                                            Sản phẩm yêu cầu
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9">
                                <div
                                    className="tab-content myaccount-tab-content"
                                    id="account-page-tab-content"
                                >
                                    <MyAccountDetail user={userState} setUser={setUserState} />
                                    <div
                                        className="tab-pane fade"
                                        id="transaction-history"
                                        role="tabpanel"
                                        aria-labelledby="account-orders-tab"
                                    >
                                        <div className="myaccount-orders">
                                            <h4 className="small-title">
                                                Danh sách các giao dịch của tôi
                                            </h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <th>Mã giao dịch</th>
                                                            <th>Loại giao dịch</th>
                                                            <th>Ngày</th>
                                                            <th>Số tiền</th>
                                                            <th>Trạng thái</th>
                                                            <th>Xem chi tiết</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a
                                                                    className="account-order-id"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    #5364
                                                                </a>
                                                            </td>
                                                            <td>
                                                                Đăng ký phiên
                                                            </td>
                                                            <td>17/01/2024</td>
                                                            <td>
                                                                200,000
                                                            </td>
                                                            <td>
                                                                Đã thanh toán
                                                            </td>
                                                            <td>
                                                                <ViewTransactionModal />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <MyAccountAuctionHistory username={user?.username} />
                                    <div
                                        className="tab-pane fade"
                                        id="jewelry-request"
                                        role="tabpanel"
                                        aria-labelledby="account-address-tab"
                                    >
                                        <div className="myaccount-orders">
                                            <h4 className="small-title">
                                                Danh sách các sản phẩm yêu cầu của tôi
                                            </h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <th>Mã sản phẩm</th>
                                                            <th>Tên sản phẩm</th>
                                                            <th>Ngày yêu cầu</th>
                                                            <th>Phiên đấu giá</th>
                                                            <th>Trạng thái</th>
                                                            <th>Thao tác</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a
                                                                    className="account-order-id"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    SP0001
                                                                </a>
                                                            </td>
                                                            <td>
                                                                Trang sức nữ
                                                            </td>
                                                            <td>17/01/2003</td>
                                                            <td>
                                                                Chưa có
                                                            </td>
                                                            <td>
                                                                Chờ xác nhận
                                                            </td>
                                                            <td>
                                                                <ViewJewelryRequestModal />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
