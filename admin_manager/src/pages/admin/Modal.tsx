import React, { useEffect, useState } from "react";
import { User } from "../../models/User";
import { isCitizenIdWrongFormat, isPasswordWrongFormat, isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from "../../utils/checkRegister";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { changeStateUser, checkEmailExist, checkUsernameExist, registerAccountStaff } from "../../api/UserAPI";
import { District } from "../../models/District";
import { City } from "../../models/City";
import { Ward } from "../../models/Ward";
import { getAddressVietNam } from "../../api/AddressAPI";
import { getAllBanks } from "../../api/BankAPI";
import { getBase64 } from "../../utils/getBase64";
import { Bank } from "../../models/Bank";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDebouncedCallback } from "use-debounce";

interface SaveEditProfileModalProps {
  user: User | null;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  handleEdit: (isConfirm: boolean) => void;
}

interface DeleteUserProps {
  user: User | null;
  setIsRefresh: (value: boolean) => void;
}

interface RegisterRequest {
  id: number;
  username: string;
  password: string;
  role: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  district: string;
  ward: string;
  city: string;
  yob: string;
  cccd: string;
  cccdFirst: string;
  cccdLast: string;
  cccdFrom: string;
  bankId: number;
  bankAccountNumber: string;
  bankAccountName: string;
}

interface CreateNewUserModalProps {
  role: string;
  setIsRefresh: (value: boolean) => void;
}

