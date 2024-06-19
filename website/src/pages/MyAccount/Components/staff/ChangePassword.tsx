import React, { ChangeEvent, useState } from "react";
import { User } from "../../../../models/User";
import { ChangePasswordConfirm } from "../../Modal/Modal";
import { isPasswordWrongFormat } from "../../../../utils/checkRegister";
import { useTranslation } from "react-i18next";

interface ChangePasswordProps {
  user: User | null;
}

export const ChangePassword: React.FC<ChangePasswordProps> = ({ user }) => {
  const [request, setRequest] = useState({
    token: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [newPasswordError, setNewPasswordError] = useState("");
  const [newCfPasswordError, setCfNewPasswordError] = useState("");

  const handleChange =
    (key: keyof typeof request) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      let error = "";

      if (key === "newPassword") {
        error = validatePassword(value);
        setNewPasswordError(error);
      } else if (key === "confirmPassword") {
        error = validateConfirmPassword(value, request.newPassword);
        setCfNewPasswordError(error);
      }

      setRequest((prevValue) => ({ ...prevValue, [key]: value }));
    };

  const validatePassword = (value: string): string => {
    return isPasswordWrongFormat(value)
      ? "Mật khẩu phải có ít nhất 8 ký tự và 1 ký tự đặc biệt."
      : "";
  };

  const validateConfirmPassword = (
    value: string,
    newPassword: string
  ): string => {
    return value !== newPassword ? "Mật khẩu mới không khớp." : "";
  };

  const { t } = useTranslation(["ChangePassword"]);

  return (
    <div
      className="tab-pane fade"
      id="change-password"
      role="tabpanel"
      aria-labelledby="account-details-tab"
    >
      <div className="">
        <h4 className="small-title mb-4">{t("ChangePassword.Đổi mật khẩu")}</h4>
      </div>
      <div className="myaccount-details">
        <div className="row">
          <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">
            <form>
              <div className="login-form">
                <div className="row mb-4">
                  <div className="col-md-12">
                    <label>{t("ChangePassword.Mật khẩu hiện tại")}</label>
                    <input
                      className="mb-0 input-required"
                      type="password"
                      placeholder={t("ChangePassword.Mật khẩu hiện tại")}
                      style={{ backgroundColor: "#F5F5F5" }}
                      value={request.oldPassword}
                      onChange={handleChange("oldPassword")}
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <label>{t("ChangePassword.Mật khẩu mới")}</label>
                    <input
                      className="mb-0 input-required"
                      type="password"
                      placeholder={t("ChangePassword.Mật khẩu mới")}
                      value={request.newPassword}
                      onChange={handleChange("newPassword")}
                    />
                  </div>
                  {newPasswordError && (
                    <span className="text-danger fw-bold">
                      {newPasswordError}
                    </span>
                  )}
                  <div className="col-md-12 mt-4">
                    <label>{t("ChangePassword.Nhập lại mật khẩu mới")}</label>
                    <input
                      className="mb-0 input-required"
                      type="password"
                      placeholder={t("ChangePassword.Nhập lại mật khẩu mới")}
                      value={request.confirmPassword}
                      onChange={handleChange("confirmPassword")}
                    />
                  </div>
                  {newCfPasswordError && (
                    <span className="text-danger fw-bold">
                      {newCfPasswordError}
                    </span>
                  )}
                  <div className="col-12">
                    <ChangePasswordConfirm
                      setRequest={setRequest}
                      request={request}
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
