import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleToLogin = () => {
        navigate("/login");
    };
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Trang chủ</a>
                            </li>
                            <li className="active"> Đăng kí tài khoản</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Đăng kí tài khoản</h4>
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
                                        <div className="col-md-6">
                                            <label>Email</label>
                                            <input
                                                type="Email"
                                                placeholder="Nhập Email của bạn"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập số điện thoại của bạn"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Địa chỉ</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập địa chỉ của bạn"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Tỉnh</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập tỉnh"
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Thành phố</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập thành phố"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Năm sinh</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập năm sinh"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Số CCCD</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập số căn cước"
                                            />
                                        </div>
                                        <div className="col-md-12">
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
                                            <button className="umino-register_btn">
                                                Đăng kí
                                            </button>
                                        </div>
                                    </div>

                                    <a onClick={() => handleToLogin()}>
                                    Bạn đã có tài khoản?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
