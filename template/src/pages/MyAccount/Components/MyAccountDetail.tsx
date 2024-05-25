import { User } from "../../../models/User";

interface MyAccountDetailProps {
    user: User | null;
}

export const MyAccountDetail : React.FC<MyAccountDetailProps> = (props) => {
    return (
        <div
            className="tab-pane fade active"
            id="account-details"
            role="tabpanel"
            aria-labelledby="account-details-tab"
        >
            <div className="">
                <h4 className="small-title mb-4">
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
                                        <img className="rounded-circle border border-4" src={props.user?.avatar} alt="" />
                                    </div>
                                    <div className="col-md-8 profile-header-info">
                                        <h4 className="fw-bold m-t-sm">{props.user?.fullName}</h4>
                                        <button type="button" className="btn btn-xs btn-primary mb-3"
                                            style={{ backgroundColor: "black", border: "none" }}>Đổi ảnh đại diện
                                        </button>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label>Số CCCD</label>
                                        <input
                                            className="mb-0"
                                            type="text"
                                            placeholder="Nhập số căn cước"
                                            readOnly
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            value={props.user?.cccd}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Năm sinh</label>
                                        <input
                                            className="mb-0"
                                            type="text"
                                            placeholder="Nhập năm sinh"
                                            readOnly
                                            value={props.user?.yob}
                                        />

                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên tài khoản</label>
                                        <input className="mb-0"
                                            type="text"
                                            placeholder="Nhập username của bạn"
                                            readOnly
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            value={props.user?.username}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Email</label>
                                        <input className="mb-0"
                                            type="email"
                                            placeholder="Nhập Email của bạn"
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            readOnly
                                            value={props.user?.email}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Họ</label>
                                        <input className="mb-0"
                                            type="text"
                                            placeholder="Nhập họ của bạn"
                                            readOnly
                                            value={props.user?.firstName}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên</label>
                                        <input
                                            type="text"
                                            className="mb-0"
                                            placeholder="Nhập tên của bạn"
                                            readOnly
                                            value={props.user?.lastName}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Địa chỉ</label>
                                        <input
                                            type="text"
                                            placeholder="Nhập địa chỉ của bạn"
                                            readOnly
                                            value={props.user?.address}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Tỉnh</label>
                                        <input
                                            type="text"
                                            placeholder="Nhập tỉnh"
                                            readOnly
                                            value={props.user?.province}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Thành phố</label>
                                        <input
                                            type="text"
                                            placeholder="Nhập thành phố"
                                            readOnly
                                            value={props.user?.city}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            placeholder="Nhập số điện thoại của bạn"
                                            readOnly
                                            value={props.user?.phone}
                                        />

                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-xs btn-primary mb-3 mt-2"
                                            style={{ backgroundColor: "black", border: "none" }}>Chỉnh sửa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
