import { Link } from "react-router-dom";
import { JewelryModal, JewelryHandOverModal, AssignAuctionModal, DeleteJewelryModal } from "./Modal/Modal"
export default function MyAccountStaff() {
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
                                  <label>Username</label>
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
                                <div className="col-md-12 mt-3">
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
                                </div>
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
                    id="account-orders"
                    role="tabpanel"
                    aria-labelledby="account-orders-tab"
                  >
                    <div className="myaccount-orders">
                      <h4 className="small-title">
                        Danh sách sản phẩm gửi đến
                      </h4>
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                          <tbody>
                            <tr>
                              <th>Mã trang sức</th>
                              <th>Tên trang sức</th>
                              <th>Người gửi</th>
                              <th>Ngày gửi</th>
                              <th>Ảnh</th>
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
                                Trang sức nữ
                              </td>
                              <td>U0001</td>
                              <td>
                                17/01/2024
                              </td>
                              <td>
                                <img style={{ width: '60px', height: '60px' }} src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/mzdic/2021_03_27/Diamond640x480.jpg.webp" />
                              </td>
                              <td>
                                <JewelryModal />
                                <DeleteJewelryModal />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-address"
                    role="tabpanel"
                    aria-labelledby="account-address-tab"
                  >
                    <div className="myaccount-orders">
                      <h4 className="small-title">
                        Danh sách trang sức bàn giao
                      </h4>
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                          <tbody>
                            <tr>
                              <th>Mã trang sức</th>
                              <th>Tên trang sức</th>
                              <th>Phiên đấu</th>
                              <th>Người chiến thắng</th>
                              <th>Ảnh</th>
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
                                Trang sức nữ
                              </td>
                              <td>PĐG0001</td>
                              <td>
                                US0001
                              </td>
                              <td>
                                <img style={{ width: '60px', height: '60px' }} src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/mzdic/2021_03_27/Diamond640x480.jpg.webp" />
                              </td>
                              <td>
                                Chưa thanh toán
                              </td>
                              <td>
                                <JewelryHandOverModal />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="auction-job"
                    role="tabpanel"
                    aria-labelledby="account-address-tab"
                  >
                    <div className="myaccount-orders">
                      <h4 className="small-title">
                        Danh sách phiên được phân công
                      </h4>
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                          <tbody>
                            <tr>
                              <th>Mã phiên</th>
                              <th>Tên phiên</th>
                              <th>Ngày</th>
                              <th>Thời gian</th>
                              <th>Số lượng tham gia</th>
                              <th>Trạng thái</th>
                              <th>Xem chi tiết</th>
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
                                Đấu giá trang sức nữ
                              </td>
                              <td>17/01/2003</td>
                              <td>
                                US0001
                              </td>
                              <td>
                                12
                              </td>
                              <td>
                                WAITING
                              </td>
                              <td>
                                <AssignAuctionModal />
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