export const SaveEditProfileModal: React.FC<SaveEditProfileModalProps> = ({
  user,
  isEditing,
  setIsEditing,
  handleEdit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    handleEdit(false);
    changeState();
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const changeState = () => {
    setIsEditing(!isEditing);

    const inputs = document.querySelectorAll('input[type="text"]');
    const selects = document.querySelectorAll("select");

    inputs.forEach((input) => {
      if (!isEditing) {
        input.removeAttribute("readOnly");
        input.classList.remove("input-required");
      } else {
        input.setAttribute("readOnly", "");
        input.classList.add("input-required");
      }
    });

    selects.forEach((select) => {
      if (!isEditing) {
        select.removeAttribute("disabled");
        select.classList.remove("input-required");
      } else {
        select.setAttribute("disabled", "");
        select.classList.add("input-required");
      }
    });
  };

  const handleSave = () => {
    const userYob = user?.yob ? parseInt(user.yob, 10) : undefined;
    const isPhoneNumberValid = !isPhoneNumberWrongFormat(user?.phone ?? "");
    const isYearOfBirthValid = userYob !== undefined && !isYearOfBirthWrongFormat(userYob);

    const errorMessages = [
      {
        isValid: isYearOfBirthValid,
        message: "Vui lòng chọn đúng định dạng ngày sinh.",
      },
      {
        isValid: isPhoneNumberValid,
        message: "Vui lòng chọn đúng số điện thoại.",
      },
      { isValid: user?.district, message: "Vui lòng chọn quận/huyện." },
      { isValid: user?.ward, message: "Vui lòng chọn phường/xã." },
      {
        isValid: user?.bankAccountNumber,
        message: "Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước.",
      },
      {
        isValid: user?.bankAccountName,
        message: "Vui lòng nhập tên chủ thẻ ngân hàng.",
      },
    ];
    for (const { isValid, message } of errorMessages) {
      if (!isValid) {
        toast.error(message);
        setShowModal(false);
        return;
      }
    }

    handleEdit(true);
    setShowModal(false);
    changeState();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-xs btn-primary mb-3 mt-2"
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={!isEditing ? changeState : handleShow}
        style={{ backgroundColor: "black", border: "none" }}
      >
        {isEditing ? "Lưu" : "Chỉnh sửa"}
      </button>
      {showModal && (
        <div className="overlay">
          <Modal
            show={showModal}
            centered
            onHide={handleClose}
            backdropClassName="custom-backdrop"
          >
            <Modal.Header>
              <Modal.Title>Xác nhận lưu thay đổi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Bạn có chắc muốn thông tin thay đổi tài khoản?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="warning" onClick={handleSave}>
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      {/* <ToastContainer /> */}
    </>
  );
};

export const DeleteUserModal: React.FC<DeleteUserProps> = ({ user, setIsRefresh }) => {
  const handleDeleteUser = () => {
    if (user?.id === undefined) {
      Swal.fire({
        icon: "error",
        title: "User ID is missing",
      });
      return;
    }
    Swal.fire({
      icon: "warning",
      html: `
        <h4>Xác nhận xóa.</h4>
        <div>Xóa người dùng: ${user?.username} khỏi hệ thống?</div>`,
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return changeStateUser(user.id, "DISABLE")
          .then((response) => {
            if (response) {
              Swal.fire({
                icon: "success",
                title: "User deleted successfully.",
              });
              setIsRefresh(true);
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to delete user.",
              text: error.message,
            });
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleDeleteUser}>Xóa</Button>
    </>
  );
};

export const CreateNewUserModal: React.FC<CreateNewUserModalProps> = ({ role, setIsRefresh }) => {
  const [show, setShow] = useState(false);
  const [banks, setBanks] = useState<Bank[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedWardId, setSelectedWardId] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleCloseCreateAccount = () => setShow(false);
  const handleShowCreateAccount = () => setShow(true);

  const formik = useFormik<RegisterRequest>({
    initialValues: {
      id: 0,
      username: "",
      password: "",
      role: role,
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      district: "",
      ward: "",
      city: "",
      yob: "",
      cccd: "",
      cccdFirst: "",
      cccdLast: "",
      cccdFrom: "",
      bankId: 0,
      bankAccountNumber: "",
      bankAccountName: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Vui lòng nhập tên người dùng")
        .min(2, "Must be 2 characters or more")
        .test("is-wrong-format", "Tên này đã có người dùng", () => isUsernameValid),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu")
        .test("is-wrong-format", "Mật khẩu phải có ít nhất 8 ký tự và 1 ký tự đặc biệt", (value) => !isPasswordWrongFormat(value)),
      confirmPassword: Yup.string()
        .required("Vui lòng nhập xác nhận mật khẩu")
        .oneOf([Yup.ref("password")], "Mất khẩu không khớp"),
      email: Yup.string()
        .required("Vui lòng nhập email")
        .email("Invalid email address")
        .test("is-wrong-format", "Email này đã có người dùng", () => isEmailValid),
      firstName: Yup.string().required("Vui lòng nhập họ"),
      lastName: Yup.string().required("Vui lòng nhập tên"),
      phone: Yup.string()
        .required("Vui lòng nhập số liên lạc.")
        .test("is-wrong-format", "Số điện thoại phải có ít nhất 10 ký tự và bắt đầu từ 0", (value) => !isPhoneNumberWrongFormat(value)),
      address: Yup.string().required("Vui lòng nhập địa chỉ."),
      district: Yup.string().required("Vui lòng chọn Quận / Huyện"),
      ward: Yup.string().required("Vui lòng chọn Phường / Xã"),
      city: Yup.string().required("Vui lòng chọn Tỉnh"),
      yob: Yup.number().required("Vui lòng nhập năm sinh")
        .test("is-wrong-format", "Năm sinh không hợp lệ", (value) => !isYearOfBirthWrongFormat(value)),
      cccd: Yup.string().required("Vui lòng nhập số căn cước")
        .test("is-wrong-format", "Số căn cước công dân không hợp lệ", (value) => !isCitizenIdWrongFormat(value)),
      cccdFirst: Yup.string().required("Vui lòng chọn ảnh căn cước mặt trước"),
      cccdLast: Yup.string().required("Vui lòng chọn ảnh căn cước mặt sau"),
      cccdFrom: Yup.string().required("Vui lòng nhập nơi cấp căn cước"),
      bankId: Yup.number().min(1, "Vui lòng chọn ngân hàng"),
      bankAccountNumber: Yup.string().required("Vui lòng nhập số tài khoản"),
      bankAccountName: Yup.string().required("Vui lòng nhập tên chủ tài khoản"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      const isSuccess = await registerAccountStaff(values);

      if (!isSuccess) {
        Swal.fire("Error", "Xảy ra lỗi trong quá trình tạo tài khoản!", "error");
      } else {
        Swal.fire("Success", "Tạo tài khoản thành công!", "success");
        setIsRefresh(true);
        resetForm();
      }
      handleCloseCreateAccount();
      setSubmitting(false);
    },
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

  const handleSubmitForm = () => {
    formik.submitForm();
  };

  const debouncedUsernameChange = useDebouncedCallback(
    async (username: string) => {
      const exists = await checkUsernameExist(username);
      if (exists) {
        formik.setFieldError("username", "Tên này đã có người dùng");
        setIsUsernameValid(false);
      } else {
        formik.setFieldError("username", "");
        setIsUsernameValid(true);
      }
    },
    1000
  );

  const debouncedEmailChange = useDebouncedCallback(
    async (email: string) => {
      const exists = await checkEmailExist(email);
      if (exists) {
        formik.setFieldError("email", "Email này đã có người dùng");
        setIsEmailValid(false);
      } else {
        formik.setFieldError("email", "");
        setIsEmailValid(true);
      }
    },
    1000
  );

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    formik.setFieldValue("email", email);
    debouncedEmailChange(email);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    formik.setFieldValue("username", username);
    debouncedUsernameChange(username);
  };

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

      formik.setFieldValue("city", selectedCity.Name);
    } else {
      formik.setFieldValue("city", "");
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
      formik.setFieldValue("district", selectedDistrict.Name);
    } else {
      formik.setFieldValue("district", "");
    }
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const wardId = event.target.value;
    setSelectedWardId(wardId);

    const selectedWard = wards.find((ward) => ward.Id === wardId);
    if (selectedWard) {
      formik.setFieldValue("ward", selectedWard.Name);
    } else {
      formik.setFieldValue("ward", "");
    }
  };

  const handlecccdFirstChange = (key: keyof RegisterRequest) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      try {
        const base64 = await getBase64(file);
        if (base64) {
          formik.setFieldValue(key, base64);
        }
      } catch (error) {
        console.error("Error converting file to Base64: ", error);
      }
    }
  };

  const handlecccdLastChange = (key: keyof RegisterRequest) => async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      try {
        const base64 = await getBase64(file);
        if (base64) {
          formik.setFieldValue(key, base64);
        }
      } catch (error) {
        console.error("Error converting file to Base64: ", error);
      }
    }
  };

  return (
    <>
      <Button variant="warning" size="sm" className="btn_1" style={{ backgroundColor: "#3b76ef", border: "none", color: "white" }} onClick={handleShowCreateAccount}>
        Thêm tài khoản mới
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            centered
            backdrop="static"
            size="xl"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center fw-bold" style={{ color: "#ffc107" }}>TẠO TÀI KHOẢN CHO {role === "STAFF" ? "NHÂN VIÊN" : "QUẢN LÝ"} </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">
                  </span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4 fs-6">
              <Form onSubmit={formik.handleSubmit}>
                <div className="checkbox-form fw-medium row mb-3">
                  <div className="col-md-6 checkout-form-list mb-2">
                    <label>Họ</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập họ"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.firstName && (
                      <span className="text-danger">{formik.errors.firstName}</span>
                    )}
                  </div>
                  <div className="col-md-6 checkout-form-list mb-2">
                    <label>Tên</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập tên"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.lastName && (
                      <span className="text-danger">{formik.errors.lastName}</span>
                    )}
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2 mt-3">
                    <label>Tên tài khoản</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập tên tài khoản"
                      name="username"
                      value={formik.values.username}
                      onChange={handleUsernameChange}
                    />
                    {formik.errors.username && (
                      <span className="text-danger">{formik.errors.username}</span>
                    )}
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2 mt-3">
                    <label>Email</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập tên tài khoản"
                      name="email"
                      value={formik.values.email}
                      onChange={handleEmailChange}
                    />
                    {formik.errors.email && (
                      <span className="text-danger">{formik.errors.email}</span>
                    )}
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2 mt-3">
                    <label>Số liên lạc</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone && (
                      <span className="text-danger">{formik.errors.phone}</span>
                    )}
                  </div>
                  <div className="col-md-12 checkout-form-list mb-2 mt-3">
                    <label>Địa chỉ</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập địa chỉ"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.address && (
                      <span className="text-danger">{formik.errors.address}</span>
                    )}
                  </div>
                  <div className="col-md-4 mb-4 mt-3">
                    <label>Tỉnh</label>
                    <select
                      id="city"
                      name="city"
                      value={selectedCityId}
                      onChange={handleCityChange}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      <option value="DEFAULT" selected>
                        Chọn tỉnh thành
                      </option>
                      {cities.map((city) => (
                        <option key={city.Id} value={city.Id}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                    {formik.errors.city && (
                      <span className="text-danger">{formik.errors.city}</span>
                    )}
                  </div>
                  <div className="col-md-4 mb-4 mt-3">
                    <label>Quận / Huyện</label>
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
                        Chọn quận huyện
                      </option>
                      {districts.map((district) => (
                        <option key={district.Id} value={district.Id}>
                          {district.Name}
                        </option>
                      ))}
                    </select>
                    {formik.errors.district && (
                      <span className="text-danger">{formik.errors.district}</span>
                    )}
                  </div>
                  <div className="col-md-4 mb-4 mt-3">
                    <label>Phường / Xã</label>
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
                        Chọn phường xã
                      </option>
                      {wards.map((ward) => (
                        <option key={ward.Id} value={ward.Id}>
                          {ward.Name}
                        </option>
                      ))}
                    </select>
                    {formik.errors.ward && (
                      <span className="text-danger">{formik.errors.ward}</span>
                    )}
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <label>Năm sinh</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập năm sinh của bạn"
                      name="yob"
                      value={formik.values.yob}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.yob && (
                      <span className="text-danger">{formik.errors.yob}</span>
                    )}
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <label>Số CCCD</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập số căn cước công dân của bạn"
                      name="cccd"
                      value={formik.values.cccd}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.cccd && (
                      <span className="text-danger">{formik.errors.cccd}</span>
                    )}
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <label>Nơi cấp CCCD</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập nơi cấp căn cước công dân"
                      name="cccdFrom"
                      value={formik.values.cccdFrom}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.cccdFrom && (
                      <span className="text-danger">{formik.errors.cccdFrom}</span>
                    )}
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4 checkout-form-list mb-2">
                    <label htmlFor="counterparty_IdCardPhoto1Company_Upload">
                      <input
                        type="file"
                        id="counterparty_IdCardPhoto1Company_Upload"
                        style={{ display: "none" }}
                        onChange={handlecccdFirstChange("cccdFirst")}
                      />
                      {formik.values.cccdFirst ? (
                        <img
                          id="img_IdCardPhoto1CompanySelect"
                          style={{
                            width: "100%",
                            cursor: "pointer",
                            height: "192px",
                            display: "block",
                          }}
                          src={formik.values.cccdFirst}
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
                            Tải lên ảnh mặt trước CMND/CCCD
                          </p>
                          <p className="upload-CMND-text2">
                            JPG, PNG kích thước nhỏ hơn 10MB
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
                        Tải lên ảnh khác
                      </button>
                    </label>
                    {formik.errors.cccdFirst && (
                      <span className="text-danger">
                        {formik.errors.cccdFirst}
                      </span>
                    )}
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4 checkout-form-list mb-2">
                    <label htmlFor="counterparty_IdCardPhoto2Company_Upload">
                      <input
                        type="file"
                        id="counterparty_IdCardPhoto2Company_Upload"
                        style={{ display: "none" }}
                        onChange={handlecccdLastChange("cccdLast")}
                      />
                      {formik.values.cccdLast ? (
                        <img
                          id="img_IdCardPhoto2CompanySelect"
                          style={{
                            width: "100%",
                            cursor: "pointer",
                            height: "192px",
                            display: "block",
                          }}
                          src={formik.values.cccdLast}
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
                            Tải lên ảnh mặt sau CMND/CCCD
                          </p>
                          <p className="upload-CMND-text2">
                            JPG, PNG kích thước nhỏ hơn 10MB
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
                        Tải lên ảnh khác
                      </button>
                    </label>
                    {formik.errors.cccdLast && (
                      <span className="text-danger">{formik.errors.cccdLast}</span>
                    )}
                  </div>
                  <div className="col-md-12 mt-3 checkout-form-list mb-2">
                    <label>Mật khẩu</label>
                    <input
                      type="password"
                      placeholder="Nhập mật khẩu của bạn"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password && (
                      <span className="text-danger">{formik.errors.password}</span>
                    )}
                  </div>
                  <div className="col-md-12 checkout-form-list mb-2 mt-3">
                    <label>Xác nhận mật khẩu</label>
                    <input
                      type="password"
                      placeholder="Xác nhận lại mật khẩu của bạn"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.confirmPassword && (
                      <span className="text-danger">{formik.errors.confirmPassword}</span>
                    )}
                  </div>
                  <div className="col-md-12 mt-3 checkout-form-list mb-2 mt-3">
                    <label>Số tài khoản ngân hàng</label>
                    <input
                      type="text"
                      placeholder="Nhập số tài khoản ngân hàng của bạn"
                      name="bankAccountNumber"
                      value={formik.values.bankAccountNumber}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.errors.bankAccountNumber && (
                    <span className="text-danger">
                      {formik.errors.bankAccountNumber}
                    </span>
                  )}
                  <div className="col-md-12  checkout-form-list mb-2 mt-3">
                    <label>Tên ngân hàng</label>
                    <select
                      name="bankId"
                      value={formik.values.bankId}
                      onChange={formik.handleChange}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      <option selected value={0}>
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
                    {formik.errors.bankId && (
                      <span className="text-danger">
                        {formik.errors.bankId}
                      </span>
                    )}
                  </div>
                  <div className="col-md-12 mt-3 checkout-form-list mb-2 mt-3">
                    <label>Tên chủ tài khoản</label>
                    <input
                      type="text"
                      placeholder="Nhập tên chủ tài khoản"
                      name="bankAccountName"
                      value={formik.values.bankAccountName}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.bankAccountName && (
                      <span className="text-danger">
                        {formik.errors.bankAccountName}
                      </span>
                    )}
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseCreateAccount}>
                Đóng
              </Button>
              <Button variant="warning" onClick={handleSubmitForm}>
                Tạo
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};