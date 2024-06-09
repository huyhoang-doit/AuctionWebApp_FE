import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { forgotPassword, handleActiveUser, login } from "../../api/AuthenticationAPI";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [notification, setNotification] = useState("");
    const { token } = useParams();
    // const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            handleActiveUser(token)
                .then((result) => {
                    if (result) {
                        setNotification("Kích hoạt tài khoản thành công vui lòng đăng nhập!");
                    }
                    else {
                        setError("Kích hoạt tài khoản không thành công");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [token])

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setError("Vui lòng nhập email");
            return;
        }
        const success = await forgotPassword(email, setError);
        if (success) {
            setError("");
            setEmail("");
            setNotification("Vui lòng kiểm tra email để tiến hành đổi mật khẩu");
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
                            <li className="active"> Quên mật khẩu</li>
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
                                    <h4 className="login-title">Quên mật khẩu</h4>
                                    {notification && <h5 className="fw-bold" style={{ color: "green" }}>{notification}</h5>}
                                    <div className="row mb-4">
                                        <div className="col-md-12 col-12">
                                            <label>Nhập Email</label>
                                            <input
                                                className="mb-0"
                                                type="text"
                                                value={email}
                                                onChange={handleEmailChange}
                                                placeholder="Nhập email"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button type="button" className="login_btn" style={{ width: "200px" }} onClick={handleForgotPassword}>
                                                Gửi mã xác nhận
                                            </button>
                                            {error && <div className="mt-2" style={{ color: "red" }}>{error}</div>}
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
