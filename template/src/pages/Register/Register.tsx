import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { isConfirmPasswordWrong, isPasswordWrongFormat, isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from "../../utils/checkRegister";
import { checkEmailExist, checkUsernameExist } from "../../api/UserAPI";
import { useDebouncedCallback } from "use-debounce";
import { register } from "../../api/AuthenticationAPI";

export default function Register() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notification, setNotification] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        yob: "",
        CCCD: "",
        register: "",
    });
    const [registerRequest, setRegisterRequest] = useState({
        id: 0,
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        province: "",
        city: "",
        yob: "",
        CCCD: "",
    });

    const debouncedUsernameChange = useDebouncedCallback(
        async (username: string) => {
            let usernameError = "";
            const exists = await checkUsernameExist(username);
            if (exists) {
                usernameError = "Tên này đã có người dùng!";
            }
            setErrors((prevErrors) => ({ ...prevErrors, username: usernameError }));
        },
        1000
    );

    const debouncedEmailChange = useDebouncedCallback(
        async (email: string) => {
            let emailError = "";
            const exists = await checkEmailExist(email);
            if (exists) {
                emailError = "Email đã tồn tại!";
            }
            setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
        },
        1000
    );

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        setRegisterRequest((preValue) => ({ ...preValue, username }));
        debouncedUsernameChange(username);
    };

    const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setRegisterRequest((preValue) => ({ ...preValue, email }));
        debouncedEmailChange(email);
    };

    const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        let phoneError = "";
        const isWrong = isPhoneNumberWrongFormat(phone);
        if (isWrong) {
            phoneError = "Số điện thoại phải có ít nhất 10 ký tự và bắt đầu từ 0!";
        }
        setErrors((prevErrors) => ({ ...prevErrors, phone: phoneError }));
        setRegisterRequest((preValue) => ({ ...preValue, phone }));
    }

    const onChangeYob = (e: React.ChangeEvent<HTMLInputElement>) => {
        const yob = e.target.value;
        let yobError = "";
        const isWrong = isYearOfBirthWrongFormat(yob);
        if (isWrong) {
            yobError = "Năm sinh không hợp lệ!";
        }
        setErrors((prevErrors) => ({ ...prevErrors, yob: yobError }));
        setRegisterRequest((preValue) => ({ ...preValue, yob }));
    }

    const onChangeCCCD = (e: React.ChangeEvent<HTMLInputElement>) => {
        const CCCD = e.target.value;
        let CCCDError = "";
        const isWrong = isCitizenIdWrongFormat(CCCD);
        if (isWrong) {
            CCCDError = "Số căn cước công dân không hợp lệ!";
        }
        setErrors((prevErrors) => ({ ...prevErrors, CCCD: CCCDError }));
        setRegisterRequest((preValue) => ({ ...preValue, CCCD }));
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        let passwordError = "";
        const isWrongFormat = isPasswordWrongFormat(password);
        if (isWrongFormat) {
            passwordError = "Mật khẩu phải có ít nhất 8 ký tự và 1 ký tự đặc biệt!";
        }
        setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
        setRegisterRequest((preValue) => ({ ...preValue, password }));
    }

    const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = e.target.value;
        let confirmPasswordError = "";
        const isWrong = isConfirmPasswordWrong(registerRequest.password, confirmPassword);
        if (isWrong) {
            confirmPasswordError = "Mất khẩu không khớp!";
        }
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: confirmPasswordError }));
        setConfirmPassword(confirmPassword);
    }

    const onChangeRegisterRequest = (key: keyof typeof registerRequest) => (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterRequest((preValue) => ({ ...preValue, [key]: e.target.value }));
    }

    const clearErrors = () => {
        setErrors({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            yob: "",
            CCCD: ""
        });
    };

    const handleRegisterUser = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check again
        const isUsernameValid = !await checkUsernameExist(registerRequest.username);
        const isEmailValid = !await checkEmailExist(registerRequest.email);
        const isPasswordValid = !isPasswordWrongFormat(registerRequest.password);
        const isConfirmPasswordValid = !isConfirmPasswordWrong(registerRequest.password, confirmPassword);

        if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            console.log(isUsernameValid);
            return;
        }

        const isSuccess = await register(registerRequest);

        console.log(isSuccess);
        if (!isSuccess) {
            setNotification("Xảy ra lỗi trong quá trình đăng kí tài khoản!")
            return;
        }

        // Clear error message
        clearErrors();  
        setNotification("Đăng kí tài khoản thành công, vui lòng kiểm tra email để kích hoạt tài khoản!")
    }

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
                            <form onSubmit={handleRegisterUser}>
                                <div className="login-form">
                                    <h4 className="login-title">Đăng kí tài khoản</h4>
                                    {notification && <h5 className="fw-bold" style={{ color: "green" }}>{notification}</h5>}
                                    {errors.register && <h5 className="fw-bold text-danger">{errors.register}</h5>}
                                    <div className="row mb-4">
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Họ</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nhập họ của bạn"
                                                value={registerRequest.firstName}
                                                onChange={onChangeRegisterRequest("firstName")}
                                            />
                                        </div>
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Tên</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nhập tên của bạn"
                                                value={registerRequest.lastName}
                                                onChange={onChangeRegisterRequest("lastName")}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Username</label>
                                            <input className="mb-0"
                                                type="text"
                                                required
                                                placeholder="Nhập username của bạn"
                                                value={registerRequest.username}
                                                onChange={handleUsernameChange}
                                            />{errors.username && <span className="text-danger">{errors.username}</span>}
                                        </div>
                                        <div className="col-md-4">
                                            <label>Email</label>
                                            <input className="mb-0"
                                                type="email"
                                                required
                                                placeholder="Nhập Email của bạn"
                                                value={registerRequest.email}
                                                onChange={handleEmailChange}
                                            />
                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                        </div>
                                        <div className="col-md-4">
                                            <label>Phone</label>
                                            <input
                                                className="mb-0"
                                                type="text"
                                                required
                                                placeholder="Nhập số điện thoại của bạn"
                                                value={registerRequest.phone}
                                                onChange={onChangePhoneNumber}
                                            />
                                            {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label>Địa chỉ</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nhập địa chỉ của bạn"
                                                value={registerRequest.address}
                                                onChange={onChangeRegisterRequest("address")}
                                            />
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label>Tỉnh</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nhập tỉnh"
                                                value={registerRequest.province}
                                                onChange={onChangeRegisterRequest("province")}
                                            />
                                        </div>
                                        <div className="col-md-4 mt-4">
                                            <label>Thành phố</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nhập thành phố"
                                                value={registerRequest.city}
                                                onChange={onChangeRegisterRequest("city")}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Năm sinh</label>
                                            <input
                                                className="mb-0"
                                                type="text"
                                                required
                                                placeholder="Nhập năm sinh"
                                                value={registerRequest.yob}
                                                onChange={onChangeYob}
                                            />
                                            {errors.yob && <span className="text-danger">{errors.yob}</span>}
                                        </div>
                                        <div className="col-md-6">
                                            <label>Số CCCD</label>
                                            <input
                                                className="mb-0"
                                                type="text"
                                                required
                                                placeholder="Nhập số căn cước"
                                                value={registerRequest.CCCD}
                                                onChange={onChangeCCCD}
                                            />
                                            {errors.CCCD && <span className="text-danger">{errors.CCCD}</span>}
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <label>Mật khẩu</label>
                                            <input
                                                type="password"
                                                required
                                                placeholder="Nhập mật khẩu của bạn"
                                                value={registerRequest.password}
                                                onChange={handlePasswordChange}
                                            />
                                            {errors.password && <span className="text-danger">{errors.password}</span>}
                                        </div>
                                        <div className="col-md-12">
                                            <label>Xác nhận mật khẩu</label>
                                            <input
                                                type="password"
                                                placeholder="Xác nhận lại mật khẩu của bạn"
                                                value={confirmPassword}
                                                onChange={onChangeConfirmPassword}
                                            />
                                        </div>{errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
                                        <div className="col-12">
                                            <button className="umino-register_btn" type="submit">
                                                Đăng kí
                                            </button>
                                        </div>
                                    </div>

                                    <Link to={"/login"}>
                                        Bạn đã có tài khoản?
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
