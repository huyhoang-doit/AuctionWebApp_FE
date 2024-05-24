import { Link } from "react-router-dom";
import { ViewJewelryRequestModal, AssignAuctionModal, ViewTransactionModal } from "./Modal/Modal"
export default function MyAccount() {
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
                                            Thông tin tài khoản
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
                                            Hoạt động phiên
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
                                    <div
                                        className="tab-pane fade"
                                        id="account-details"
                                        role="tabpanel"
                                        aria-labelledby="account-details-tab"
                                    >
                                        <div className="">
                                            <h4 className="small-title">
                                                Thông tin tài khoản
                                            </h4>
                                        </div>
                                        <div className="myaccount-details">
                                            <div className="row">

                                                <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">

                                                    <form >

                                                        <div className="login-form">
                                                            <div className="row profile-header-content">
                                                                <div className="col-md-4 profile-header-img" style={{ width: '200px', height: '200px' }}>
                                                                    <img className="rounded-circle border border-4" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                                                                </div>

                                                                <div className="col-md-8 profile-header-info">
                                                                    <h4 className="m-t-sm">Clyde Stanley</h4>
                                                                    <p className="m-b-sm">UXUI + Frontend Developer</p>
                                                                    <a href="#" className="btn btn-xs btn-primary mb-3">Edit Profile</a>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-4">
                                                                <div className="col-md-6 col-12 mb--20">
                                                                    <label>Họ</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Nhập họ của bạn"
                                                                    />
                                                                </div>
                                                                <div className="col-md-6 col-12 mb--20">
                                                                    <label>Tên</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Nhập tên của bạn"
                                                                    />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label>Tên tài khoản</label>
                                                                    <input className="mb-0"
                                                                        type="text"
                                                                        placeholder="Nhập username của bạn"


                                                                    />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label>Email</label>
                                                                    <input className="mb-0"
                                                                        type="email"
                                                                        placeholder="Nhập Email của bạn"


                                                                    />

                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label>Phone</label>
                                                                    <input
                                                                        className="mb-0"
                                                                        type="text"
                                                                        placeholder="Nhập số điện thoại của bạn"


                                                                    />

                                                                </div>
                                                                <div className="col-md-4 mt-4">
                                                                    <label>Địa chỉ</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Nhập địa chỉ của bạn"


                                                                    />
                                                                </div>
                                                                <div className="col-md-4 mt-4">
                                                                    <label>Tỉnh</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Nhập tỉnh"


                                                                    />
                                                                </div>
                                                                <div className="col-md-4 mt-4">
                                                                    <label>Thành phố</label>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Nhập thành phố"


                                                                    />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label>Năm sinh</label>
                                                                    <input
                                                                        className="mb-0"
                                                                        type="text"
                                                                        placeholder="Nhập năm sinh"


                                                                    />

                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label>Số CCCD</label>
                                                                    <input
                                                                        className="mb-0"
                                                                        type="text"
                                                                        placeholder="Nhập số căn cước"


                                                                    />

                                                                </div>
                                                                {/* <div className="col-md-12 mt-3">
                                                                    <label>Mật khẩu</label>
                                                                    <input
                                                                        type="password"
                                                                        placeholder="Nhập mật khẩu của bạn"


                                                                    />

                                                                </div>
                                                                <div className="col-md-12">
                                                                    <label>Xác nhận mật khẩu</label>
                                                                    <input
                                                                        type="password"
                                                                        placeholder="Xác nhận lại mật khẩu của bạn"


                                                                    />
                                                                </div> */}
                                                                <div className="col-12">
                                                                    <button className="umino-register_btn" type="button">
                                                                        Chỉnh sửa
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div
                                        className="tab-pane fade"
                                        id="auction-activity"
                                        role="tabpanel"
                                        aria-labelledby="account-address-tab"
                                    >
                                        <div className="myaccount-orders">
                                            <h4 className="small-title">
                                                Lịch sử tham gia đấu giá
                                            </h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <th>Mã phiên</th>
                                                            <th>Ngày</th>
                                                            <th>Thời gian</th>
                                                            <th>Số tiền</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a
                                                                    className="account-order-id"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    PDG0001
                                                                </a>
                                                            </td>
                                                            <td>
                                                                17/01/2003
                                                            </td>
                                                            <td>21:02:00</td>
                                                            <td>
                                                                500,000
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
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
