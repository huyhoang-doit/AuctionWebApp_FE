import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  isCitizenIdWrongFormat,
  isConfirmPasswordWrong,
  isPasswordWrongFormat,
  isPhoneNumberWrongFormat,
  isYearOfBirthWrongFormat,
} from "../../utils/checkRegister";
import { checkEmailExist, checkUsernameExist } from "../../api/UserAPI";
import { useDebouncedCallback } from "use-debounce";
import { register } from "../../api/AuthenticationAPI";
import { getAllBanks } from "../../api/BankAPI";
import { Bank } from "../../models/Bank";
import { City } from "../../models/City";
import { Ward } from "../../models/Ward";
import { District } from "../../models/District";
import { getAddressVietNam } from "../../api/AddressAPI";
import { getBase64 } from "../../utils/getBase64";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { uploadFileToFirebase } from "../../utils/imageFireBase";
import { CCCD_IMAGES_FOLDER } from "../../config/firebaseconfig";

export default function Register() {
  const initialRegisterRequest = {
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
    CCCDFirst: "",
    CCCDLast: "",
    CCCDFrom: "",
    bankId: "0",
    bankAccountNumber: "",
    bankAccountName: "",
  };
  const [confirmPassword, setConfirmPassword] = useState("");
  const [banks, setBanks] = useState<Bank[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedWardId, setSelectedWardId] = useState<string>("");
  const [imageFirst, setImageFirst] = useState<string | null>(null);
  const [imageLast, setImageLast] = useState<string | null>(null);
  const { t } = useTranslation(["Register"]);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    district: "",
    ward: "",
    yob: "",
    CCCD: "",
    CCCDFirst: "",
    CCCDLast: "",
    CCCDFrom: "",
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
    CCCDFirst: "",
    CCCDLast: "",
    CCCDFrom: "",
    bankId: "0",
    bankAccountNumber: "",
    bankAccountName: "",
  });

  useEffect(() => {
    getAddressVietNam()
      .then((data) => {
        if (data) {
          setCities(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    getAllBanks()
      .then((response) => {
        setBanks(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = event.target.value;
    setSelectedCityId(cityId);
    setDistricts([]);
    setWards([]);
    setSelectedDistrictId("");
    setSelectedWardId("");
    const selectedCity = cities.find((city) => city.Id === cityId);

    if (selectedCity) {
      setDistricts(selectedCity.Districts);
      setRegisterRequest((prevValue) => ({
        ...prevValue,
        city: selectedCity.Name,
      }));
      setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
    } else {
      setRegisterRequest((prevValue) => ({ ...prevValue, city: "" }));
    }
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const districtId = event.target.value;
    setSelectedDistrictId(districtId);
    setWards([]);
    setSelectedWardId("");
    const selectedDistrict = districts.find(
      (district) => district.Id === districtId
    );

    if (selectedDistrict) {
      setWards(selectedDistrict.Wards);
      setRegisterRequest((prevValue) => ({
        ...prevValue,
        district: selectedDistrict.Name,
      }));
      setErrors((prevErrors) => ({ ...prevErrors, district: "" }));
    } else {
      setRegisterRequest((prevValue) => ({ ...prevValue, district: "" }));
    }
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const wardId = event.target.value;
    setSelectedWardId(wardId);

    const selectedWard = wards.find((ward) => ward.Id === wardId);
    if (selectedWard) {
      setRegisterRequest((prevValue) => ({
        ...prevValue,
        ward: selectedWard.Name,
      }));
      setErrors((prevErrors) => ({ ...prevErrors, ward: "" }));
    } else {
      setRegisterRequest((prevValue) => ({ ...prevValue, ward: "" }));
    }
  };

  const debouncedUsernameChange = useDebouncedCallback(
    async (username: string) => {
      let usernameError = "";
      const exists = await checkUsernameExist(username);
      if (exists) {
        usernameError = t("Register.Tên này đã có người dùng!");
      }
      setErrors((prevErrors) => ({ ...prevErrors, username: usernameError }));
    },
    1000
  );

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setRegisterRequest((preValue) => ({ ...preValue, username }));
    debouncedUsernameChange(username);
  };

  const debouncedEmailChange = useDebouncedCallback(async (email: string) => {
    let emailError = "";
    const exists = await checkEmailExist(email);
    if (exists) {
      emailError = t("Register.Email đã tồn tại!");
    }
    setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
  }, 1000);

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
      phoneError = t(
        "Register.Số điện thoại phải có ít nhất 10 ký tự và bắt đầu từ 0"
      );
    }
    setErrors((prevErrors) => ({ ...prevErrors, phone: phoneError }));
    setRegisterRequest((preValue) => ({ ...preValue, phone }));
  };

  const onChangeYob = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yob = e.target.value;
    let yobError = "";
    const isWrong = isYearOfBirthWrongFormat(yob);
    if (isWrong) {
      yobError = t("Register.Năm sinh không hợp lệ!");
    }
    setErrors((prevErrors) => ({ ...prevErrors, yob: yobError }));
    setRegisterRequest((preValue) => ({ ...preValue, yob }));
  };

  const onChangeCCCD = (e: React.ChangeEvent<HTMLInputElement>) => {
    const CCCD = e.target.value;
    let CCCDError = "";
    const isWrong = isCitizenIdWrongFormat(CCCD);
    if (isWrong) {
      CCCDError = t("Register.Số căn cước công dân không hợp lệ!");
    }
    setErrors((prevErrors) => ({ ...prevErrors, CCCD: CCCDError }));
    setRegisterRequest((preValue) => ({ ...preValue, CCCD }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    let passwordError = "";
    const isWrongFormat = isPasswordWrongFormat(password);
    if (isWrongFormat) {
      passwordError = t(
        "Register.Mật khẩu phải có ít nhất 8 ký tự và 1 ký tự đặc biệt!"
      );
    }
    setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
    setRegisterRequest((preValue) => ({ ...preValue, password }));
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    let confirmPasswordError = "";
    const isWrong = isConfirmPasswordWrong(
      registerRequest.password,
      confirmPassword
    );
    if (isWrong) {
      confirmPasswordError = t("Register.Mất khẩu không khớp!");
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: confirmPasswordError,
      }));
      setConfirmPassword(confirmPassword);
    }
  }

  const onChangeRegisterRequest = (key: keyof typeof registerRequest) => (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterRequest((preValue) => ({
      ...preValue,
      [key]: e.target.value,
    }));
  };

  const onChangeSelectRegisterRequest = (key: keyof typeof registerRequest) => (e: ChangeEvent<HTMLSelectElement>) => {
    setRegisterRequest((prevValue) => ({
      ...prevValue,
      [key]: e.target.value,
    }));
  };

  const onChangeCCCDFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const CCCDFrom = e.target.value;
    let CCCDError = "";
    if (CCCDFrom === "") {
      CCCDError = t("Register.Vui lòng nhập nơi cấp căn cước công dân!");
    }
    setErrors((prevErrors) => ({ ...prevErrors, CCCDFrom: CCCDError }));
    setRegisterRequest((preValue) => ({ ...preValue, CCCDFrom }));
  };

  const handleCCCDFirstChange = (key: keyof typeof registerRequest) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      try {
        const base64 = await getBase64(file);
        const imageFirst = await uploadFileToFirebase(file, CCCD_IMAGES_FOLDER)
        if (imageFirst) {
          setRegisterRequest((prevValue) => ({
            ...prevValue,
            [key]: imageFirst,
          }));
          setImageFirst(base64 as string);
          setErrors((prevErrors) => ({ ...prevErrors, CCCDFirst: "" }));
        }
      } catch (error) {
        console.error("Error converting file to Base64: ", error);
      }
    }
  };

  const handleCCCDLastChange = (key: keyof typeof registerRequest) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      try {
        const base64 = await getBase64(file);
        const imageLast = await uploadFileToFirebase(file, CCCD_IMAGES_FOLDER)
        if (imageLast) {
          setRegisterRequest((prevValue) => ({
            ...prevValue,
            [key]: imageLast,
          }));
          setImageLast(base64 as string);
          setErrors((prevErrors) => ({ ...prevErrors, CCCDLast: "" }));
        }
      } catch (error) {
        console.error("Error converting file to Base64: ", error);
      }
    }
  };

  const clearErrors = () => {
    setErrors({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      yob: "",
      CCCD: "",
      city: "",
      district: "",
      ward: "",
      CCCDFirst: "",
      CCCDLast: "",
      CCCDFrom: "",
      register: "",
      bankId: "",
      bankAccountNumber: "",
      bankAccountName: "",
    });
  };

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check again
    const isUsernameValid = !(await checkUsernameExist(
      registerRequest.username
    ));
    const isEmailValid = !(await checkEmailExist(registerRequest.email));
    const isPasswordValid = !isPasswordWrongFormat(registerRequest.password);
    const isConfirmPasswordValid = !isConfirmPasswordWrong(
      registerRequest.password,
      confirmPassword
    );
    const isPhoneNumberValid = !isPhoneNumberWrongFormat(
      registerRequest.phone
    );
    const isYearOfBirthValid = !isYearOfBirthWrongFormat(registerRequest.yob);
    const isCitizenIdValid = !isCitizenIdWrongFormat(registerRequest.CCCD);

    if (registerRequest.firstName === "" || registerRequest.lastName === "") {
      Swal.fire("Error", t("Register.Vui lòng nhập đủ Họ và Tên"), "error");
      return;
    }

    if (registerRequest.username === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: t("Register.Vui lòng nhập tên tài khoản!"),
      }));
      Swal.fire("Error", t("Register.Vui lòng nhập tên tài khoản!"), "error");
      return;
    }

    if (registerRequest.email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: t("Register.Vui lòng nhập email!"),
      }));
      Swal.fire("Error", t("Register.Vui lòng nhập email!"), "error");
      return;
    }

    if (registerRequest.phone === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: t("Register.Vui lòng nhập số điện thoại"),
      }));
      Swal.fire("Error", t("Register.Vui lòng nhập số điện thoại"), "error");
      return;
    }

    if (registerRequest.city === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: t("Register.Vui lòng chọn Tỉnh"),
      }));
      Swal.fire("Error", t("Register.Vui lòng chọn Tỉnh"), "error");
      return;
    }

    if (registerRequest.district === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        district: t("Register.Vui lòng chọn Quận / Huyện"),
      }));
      Swal.fire("Error", t("Register.Vui lòng chọn Quận / Huyện"), "error");
      return;
    }

    if (registerRequest.ward === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ward: t("Register.Vui lòng chọn Phường / Xã"),
      }));
      Swal.fire("Error", t("Register.Vui lòng chọn Phường / Xã"), "error");
      return;
    }

    if (registerRequest.yob === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        yob: t("Register.Vui lòng nhập năm sinh"),
      }));
      Swal.fire("Error", t("Register.Vui lòng nhập năm sinh"), "error");
      return;
    }

    if (registerRequest.CCCD === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CCCD: t("Register.Vui lòng nhập căn cước công dân"),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng nhập căn cước công dân"),
        "error"
      );
      return;
    }

    if (registerRequest.CCCDFrom === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CCCDFrom: t("Register.Vui lòng cung cấp nơi cấp căn cước công dân"),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng cung cấp nơi cấp căn cước công dân"),
        "error"
      );
      return;
    }

    if (registerRequest.CCCDFirst === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CCCDFirst: t(
          "Register.Vui lòng chọn hình ảnh căn cước công dân mặt trước"
        ),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng chọn hình ảnh căn cước công dân mặt trước"),
        "error"
      );
      return;
    }

    if (registerRequest.CCCDLast === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CCCDLast: t(
          "Register.Vui lòng chọn hình ảnh căn cước công dân mặt sau"
        ),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng chọn hình ảnh căn cước công dân mặt sau"),
        "error"
      );
      return;
    }

    if (registerRequest.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: t("Register.Vui lòng nhập mật khẩu"),
      }));
      Swal.fire("Error", t("Register.Vui lòng nhập mật khẩu"), "error");
      return;
    }

    if (confirmPassword === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: t("Register.Vui lòng nhập xác nhận mật khẩu"),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng nhập xác nhận mật khẩu"),
        "error"
      );
      return;
    }

    if (registerRequest.bankAccountNumber === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        bankAccountNumber: t(
          "Register.Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước"
        ),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước"),
        "error"
      );
      return;
    }

    if (registerRequest.bankId === "0") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        bankName: t("Register.Vui lòng chọn ngân hàng"),
      }));
      Swal.fire("Error", t("Register.Vui lòng chọn ngân hàng"), "error");
      return;
    }

    if (registerRequest.bankAccountName === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        bankAccountName: t("Register.Vui lòng nhập tên chủ thẻ ngân hàng"),
      }));
      Swal.fire(
        "Error",
        t("Register.Vui lòng nhập tên chủ thẻ ngân hàng"),
        "error"
      );
      return;
    }

    if (
      !isUsernameValid ||
      !isEmailValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid ||
      !isPhoneNumberValid ||
      !isYearOfBirthValid ||
      !isCitizenIdValid
    ) {
      return;
    }

    const isSuccess = await register(registerRequest);

    if (!isSuccess) {
      Swal.fire(
        "Error",
        t("Register.Xảy ra lỗi trong quá trình đăng kí tài khoản!"),
        "error"
      );
      return;
    }
    setRegisterRequest(initialRegisterRequest);
    window.scrollTo(0, 0);
    // Clear error message
    clearErrors();
    Swal.fire(
      "Success",
      t(
        "Register.Đăng kí tài khoản thành công, vui lòng kiểm tra email để kích hoạt tài khoản!"
      ),
      "success"
    );
  };

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">{t("Register.Trang chủ")}</a>
              </li>
              <li className="active"> {t("Register.Đăng kí tài khoản")}</li>
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
                  <h4 className="login-title">
                    {" "}
                    {t("Register.Đăng kí tài khoản")}
                  </h4>
                  {errors.register && (
                    <h5 className="fw-bold text-danger">{errors.register}</h5>
                  )}
                  <div className="row mb-4">
                    <div className="col-md-6 col-12 mb--20">
                      <label>{t("Register.Họ")}</label>
                      <input
                        type="text"
                        placeholder={t("Register.Nhập họ của bạn")}
                        value={registerRequest.firstName}
                        onChange={onChangeRegisterRequest("firstName")}
                      />
                      {errors.firstName && (
                        <span className="text-danger">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>{t("Register.Tên")}</label>
                      <input
                        type="text"
                        placeholder={t("Register.Nhập tên của bạn")}
                        value={registerRequest.lastName}
                        onChange={onChangeRegisterRequest("lastName")}
                      />
                      {errors.lastName && (
                        <span className="text-danger">{errors.lastName}</span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label>{t("Register.Tên tài khoản")}</label>
                      <input
                        className="mb-0"
                        type="text"
                        placeholder={t("Register.Nhập username của bạn")}
                        value={registerRequest.username}
                        onChange={handleUsernameChange}
                      />
                      {errors.username && (
                        <span className="text-danger">{errors.username}</span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label>Email</label>
                      <input
                        className="mb-0"
                        type="email"
                        placeholder={t("Register.Nhập email của bạn")}
                        value={registerRequest.email}
                        onChange={handleEmailChange}
                      />
                      {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label>{t("Register.Số điện thoại")}</label>
                      <input
                        className="mb-0"
                        type="text"
                        placeholder={t("Register.Nhập số điện thoại của bạn")}
                        value={registerRequest.phone}
                        onChange={onChangePhoneNumber}
                      />
                      {errors.phone && (
                        <span className="text-danger">{errors.phone}</span>
                      )}
                    </div>
                    <div className="col-md-12 mt-4">
                      <label>{t("Register.Địa chỉ")}</label>
                      <input
                        type="text"
                        placeholder={t("Register.Nhập địa chỉ của bạn")}
                        value={registerRequest.address}
                        onChange={onChangeRegisterRequest("address")}
                      />
                    </div>
                    <div className="col-md-4 mb-4">
                      <label>{t("Register.Tỉnh")}</label>
                      <select
                        id="city"
                        value={selectedCityId}
                        onChange={handleCityChange}
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "0 0 0 10px",
                        }}
                      >
                        <option value="DEFAULT" selected>
                          {t("Register.Chọn tỉnh thành")}
                        </option>
                        {cities.map((city) => (
                          <option key={city.Id} value={city.Id}>
                            {city.Name}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <span className="text-danger">{errors.city}</span>
                      )}
                    </div>
                    <div className="col-md-4 mb-4">
                      <label>{t("Register.Quận / Huyện")}</label>
                      <select
                        id="district"
                        value={selectedDistrictId}
                        onChange={handleDistrictChange}
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "0 0 0 10px",
                        }}
                      >
                        <option value="" selected>
                          {t("Register.Chọn quận huyện")}
                        </option>
                        {districts.map((district) => (
                          <option key={district.Id} value={district.Id}>
                            {district.Name}
                          </option>
                        ))}
                      </select>
                      {errors.district && (
                        <span className="text-danger">{errors.district}</span>
                      )}
                    </div>
                    <div className="col-md-4 mb-4">
                      <label>{t("Register.Phường / Xã")}</label>
                      <select
                        id="ward"
                        value={selectedWardId}
                        onChange={handleWardChange}
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "0 0 0 10px",
                        }}
                      >
                        <option value="" selected>
                          {t("Register.Chọn phường xã")}
                        </option>
                        {wards.map((ward) => (
                          <option key={ward.Id} value={ward.Id}>
                            {ward.Name}
                          </option>
                        ))}
                      </select>
                      {errors.ward && (
                        <span className="text-danger">{errors.ward}</span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label>{t("Register.Năm sinh")}</label>
                      <input
                        className="mb-0"
                        type="text"
                        placeholder={t("Register.Nhập năm sinh của bạn")}
                        value={registerRequest.yob}
                        onChange={onChangeYob}
                      />
                      {errors.yob && (
                        <span className="text-danger">{errors.yob}</span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label>{t("Register.Số CCCD")}</label>
                      <input
                        className="mb-0"
                        type="text"
                        placeholder={t(
                          "Register.Nhập số căn cước công dân của bạn"
                        )}
                        value={registerRequest.CCCD}
                        onChange={onChangeCCCD}
                      />
                      {errors.CCCD && (
                        <span className="text-danger">{errors.CCCD}</span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label>{t("Register.Nơi cấp CCCD")}</label>
                      <input
                        className="mb-0"
                        type="text"
                        placeholder={t(
                          "Register.Nhập nơi cấp căn cước công dân"
                        )}
                        value={registerRequest.CCCDFrom}
                        onChange={onChangeCCCDFrom}
                      />
                      {errors.CCCDFrom && (
                        <span className="text-danger">{errors.CCCDFrom}</span>
                      )}
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                      <label htmlFor="counterparty_IdCardPhoto1Company_Upload">
                        <input
                          type="file"
                          id="counterparty_IdCardPhoto1Company_Upload"
                          style={{ display: "none" }}
                          onChange={handleCCCDFirstChange("CCCDFirst")}
                        />
                        {imageFirst ? (
                          <img
                            id="img_IdCardPhoto1CompanySelect"
                            style={{
                              width: "100%",
                              cursor: "pointer",
                              height: "192px",
                              display: "block",
                            }}
                            src={imageFirst}
                            alt=""
                          />
                        ) : (
                          <div
                            id="img_IdCardPhoto1Company"
                            style={{
                              width: "100%",
                              cursor: "pointer",
                              height: "192px",
                              background: "#EDF7FC",
                              border: "1px dashed #C5D7FC",
                              borderRadius: "4px",
                              display: "flex",
                              justifyContent: "center",
                              textAlign: "center",
                              paddingTop: "32px",
                              paddingBottom: "32px",
                              flexFlow: "column",
                            }}
                          >
                            <img
                              src="https://lacvietauction.vn/auctionart/upload/image/SelectCMNDFIrst.png"
                              alt="Alternate Text"
                              style={{
                                width: "113.6px",
                                height: "64px",
                                margin: "auto",
                              }}
                            />
                            <p
                              className="upload-CMND-text"
                              style={{ marginTop: "24px" }}
                            >
                              {t("Register.Tải lên ảnh mặt trước CMND/CCCD")}
                            </p>
                            <p className="upload-CMND-text2">
                              {t("Register.JPG, PNG kích thước nhỏ hơn 10MB")}
                            </p>
                          </div>
                        )}
                        <input
                          id="counterparty_IdCardPhoto1Company"
                          style={{ display: "none" }}
                        />
                        <button
                          className="buttonEditImgCMND1"
                          onClick={() =>
                            document
                              .getElementById(
                                "counterparty_IdCardPhoto1Company_Upload"
                              )
                              ?.click()
                          }
                        >
                          {t("Register.Tải lên ảnh khác")}
                        </button>
                      </label>
                      {errors.CCCDFirst && (
                        <span className="text-danger">
                          {errors.CCCDFirst}
                        </span>
                      )}
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                      <label htmlFor="counterparty_IdCardPhoto2Company_Upload">
                        <input
                          type="file"
                          id="counterparty_IdCardPhoto2Company_Upload"
                          style={{ display: "none" }}
                          onChange={handleCCCDLastChange("CCCDLast")}
                        />
                        {imageLast ? (
                          <img
                            id="img_IdCardPhoto2CompanySelect"
                            style={{
                              width: "100%",
                              cursor: "pointer",
                              height: "192px",
                              display: "block",
                            }}
                            src={imageLast}
                            alt=""
                          />
                        ) : (
                          <div
                            id="img_IdCardPhoto1Company"
                            style={{
                              width: "100%",
                              cursor: "pointer",
                              height: "192px",
                              background: "#EDF7FC",
                              border: "1px dashed #C5D7FC",
                              borderRadius: "4px",
                              display: "flex",
                              justifyContent: "center",
                              textAlign: "center",
                              paddingTop: "32px",
                              paddingBottom: "32px",
                              flexFlow: "column",
                            }}
                          >
                            <img
                              src="	https://lacvietauction.vn/auctionart/upload/image/UploadCMNDLast.png"
                              alt="Alternate Text"
                              style={{
                                width: "113.6px",
                                height: "64px",
                                margin: "auto",
                              }}
                            />
                            <p
                              className="upload-CMND-text"
                              style={{ marginTop: "24px" }}
                            >
                              {t("Register.Tải lên ảnh mặt sau CMND/CCCD")}
                            </p>
                            <p className="upload-CMND-text2">
                              {t("Register.JPG, PNG kích thước nhỏ hơn 10MB")}
                            </p>
                          </div>
                        )}
                        <input
                          id="counterparty_IdCardPhoto2Company"
                          style={{ display: "none" }}
                        />
                        <button
                          className="buttonEditImgCMND2"
                          onClick={() =>
                            document
                              .getElementById(
                                "counterparty_IdCardPhoto2Company_Upload"
                              )
                              ?.click()
                          }
                        >
                          {t("Register.Tải lên ảnh khác")}
                        </button>
                      </label>
                      {errors.CCCDLast && (
                        <span className="text-danger">{errors.CCCDLast}</span>
                      )}
                    </div>
                    <div className="col-md-12 mt-3">
                      <label>{t("Register.Mật khẩu")}</label>
                      <input
                        type="password"
                        placeholder={t("Register.Nhập mật khẩu của bạn")}
                        value={registerRequest.password}
                        onChange={handlePasswordChange}
                      />
                      {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )}
                    </div>
                    <div className="col-md-12">
                      <label>{t("Register.Xác nhận mật khẩu")}</label>
                      <input
                        type="password"
                        placeholder={t(
                          "Register.Xác nhận lại mật khẩu của bạn"
                        )}
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <span className="text-danger">
                        {errors.confirmPassword}
                      </span>
                    )}
                    <div className="col-md-12 mt-3">
                      <label>{t("Register.Số tài khoản ngân hàng")}</label>
                      <input
                        type="text"
                        placeholder={t(
                          "Register.Nhập số tài khoản ngân hàng của bạn"
                        )}
                        value={registerRequest.bankAccountNumber}
                        onChange={onChangeRegisterRequest(
                          "bankAccountNumber"
                        )}
                      />
                    </div>
                    {errors.bankAccountNumber && (
                      <span className="text-danger">
                        {errors.bankAccountNumber}
                      </span>
                    )}
                    <div className="col-md-12">
                      <label>{t("Register.Tên ngân hàng")}</label>
                      <select
                        defaultValue={0}
                        onChange={onChangeSelectRegisterRequest("bankId")}
                        style={{
                          width: "100%",
                          height: "40px",
                          padding: "0 0 0 10px",
                        }}
                      >
                        <option selected disabled defaultValue={0}>
                          Chọn
                        </option>
                        {banks.map((bank) => (
                          <option
                            style={{ padding: "5px" }}
                            key={bank.id}
                            value={bank.id}
                          >
                            {bank.bankName} ({bank.tradingName})
                          </option>
                        ))}
                      </select>
                      {errors.bankId && (
                        <span className="text-danger">{errors.bankId}</span>
                      )}
                    </div>
                    <div className="col-md-12 mt-3">
                      <label>{t("Register.Tên chủ tài khoản")}</label>
                      <input
                        type="text"
                        placeholder={t("Register.Nhập tên chủ tài khoản")}
                        value={registerRequest.bankAccountName}
                        onChange={onChangeRegisterRequest("bankAccountName")}
                      />
                      {errors.bankAccountName && (
                        <span className="text-danger">
                          {errors.bankAccountName}
                        </span>
                      )}
                    </div>
                    <div className="col-12">
                      <button className="umino-register_btn" type="submit">
                        {t("Register.Đăng kí")}
                      </button>
                    </div>
                  </div>

                  <Link to={"/dang-nhap"}>
                    {t("Register.Bạn đã có tài khoản?")}
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
