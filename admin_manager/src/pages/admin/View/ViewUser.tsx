import { ChangeEvent, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { changeStateUser, editProfileUser, getUserById, rejectVerifyUser } from "../../../api/UserAPI";
import { User } from "../../../models/User";
import { Bank } from "../../../models/Bank";
import { City } from "../../../models/City";
import { District } from "../../../models/District";
import { Ward } from "../../../models/Ward";
import { getAddressVietNam } from "../../../api/AddressAPI";
import { getAllBanks } from "../../../api/BankAPI";
import { isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from "../../../utils/checkRegister";
import { SaveEditProfileModal } from "../Modal";
import "./View.css"
import { Button } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

interface MyAccountDetailProps {
  user: User | null;
  setUser: (user: User) => void;
}

const ViewUser: React.FC<MyAccountDetailProps> = (props) => {
  const [user, setUser] = useState<User | null>(props.user);
  const [originalUser, setOriginalUser] = useState<User | null>(props.user);
  const [isEditing, setIsEditing] = useState(false);
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

  useEffect(() => {
    getAddressVietNam()
      .then(data => {
        if (data) {
          setCities(data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    getAllBanks()
      .then((response) => {
        setBanks(response);
      })
      .catch((error) => {
        console.error(error.message);
      });


  }, [])

  useEffect(() => {
    setUser(props.user);
    setOriginalUser(props.user);
  }, [props.user])

  useEffect(() => {
    const userCity = cities.find(city => city.Name === user?.city);
    const userDistrict = userCity?.Districts.find(district => district.Name === user?.district);
    const userWard = userDistrict?.Wards.find(ward => ward.Name === user?.ward);

    if (userCity) {
      setSelectedCityId(userCity.Id);
      setDistricts(userCity?.Districts);
    }

    if (userDistrict) {
      setSelectedDistrictId(userDistrict.Id);
      setWards(userDistrict?.Wards);
    }

    if (userWard) {
      setSelectedWardId(userWard.Id);
    }
  }, [user]);


  const getBase64 = (file: File): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result ? (reader.result as string) : null);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && user) {
      const file = e.target.files[0];
      try {
        // if (file) {
        const base64 = await getBase64(file);
        if (base64) {
          const updatedUser: User = {
            ...user,
            avatar: base64
          };
          await editProfileUser(updatedUser);
        }
        // }
      } catch (error) {
        console.error("Error converting file to Base64: ", error);
      }
    }
  }

  if (!user) {
    return <div>Loading user details...</div>;
  }

  const handleEdit = async (confirm: boolean) => {
    if (isEditing === true && user) {
      try {
        if (!confirm) {
          setUser(originalUser)
          Swal.fire({
            icon: 'info',
            title: 'Thông báo',
            text: 'Thông tin chưa được cập nhật.',
          });
          return;
        } else {
          await editProfileUser(user);
          Swal.fire({
            icon: 'success',
            title: 'Thành công',
            text: 'Cập nhật thông tin thành công!',
          });
          return
        }
      } catch (error) {
        console.error("Error updating user profile: ", error);
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Có lỗi xảy ra khi cập nhật thông tin.',
        });
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleBankChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find(bank => bank.id === parseInt(event.target.value));
    setUser({ ...user, bank: selectedBank });
  };

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
      setUser(prevUser => prevUser ? { ...prevUser, city: selectedCity.Name, district: "", ward: "" } : null);
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
      setUser(prevUser => prevUser ? { ...prevUser, district: selectedDistrict.Name, ward: "" } : null);
    }
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const wardId = event.target.value;
    setSelectedWardId(wardId);
    const selectedWard = wards.find(ward => ward.Id === wardId);

    if (selectedWard) {
      setUser(prevUser => prevUser ? { ...prevUser, ward: selectedWard.Name } : null);
    }
  };

  const onChangeYob = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yob = e.target.value;
    let yobError = "";
    const isWrong = isYearOfBirthWrongFormat(parseInt(yob));
    if (isWrong) {
      yobError = "Năm sinh không hợp lệ!";
    }
    setErrors(prevErrors => ({ ...prevErrors, yob: yobError }));
    setUser({ ...user, yob: e.target.value })
  }

  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    let phoneError = "";
    const isWrong = isPhoneNumberWrongFormat(phone);
    if (isWrong) {
      phoneError = "Số điện thoại phải có ít nhất 10 ký tự và bắt đầu từ 0";
    }
    setErrors((prevErrors) => ({ ...prevErrors, phone: phoneError }));
    setUser({ ...user, phone: e.target.value });
  }

  const onChangeBankAccountNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let bankAccountNumberError = "";
    if (value === '') {
      bankAccountNumberError = "Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước";
    }
    setErrors((prevErrors) => ({ ...prevErrors, bankAccountNumber: bankAccountNumberError }));
    setUser({ ...user, bankAccountNumber: value });
  }

  const onChangeBankAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let bankAccountNameError = "";
    if (value === '') {
      bankAccountNameError = "Vui lòng nhập tên chủ thẻ ngân hàng";
    }
    setErrors((prevErrors) => ({ ...prevErrors, bankAccountName: bankAccountNameError }));
    setUser({ ...user, bankAccountName: value });
  }

  const handleAccept = () => {
    Swal.fire({
      icon: "question",
      title: "<span class='text-success fw-bold'>Đồng ý</span> xác thực cho tài khoản này?",
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
      preConfirm: async () => {
        try {
          await changeStateUser(user.id, "VERIFIED");
          const refreshedUser = await getUserById(user.id);
          setUser(refreshedUser);
          props.setUser(refreshedUser);
          Swal.fire({
            icon: "success",
            title: "Đã xác thực tài khoản thành công!",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Xác thực tài khoản thất bại!",
          });
        }
      },
    })
  }

  const handleReject = () => {
    Swal.fire({
      icon: "question",
      title: "<span class='text-danger fw-bold'>Từ chối</span> xác thực cho tài khoản này?",
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
      preConfirm: async () => {
        try {
          await rejectVerifyUser(user.id);
          const refreshedUser = await getUserById(user.id);
          setUser(refreshedUser);
          props.setUser(refreshedUser);
          Swal.fire({
            icon: "success",
            title: "Đã từ chối xác thực tài khoản!",
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Từ chối xác thực tài khoản thất bại!",
          });
        }
      },
    })
  }

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div
              className="row justify-content-center"
              style={{ padding: "40px 0px 0px 350px" }}
            >
              <div className="col-12">
                <div className="breadcrumb-area mb-4">
                </div>
                <div >
                  <div className="">
                    <h4 className="small-title mb-4">
                      Thông tin tài khoản
                    </h4>
                  </div>
                  <div className="myaccount-details">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                        <form >
                          <div className="login-form">
                            <div className="row profile-header-content mb-3">
                              <div
                                className="col-md-4 p-0"
                                style={{
                                  width: "170px",
                                  height: "170px",
                                  overflow: "hidden",
                                  borderRadius: "50%",
                                  position: "relative",
                                }}
                              >
                                <img src={user?.avatar} alt="avatar" style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }} />
                              </div>
                              <div className="col-md-6 profile-header-info ms-4">
                                <div className="content" style={{ width: "300px" }}>
                                  <h3>{user.fullName}</h3>
                                  <div className={user.state === 'VERIFIED' ? 'account-verified-text-div' : 'account-inverified-text-div'}>
                                    {user.state === "VERIFIED" ?
                                      <p className="account-verified-text-pc fw-bold">
                                        <img src="https://lacvietauction.vn/auctionart/upload/image/SuccessIcon.png" alt="" style={{ width: "20px" }} />
                                        Đã xác thực
                                      </p> :
                                      <p className="account-inverified-text-pc fw-bold">
                                        <img src="https://static-00.iconduck.com/assets.00/failure-icon-2048x2048-j8y0urc7.png" alt="" style={{ width: "20px", marginRight: "5px" }} />
                                        Chưa xác thực
                                      </p>}
                                  </div>
                                </div>
                                <label htmlFor="customFile" className="custom-file-upload btn btn-xs btn-primary mt-4" style={{ backgroundColor: "black", border: "none", color: "white", width: "140px" }}>
                                  Đổi ảnh đại diện
                                </label>
                                <input onChange={handleAvatarChange} id='customFile' type="file" accept="image/*" style={{ display: "none" }} />
                              </div>
                              {
                                (user.state !== 'VERIFIED' && user.cccdFirst && user.cccdLast) ?
                                  <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                    <Button type="button" className="btn" style={{ border: "none", background: "#2ec772" }} onClick={handleAccept}>
                                      <img style={{ width: "20px", margin: "-4px 4px 0 0" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/768px-Flat_tick_icon.svg.png" alt="" />
                                      Đồng ý xác thực
                                    </Button>
                                    <Button type="button" className="btn" style={{ border: "none", background: "#da4453", marginTop: "20px" }} onClick={handleReject}>
                                      <img style={{ width: "20px", margin: "-4px 4px 0 0" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/768px-Flat_cross_icon.svg.png" alt="" />
                                      Từ chối xác thực
                                    </Button>
                                  </div>
                                  : ""
                              }
                            </div>
                            <div className="row mb-4">
                              <div className="col-md-6 mt-4">
                                <label>Tên tài khoản</label>
                                <input className="mb-0 input-required"
                                  type="text"
                                  placeholder="Nhập username của bạn"
                                  style={{ backgroundColor: "#F5F5F5" }}
                                  value={user?.username}
                                  readOnly
                                />
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Email</label>
                                <input className="mb-0 input-required"
                                  type="email"
                                  placeholder="Nhập Email của bạn"
                                  style={{ backgroundColor: "#F5F5F5" }}
                                  value={user?.email}
                                  readOnly
                                />
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Họ</label>
                                <input className="mb-0 input-required"
                                  type="text"
                                  placeholder="Nhập họ của bạn"
                                  readOnly
                                  value={user?.firstName || ""}
                                  onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                />
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Tên</label>
                                <input
                                  type="text"
                                  className="mb-0 input-required"
                                  placeholder="Nhập tên của bạn"
                                  readOnly
                                  value={user?.lastName}
                                  onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                />
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Năm sinh</label>
                                <input
                                  className="mb-0 input-required"
                                  type="text"
                                  placeholder="Nhập năm sinh"
                                  readOnly
                                  value={user?.yob}
                                  onChange={onChangeYob}
                                />
                                {errors.yob && <span className="text-danger">{errors.yob}</span>}
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Địa chỉ</label>
                                <input
                                  className="input-required"
                                  type="text"
                                  placeholder="Nhập địa chỉ của bạn"
                                  readOnly
                                  value={user?.address}
                                  onChange={(e) => setUser({ ...user, address: e.target.value })}
                                />
                              </div>
                              <div className="col-md-4">
                                <label>Tỉnh</label>
                                <select id="city" disabled={!isEditing} value={selectedCityId} onChange={handleCityChange} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }} >
                                  <option disabled value={""}>{user.city}</option>
                                  {cities.map(city => (
                                    <option key={city.Id} value={city.Id}>{city.Name}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="col-md-4">
                                <label>Quận / Huyện</label>
                                <select id="district" disabled={!isEditing} value={selectedDistrictId} onChange={handleDistrictChange} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}>
                                  <option disabled value={""}>{user.district}</option>
                                  {districts.map(district => (
                                    <option key={district.Id} value={district.Id}>{district.Name}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="col-md-4">
                                <label>Phường / Xã</label>
                                <select id="ward" disabled={!isEditing} value={selectedWardId} onChange={handleWardChange} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}>
                                  <option disabled value={""}>{user.ward}</option>
                                  {wards.map(ward => (
                                    <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Số CCCD</label>
                                <input
                                  className="mb-0 input-required"
                                  type="text"
                                  placeholder="Nhập số căn cước"
                                  readOnly
                                  value={user?.cccd}
                                  onChange={(e) =>
                                    setUser({ ...user, cccd: e.target.value })
                                  }
                                />
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Nơi Cấp</label>
                                <input
                                  className="mb-0 input-required"
                                  type="text"
                                  placeholder="Nhập nơi cấp CCCD"
                                  readOnly
                                  value={user?.cccdFrom}
                                  onChange={(e) =>
                                    setUser({ ...user, cccdFrom: e.target.value })
                                  }
                                />
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                                <label htmlFor="counterparty_IdCardPhoto1Company_Upload">
                                  <input type="file" disabled={!isEditing} id="counterparty_IdCardPhoto1Company_Upload"
                                    style={{ display: "none" }} />
                                  {user.cccdFirst
                                    ? (<img id="img_IdCardPhoto1CompanySelect" style={{ width: "100%", borderRadius: "5px", cursor: "pointer", height: "292px", display: "block" }} src={user.cccdFirst} alt="" />)
                                    : (
                                      <div id="img_IdCardPhoto1Company" style={{ width: "100%", cursor: "pointer", height: "292px", background: !isEditing ? "#f5f5f5" : "#EDF7FC", border: "1px dashed #C5D7FC", borderRadius: "4px", display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "32px", paddingBottom: "32px", flexFlow: "column" }}>
                                        <img src="https://lacvietauction.vn/auctionart/upload/image/SelectCMNDFIrst.png" alt="Alternate Text" style={{ width: "113.6px", height: "64px", margin: "auto" }} />
                                        <p className="upload-CMND-text" style={{ marginTop: "24px" }}>Tải lên ảnh mặt trước CMND/CCCD</p>
                                        <p className="upload-CMND-text2">(JPG, PNG kích thước nhỏ hơn 10MB)</p>
                                      </div>
                                    )}
                                  <input id="counterparty_IdCardPhoto1Company" style={{ display: "none" }} />
                                  <button type="button" className="buttonEditImgCMND1" style={{ display: !isEditing ? "none" : "block" }} onClick={() => document.getElementById('counterparty_IdCardPhoto1Company_Upload')?.click()}>Tải lên ảnh khác</button>
                                </label>
                              </div>
                              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                                <label htmlFor="counterparty_IdCardPhoto2Company_Upload">
                                  <input type="file" disabled={!isEditing} id="counterparty_IdCardPhoto2Company_Upload"
                                    style={{ display: "none" }} />
                                  {user.cccdLast
                                    ? (<img id="img_IdCardPhoto2CompanySelect" style={{ width: "100%", borderRadius: "5px", cursor: "pointer", height: "292px", display: "block" }} src={user.cccdLast} alt="" />)
                                    : (
                                      <div id="img_IdCardPhoto1Company" style={{ width: "100%", cursor: "pointer", height: "292px", background: !isEditing ? "#f5f5f5" : "#EDF7FC", border: "1px dashed #C5D7FC", borderRadius: "4px", display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "32px", paddingBottom: "32px", flexFlow: "column" }}>
                                        <img src="	https://lacvietauction.vn/auctionart/upload/image/UploadCMNDLast.png" alt="Alternate Text" style={{ width: "113.6px", height: "64px", margin: "auto" }} />
                                        <p className="upload-CMND-text" style={{ marginTop: "24px" }}>Tải lên ảnh mặt sau CMND/CCCD</p>
                                        <p className="upload-CMND-text2">(JPG, PNG kích thước nhỏ hơn 10MB)</p>
                                      </div>
                                    )}
                                  <input id="counterparty_IdCardPhoto2Company" style={{ display: "none" }} />
                                  <button type="button" className="buttonEditImgCMND2 mb-0" style={{ display: !isEditing ? "none" : "block" }} onClick={() => document.getElementById('counterparty_IdCardPhoto2Company_Upload')?.click()}>Tải lên ảnh khác</button>
                                </label>
                              </div>
                              <div className="col-md-12 mt-4">
                                <label>Ngân hàng</label>
                                <select onChange={handleBankChange} disabled value={user.bank?.id} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}>
                                  {banks.map((bank) => (
                                    <option style={{ padding: '5px' }} key={bank.id} value={bank.id}>
                                      {bank.bankName} ({bank.tradingName})
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Số tài khoản ngân hàng</label>
                                <input
                                  className="input-required"
                                  type="text"
                                  placeholder="Nhập số tài khoản ngân hàng của bạn"
                                  readOnly
                                  value={user?.bankAccountNumber}
                                  onChange={onChangeBankAccountNumber}
                                />
                                {errors.bankAccountNumber && <span className="text-danger">{errors.bankAccountNumber}</span>}
                              </div>
                              <div className="col-md-6 mt-4">
                                <label>Tên chủ tài khoản ngân hàng</label>
                                <input
                                  className="input-required"
                                  type="text"
                                  placeholder="Nhập tên chủ tài khoản ngân hàng"
                                  readOnly
                                  value={user?.bankAccountName}
                                  onChange={onChangeBankAccountName}
                                />
                                {errors.bankAccountName && <span className="text-danger">{errors.bankAccountName}</span>}
                              </div>
                              <div className="col-md-12">
                                <label>Sô điện thoại</label>
                                <input
                                  className="input-required"
                                  type="text"
                                  placeholder="Nhập số điện thoại của bạn"
                                  readOnly
                                  value={user?.phone}
                                  onChange={onChangePhoneNumber}
                                />
                                {errors.phone && <span className="text-danger">{errors.phone}</span>}
                              </div>
                              <div className="col-12">
                                <SaveEditProfileModal user={user} handleEdit={handleEdit} isEditing={isEditing} setIsEditing={setIsEditing} />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewUser;
