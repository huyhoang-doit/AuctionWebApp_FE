import { useNavigate } from "react-router-dom";

export default function Login() {
    // const navigate = useNavigate();

    // const handleToRegister = () => {
    //     navigate("/register");
    // };
    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Trang chủ</a></li>
                            <li className="active">Đăng nhập & Đăng ký</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Begin Umino's Login Register Area   */}
            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6">
                            {/* <!-- Login Form s--> */}
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Đăng nhập</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <label>Địa chỉ email*</label>
                                            <input type="email" placeholder="Địa chỉ Email" />
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Mật khẩu</label>
                                            <input type="password" placeholder="Mật khẩu" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box">
                                                <input type="checkbox" id="remember_me" />
                                                <label >Lưu mật khẩu</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="forgotton-password_info">
                                                <a href="#">Quên mật khẩu?</a>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="umino-login_btn">Đăng nhập</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form action="#">
                                <div className="login-form">
                                    <h4 className="login-title">Đăng ký</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Tên</label>
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Họ</label>
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Địa chỉ Email*</label>
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Mật khẩu</label>
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Xác thực mật khẩu</label>
                                            <input type="password" placeholder="Confirm Password" />
                                        </div>
                                        <div className="col-12">
                                            <button className="umino-register_btn">Đăng ký</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
