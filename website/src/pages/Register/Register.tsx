import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isCitizenIdWrongFormat, isConfirmPasswordWrong, isPasswordWrongFormat, isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from "../../utils/checkRegister";
import { checkEmailExist, checkUsernameExist } from "../../api/UserAPI";
import { useDebouncedCallback } from "use-debounce";
import { register } from "../../api/AuthenticationAPI";
import { getAllBanks } from "../../api/BankAPI";
import { Bank } from "../../models/Bank";

interface City {
    Id: string;
    Name: string;
    Districts: District[];
}

interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}

interface Ward {
    Id: string;
    Name: string;
}

export default function Register() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notification, setNotification] = useState("");
    const [banks, setBanks] = useState<Bank[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedCityId, setSelectedCityId] = useState<string>('');
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrictId, setSelectedDistrictId] = useState<string>('');
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedWardId, setSelectedWardId] = useState<string>('');
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        yob: "",
        CCCD: "",
        register: "",
        bankId: "",
        bankAccountNumber: "",
        bankAccountName: "",
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
        district: "",
        ward: "",
        city: "",
        yob: "",
        CCCD: "",
        bankId: "0",
        bankAccountNumber: "",
        bankAccountName: "",
    });

    // ================================================================

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(response => response.json())
            .then(data => {
                setCities(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        // ================================================================

        getAllBanks()
            .then((response) => {
                setBanks(response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [])

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const cityId = event.target.value;
        setSelectedCityId(cityId);
        setDistricts([]);
        setWards([]);
        setSelectedDistrictId('');
        setSelectedWardId('');
        const selectedCity = cities.find(city => city.Id === cityId);
        
        if (selectedCity) {
            setDistricts(selectedCity.Districts);
            setRegisterRequest((prevValue) => ({ ...prevValue, city: selectedCity.Name }));
        } else {
            setRegisterRequest((prevValue) => ({ ...prevValue, city: '' }));
        }
    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const districtId = event.target.value;
        setSelectedDistrictId(districtId);
        setWards([]);
        setSelectedWardId('');
        const selectedDistrict = districts.find(district => district.Id === districtId);

        if (selectedDistrict) {
            setWards(selectedDistrict.Wards);
            setRegisterRequest((prevValue) => ({ ...prevValue, district: selectedDistrict.Name }));
        } else {
            setRegisterRequest((prevValue) => ({ ...prevValue, district: '' }));
        }
    };

    const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const wardId = event.target.value;
        setSelectedWardId(wardId);

        const selectedWard = wards.find(ward => ward.Id === wardId);
        if (selectedWard) {
            setRegisterRequest((prevValue) => ({ ...prevValue, ward: selectedWard.Name }));
        } else {
            setRegisterRequest((prevValue) => ({ ...prevValue, ward: '' }));
        }
    };

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

    const onChangeSelectRegisterRequest = (key: keyof typeof registerRequest) => (e: ChangeEvent<HTMLSelectElement>) => {
        setRegisterRequest((prevValue) => ({ ...prevValue, [key]: e.target.value }));
    };

    const clearErrors = () => {
        setErrors({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            yob: "",
            CCCD: "",
            register: "",
            bankId: "",
            bankAccountNumber: "",
            bankAccountName: "",
        });
    };

    const handleRegisterUser = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check again
        const isUsernameValid = !await checkUsernameExist(registerRequest.username);
        const isEmailValid = !await checkEmailExist(registerRequest.email);
        const isPasswordValid = !isPasswordWrongFormat(registerRequest.password);
        const isConfirmPasswordValid = !isConfirmPasswordWrong(registerRequest.password, confirmPassword);
        const isPhoneNumberValid = !isPhoneNumberWrongFormat(registerRequest.phone);
        const isYearOfBirthValid = !isYearOfBirthWrongFormat(registerRequest.yob);
        const isCitizenIdValid = !isCitizenIdWrongFormat(registerRequest.CCCD);

        if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid || !isPhoneNumberValid || !isYearOfBirthValid || !isCitizenIdValid) {
            console.log(isUsernameValid);
            return;
        }

        if (registerRequest.bankAccountNumber === '') {
            setErrors((prevErrors) => ({ ...prevErrors, bankAccountNumber: "Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước" }));
            return;
        }
        clearErrors();

        if (registerRequest.bankId === "0") {
            setErrors((prevErrors) => ({ ...prevErrors, bankName: "Vui lòng chọn ngân hàng" }));
            return;
        }
        clearErrors();

        if (registerRequest.bankAccountName === '') {
            setErrors((prevErrors) => ({ ...prevErrors, bankAccountName: "Vui lòng nhập tên chủ thẻ ngân hàng" }));
            return;
        }
        clearErrors();

        const isSuccess = await register(registerRequest);

        if (!isSuccess) {
            setNotification("Xảy ra lỗi trong quá trình đăng kí tài khoản!")
            return;
        }
        window.scrollTo(0, 0);
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
                                        <div className="col-md-12 mt-4">
                                            <label>Địa chỉ</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Nhập địa chỉ của bạn"
                                                value={registerRequest.address}
                                                onChange={onChangeRegisterRequest("address")}
                                            />
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label>Tỉnh</label>
                                            <select id="city" value={selectedCityId}  onChange={handleCityChange} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }} >
                                                <option value="DEFAULT" selected>Chọn tỉnh thành</option>
                                                {cities.map(city => (
                                                    <option key={city.Id} value={city.Id}>{city.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label>Quận / Huyện</label>
                                            <select id="district"  value={selectedDistrictId} onChange={handleDistrictChange} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}>
                                                <option value="" selected>Chọn quận huyện</option>
                                                {districts.map(district => (
                                                    <option key={district.Id} value={district.Id}>{district.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <label>Phường / Xã</label>
                                            <select id="ward" value={selectedWardId} onChange={handleWardChange} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}>
                                                <option value="" selected>Chọn phường xã</option>
                                                {wards.map(ward => (
                                                    <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                                                ))}
                                            </select>
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
                                        <div className="col-md-12 mt-3">
                                            <label>Số tài khoản ngân hàng</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập số tài khoản ngân hàng của bạn"
                                                value={registerRequest.bankAccountNumber}
                                                onChange={onChangeRegisterRequest("bankAccountNumber")}
                                            />
                                            {errors.bankAccountNumber && <span className="text-danger">{errors.bankAccountNumber}</span>}
                                        </div>
                                        <div className="col-md-12">
                                            <label >Tên ngân hàng</label>
                                            <select defaultValue={0} onChange={onChangeSelectRegisterRequest("bankId")} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                                            >
                                                <option disabled defaultValue={0}>Chọn</option>
                                                {banks.map((bank) => (
                                                    <option style={{ padding: '5px' }} key={bank.id} value={bank.id}>
                                                        {bank.bankName} ({bank.tradingName})
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.bankId && <span className="text-danger">{errors.bankId}</span>}
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <label>Tên chủ tài khoản</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập tên chủ tài khoản"
                                                value={registerRequest.bankAccountName}
                                                onChange={onChangeRegisterRequest("bankAccountName")}
                                            />
                                            {errors.bankAccountName && <span className="text-danger">{errors.bankAccountName}</span>}
                                        </div>
                                        <div className="col-12">
                                            <button className="umino-register_btn" type="submit">
                                                Đăng kí
                                            </button>
                                        </div>
                                    </div>

                                    <Link to={"/dang-nhap"}>
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
