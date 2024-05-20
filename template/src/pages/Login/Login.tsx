import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleToRegister = () => {
        navigate("/register");
    };
    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Trang chủ</a>
                            </li>
                            <li className="active">Đăng nhập </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Begin Umino's Login Register Area   */}
            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                            {/* <!-- Login Form s--> */}
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Đăng nhập</h4>

                                    <div className="row mb-4">
                                        <div className="col-md-12 col-12">
                                            <label>Tên đăng nhập/ Email</label>
                                            <input
                                                type="email"
                                                placeholder="Nhập tên đăng nhập/ Email"
                                            />
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Mật khẩu</label>
                                            <input
                                                type="password"
                                                placeholder="Nhập mật khẩu"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box">
                                                <input
                                                    type="checkbox"
                                                    id="remember_me"
                                                />
                                                <label htmlFor="remember_me">
                                                    Nhớ mật khẩu
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="forgotton-password_info">
                                                <a href="#">
                                                    {" "}
                                                    Quên mật khẩu?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="umino-login_btn">
                                                Đăng nhập
                                            </button>
                                        </div>
                                    </div>

                                    <a onClick={() => handleToRegister()}>
                                        Bạn chưa có tài khoản ?
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
