import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../api/AuthenticationAPI';
import { isConfirmPasswordWrong, isPasswordWrongFormat } from '../../utils/checkRegister';

const ResetPassword: React.FC = () => {
    const [request, setRequest] = useState({
        token: "",
        password: "",
        confirmPassword: "",
    });
    const [notification, setNotification] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();
    const [newPasswordError, setNewPasswordError] = useState("");
    const [newCfPasswordError, setCfNewPasswordError] = useState("");

    const handleResetPassword = async () => {
        if (isPasswordWrongFormat(request.password)) {
            setNewPasswordError("Mật khẩu phải có ít nhất 8 ký tự và 1 ký tự đặc biệt.");
            return;
        }
        if (isConfirmPasswordWrong(request.password, request.confirmPassword)) {
            setCfNewPasswordError("Mật khẩu xác nhận không trùng khớp.");
            return;
        }
        if (token) {
            const success = await resetPassword(request.password, token);
            if (success) {
                setSuccess(true);
                setNotification('Đổi mật khẩu thành công vui lòng đăng nhập lại');
                navigate('/reset-thanh-cong/reset-success');
            } else {
                setError('Đã xảy ra lỗi trong quá trình đổi mật khẩu');
            }
        }
    }

    const handleChange = (key: keyof typeof request) => (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let error = "";

        if (key === "password") {
            error = validatePassword(value);
            setNewPasswordError(error);
        } else if (key === "confirmPassword") {
            error = validateConfirmPassword(value, request.password);
            setCfNewPasswordError(error);
        }

        setRequest((prevValue) => ({ ...prevValue, [key]: value }));
    };

    const validatePassword = (value: string): string => {
        return isPasswordWrongFormat(value)
            ? "Mật khẩu phải có ít nhất 8 ký tự và 1 ký tự đặc biệt."
            : "";
    };

    const validateConfirmPassword = (value: string, newPassword: string): string => {
        return value !== newPassword
            ? "Mật khẩu xác nhận không trùng khớp."
            : "";
    };

    useEffect(() => {
        if (token) {
            setNotification('Vui lòng nhập mật khẩu mới và xác nhận mật khẩu mới');
        } else {
            navigate('/quen-mat-khau');
        }
    }, [token, navigate])

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
                                    <h4 className="login-title">Đổi mật mật khẩu</h4>
                                    {notification && <h5 className="fw-bold" style={{ color: "green" }}>{notification}</h5>}
                                    <div className="row mb-4">
                                        <div className="col-md-12 col-12">
                                            <label>Nhập mật khẩu</label>
                                            <input
                                                className="mb-0"
                                                type="password"
                                                value={request.password}
                                                onChange={handleChange('password')}
                                                placeholder="Nhập mật khẩu mới"
                                            />
                                        </div>
                                        {newPasswordError && <span className="text-danger fw-bold">{newPasswordError}</span>}
                                        <div className="col-md-12 col-12 mt-4">
                                            <label>Xác nhận mật khẩu mới</label>
                                            <input
                                                className="mb-0"
                                                type="password"
                                                value={request.confirmPassword}
                                                onChange={handleChange('confirmPassword')}
                                                placeholder="Xác nhận mật khẩu mới"
                                            />
                                        </div>
                                        {newCfPasswordError && <span className="text-danger fw-bold">{newCfPasswordError}</span>}
                                        <div className="col-md-12">
                                            <button type="button" className="login_btn" onClick={handleResetPassword}>
                                                Gửi
                                            </button>
                                            {error && <span className="text-danger fw-bold">{error}</span>}
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
};

export default ResetPassword;