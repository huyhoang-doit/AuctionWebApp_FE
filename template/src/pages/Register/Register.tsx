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
                                            <label>Tên</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập tên của bạn"
                                            />
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Họ</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập họ của bạn"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Email </label>
                                            <input
                                                type="Email"
                                                placeholder="Nhập Email của bạn"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Mật khẩu</label>
                                            <input
                                                type="password"
                                                placeholder="Nhập mật khẩu của bạn"
                                            />
                                        </div>
                                        <div className="col-md-6">
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
