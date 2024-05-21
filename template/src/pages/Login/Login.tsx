import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/UserAPI";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const loginRequest = {
            username,
            password,
        };
        const success = await login(loginRequest, setError);
        if (success) {
            window.location.href = '/';
        }
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
                                                type="text"
                                                value={username}
                                                onChange={handleUsernameChange}
                                                placeholder="Nhập tên đăng nhập/ Email"
                                            />
                                        </div>
                                        <div className="col-12 mb--20">
                                            <label>Mật khẩu</label>
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={handlePasswordChange}
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
                                            <button type="button" className="login_btn" onClick={handleLogin}>
                                                Đăng nhập
                                            </button>
                                            {error && <div className="mt-2" style={{color: "red"}}>{error}</div>}
                                        </div>
                                    </div>

                                    <Link to={"/register"}>
                                        Bạn chưa có tài khoản ?
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
