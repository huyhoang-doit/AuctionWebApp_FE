import { ChangeEvent, useContext, useEffect, useState } from "react";
import { User } from "../../../models/User";
import { editProfileUser } from "../../../api/UserAPI";
import { SaveEditProfileModal } from "../Modal/Modal";
import { getAllBanks } from "../../../api/BankAPI";
import { Bank } from "../../../models/Bank";
import { City } from "../../../models/City";
import { District } from "../../../models/District";
import { Ward } from "../../../models/Ward";
import { toast } from "react-toastify";
import { getAddressVietNam } from "../../../api/AddressAPI";
import {
  isPhoneNumberWrongFormat,
  isYearOfBirthWrongFormat,
} from "../../../utils/checkRegister";
import { UserContext } from "../../../hooks/useContext";
import { useTranslation } from "react-i18next";

interface MyAccountDetailProps {
  user: User | null;
  setUser: (user: User) => void;
  isAfterPay: boolean;
}

export const MyAccountDetail: React.FC<MyAccountDetailProps> = (props) => {
  const { t } = useTranslation(["MyAccountDetail"]);

  const [user, setUser] = useState<User | null>(props.user);
  const [originalUser, setOriginalUser] = useState<User | null>(props.user);
  const [isEditing, setIsEditing] = useState(false);
  const [banks, setBanks] = useState<Bank[]>([]);
  const context = useContext(UserContext);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const [wards, setWards] = useState<Ward[]>([]);
  const [selectedWardId, setSelectedWardId] = useState<string>("");

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

  useEffect(() => {
    setUser(props.user);
    setOriginalUser(props.user);
  }, [props.user]);

  useEffect(() => {
    const userCity = cities.find((city) => city.Name === user?.city);
    const userDistrict = userCity?.Districts.find(
      (district) => district.Name === user?.district
    );
    const userWard = userDistrict?.Wards.find(
      (ward) => ward.Name === user?.ward
    );

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
      reader.onload = () =>
        resolve(reader.result ? (reader.result as string) : null);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && user) {
      const file = e.target.files[0];
      try {
        // if (file) {
        const base64 = await getBase64(file);
        if (base64) {
          const updatedUser: User = {
            ...user,
            avatar: base64,
          };
          const response = await editProfileUser(updatedUser);
          toast.success(t("MyAccountDetail.Cập nhật ảnh đại diện thành công!"));
          setUser(response);
          props.setUser(response);
          if (context && context.account) {
            context.setAccount(response);
          }
        }
        // }
      } catch (error) {
        console.error("Error converting file to Base64: ", error);
      }
    }
  };

  if (!user) {
    return <div>Loading user details...</div>;
  }

  const handleEdit = async (confirm: boolean) => {
    if (isEditing === true && user) {
      try {
        if (!confirm) {
          setUser(originalUser);
          toast.info(t("MyAccountDetail.Cập nhật ảnh đại diện thành công!"));
          return;
        } else {
          const response = await editProfileUser(user);
          props.setUser(response);
          if (context && context.account) {
            context.setAccount(response);
          }
          toast.success(t("MyAccountDetail.Cập nhật thông tin thành công!"));
          return;
        }
      } catch (error) {
        console.error("Error updating user profile: ", error);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleBankChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedBank = banks.find(
      (bank) => bank.id === parseInt(event.target.value)
    );
    setUser({ ...user, bank: selectedBank });
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
      setUser((prevUser) =>
        prevUser
          ? { ...prevUser, city: selectedCity.Name, district: "", ward: "" }
          : null
      );
    }
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtId = event.target.value;
    setSelectedDistrictId(districtId);
    setWards([]);
    setSelectedWardId("");
    const selectedDistrict = districts.find(
      (district) => district.Id === districtId
    );

    if (selectedDistrict) {
      setWards(selectedDistrict.Wards);
      setUser((prevUser) =>
        prevUser
          ? { ...prevUser, district: selectedDistrict.Name, ward: "" }
          : null
      );
    }
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const wardId = event.target.value;
    setSelectedWardId(wardId);
    const selectedWard = wards.find((ward) => ward.Id === wardId);

    if (selectedWard) {
      setUser((prevUser) =>
        prevUser ? { ...prevUser, ward: selectedWard.Name } : null
      );
    }
  };

  const onChangeYob = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yob = e.target.value;
    let yobError = "";
    const isWrong = isYearOfBirthWrongFormat(yob);
    if (isWrong) {
      yobError = t("MyAccountDetail.Năm sinh không hợp lệ!");
    }
    setErrors((prevErrors) => ({ ...prevErrors, yob: yobError }));
    setUser({ ...user, yob: e.target.value });
  };

  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    let phoneError = "";
    const isWrong = isPhoneNumberWrongFormat(phone);
    if (isWrong) {
      phoneError = t(
        "MyAccountDetail.Số điện thoại phải có ít nhất 10 ký tự và bắt đầu từ 0"
      );
    }
    setErrors((prevErrors) => ({ ...prevErrors, phone: phoneError }));
    setUser({ ...user, phone: e.target.value });
  };

  const onChangeBankAccountNumber = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    let bankAccountNumberError = "";
    if (value === "") {
      bankAccountNumberError = t(
        "MyAccountDetail.Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước"
      );
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      bankAccountNumber: bankAccountNumberError,
    }));
    setUser({ ...user, bankAccountNumber: value });
  };

  const onChangeBankAccountName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let bankAccountNameError = "";
    if (value === "") {
      bankAccountNameError = t(
        "MyAccountDetail.Vui lòng nhập tên chủ thẻ ngân hàng"
      );
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      bankAccountName: bankAccountNameError,
    }));
    setUser({ ...user, bankAccountName: value });
  };

  return (
    <div
      className={`tab-pane fade ${!props.isAfterPay ? "active" : ""}`}
      id="account-details"
      role="tabpanel"
      aria-labelledby="account-details-tab"
    >
      <div className="">
        <h4 className="small-title mb-4">
          {t("MyAccountDetail.Thông tin tài khoản")}
        </h4>
      </div>
      <div className="myaccount-details">
        <div className="row">
          <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">
            <form>
              <div className="login-form">
                <div className="row profile-header-content">
                  <div
                    className="col-md-4 p-0"
                    style={{
                      width: "150px",
                      height: "150px",
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
                  <div className="col-md-8 profile-header-info">
                    <h4 className="fw-bold m-t-sm">
                      {context?.account?.fullName}
                    </h4>
                    <label
                      htmlFor="customFile"
                      className="custom-file-upload btn btn-xs btn-primary mt-4"
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                        width: "140px",
                      }}
                    >
                      {t("MyAccountDetail.Đổi ảnh đại diện")}
                    </label>
                    <input
                      onChange={handleAvatarChange}
                      id="customFile"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label>{t("MyAccountDetail.Số CCCD")}</label>
                    <input
                      className="mb-0 input-required"
                      type="text"
                      placeholder={t("MyAccountDetail.Nhập số căn cước")}
                      readOnly
                      style={{ backgroundColor: "#F5F5F5" }}
                      value={user?.cccd}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>{t("MyAccountDetail.Năm sinh")}</label>
                    <input
                      className="mb-0 input-required"
                      type="text"
                      placeholder={t("MyAccountDetail.Nhập năm sinh")}
                      readOnly
                      value={user?.yob}
                      onChange={onChangeYob}
                    />
                    {errors.yob && (
                      <span className="text-danger">{errors.yob}</span>
                    )}
                  </div>
                  <div className="col-md-6 mt-4">
                    <label>{t("MyAccountDetail.Tên tài khoản")}</label>
                    <input
                      className="mb-0 input-required"
                      type="text"
                      placeholder={t("MyAccountDetail.Nhập tên tài khoản")}
                      style={{ backgroundColor: "#F5F5F5" }}
                      value={user?.username}
                    />
                  </div>
                  <div className="col-md-6 mt-4">
                    <label>Email</label>
                    <input
                      className="mb-0 input-required"
                      type="email"
                      placeholder={t("MyAccountDetail.Nhập Email của bạn")}
                      style={{ backgroundColor: "#F5F5F5" }}
                      readOnly
                      value={user?.email}
                    />
                  </div>
                  <div className="col-md-6 mt-4">
                    <label>{t("MyAccountDetail.Họ")}</label>
                    <input
                      className="mb-0 input-required"
                      type="text"
                      placeholder={t("MyAccountDetail.Nhập họ của bạn")}
                      readOnly
                      value={user?.firstName || ""}
                      onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mt-4">
                    <label>{t("MyAccountDetail.Tên")}</label>
                    <input
                      type="text"
                      className="mb-0 input-required"
                      placeholder={t("MyAccountDetail.Nhập tên của bạn")}
                      readOnly
                      value={user?.lastName}
                      onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <label>{t("MyAccountDetail.Địa chỉ")}</label>
                    <input
                      className="input-required"
                      type="text"
                      placeholder={t("MyAccountDetail.Nhập địa chỉ của bạn")}
                      readOnly
                      value={user?.address}
                      onChange={(e) =>
                        setUser({ ...user, address: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <label>{t("MyAccountDetail.Tỉnh")}</label>
                    <select
                      id="city"
                      disabled={!isEditing}
                      value={selectedCityId}
                      onChange={handleCityChange}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      <option disabled value={""}>
                        {user.city}
                      </option>
                      {cities.map((city) => (
                        <option key={city.Id} value={city.Id}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>{t("MyAccountDetail.Quận / Huyện")}</label>
                    <select
                      id="district"
                      disabled={!isEditing}
                      value={selectedDistrictId}
                      onChange={handleDistrictChange}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      <option disabled value={""}>
                        {user.district}
                      </option>
                      {districts.map((district) => (
                        <option key={district.Id} value={district.Id}>
                          {district.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label>{t("MyAccountDetail.Phường / Xã")}</label>
                    <select
                      id="ward"
                      disabled={!isEditing}
                      value={selectedWardId}
                      onChange={handleWardChange}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 0 0 10px",
                      }}
                    >
                      <option disabled value={""}>
                        {user.ward}
                      </option>
                      {wards.map((ward) => (
                        <option key={ward.Id} value={ward.Id}>
                          {ward.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label>{t("MyAccountDetail.Ngân hàng")}</label>
                    <select
                      onChange={handleBankChange}
                      disabled
                      value={user.bank?.id}
                      style={{
                        width: "100%",
                        height: "40px",
                        padding: "0 0 0 10px",
                      }}
                    >
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
                  </div>
                  <div className="col-md-6 mt-4">
                    <label>{t("MyAccountDetail.Số tài khoản ngân hàng")}</label>
                    <input
                      className="input-required"
                      type="text"
                      placeholder={t(
                        "MyAccountDetail.Nhập số tài khoản ngân hàng của bạn"
                      )}
                      readOnly
                      value={user?.bankAccountNumber}
                      onChange={onChangeBankAccountNumber}
                    />
                    {errors.bankAccountNumber && (
                      <span className="text-danger">
                        {errors.bankAccountNumber}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6 mt-4">
                    <label>
                      {t("MyAccountDetail.Tên chủ tài khoản ngân hàng")}
                    </label>
                    <input
                      className="input-required"
                      type="text"
                      placeholder={t(
                        "MyAccountDetail.Nhập tên chủ tài khoản ngân hàng"
                      )}
                      readOnly
                      value={user?.bankAccountName}
                      onChange={onChangeBankAccountName}
                    />
                    {errors.bankAccountName && (
                      <span className="text-danger">
                        {errors.bankAccountName}
                      </span>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label> {t("MyAccountDetail.Số điện thoại")}</label>
                    <input
                      className="input-required"
                      type="text"
                      placeholder={t(
                        "MyAccountDetail.Nhập số điện thoại của bạn"
                      )}
                      readOnly
                      value={user?.phone}
                      onChange={onChangePhoneNumber}
                    />
                    {errors.phone && (
                      <span className="text-danger">{errors.phone}</span>
                    )}
                  </div>
                  <div className="col-12">
                    <SaveEditProfileModal
                      user={user}
                      handleEdit={handleEdit}
                      isEditing={isEditing}
                      setIsEditing={setIsEditing}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
