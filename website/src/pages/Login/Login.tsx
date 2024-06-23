import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { handleActiveUser, login } from "../../api/AuthenticationAPI";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      if (token === "reset-success") {
        setNotification(t("Login.Đổi mật khẩu thành công vui lòng đăng nhập!"));
        return;
      }
      handleActiveUser(token)
        .then((result) => {
          if (result) {
            setNotification(
              t("Login.Kích hoạt tài khoản thành công vui lòng đăng nhập!")
            );
          } else {
            setNotification("");
            setError(t("Login.Kích hoạt tài khoản không thành công!"));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  const onChangeLoginRequest =
    (key: keyof typeof loginRequest) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginRequest((preValue) => ({ ...preValue, [key]: e.target.value }));
    };

  const handleLogin = async () => {
    const success = await login(loginRequest, setError);

    if (success) {
      // navigate("/")
      window.location.href = "/";
    } else {
      setLoginRequest({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  const { t } = useTranslation(["Login"]);

  return (
    <>
      {/* <!-- Begin Umino's Breadcrumb Area --> */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">{t("Login.Trang chủ")}</a>
              </li>
              <li className="active">{t("Login.Đăng nhập")}</li>
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
                  <h4 className="login-title">{t("Login.Đăng nhập")}</h4>
                  {notification && (
                    <h5 className="fw-bold" style={{ color: "green" }}>
                      {notification}
                    </h5>
                  )}
                  <div className="row mb-4">
                    <div className="col-md-12 col-12">
                      <label>{t("Login.Tên đăng nhập/ Email")}</label>
                      <input
                        type="text"
                        value={loginRequest.username}
                        onChange={onChangeLoginRequest("username")}
                        placeholder={t("Login.Tên đăng nhập/ Email")}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                    <div className="col-12 mb--20">
                      <label>{t("Login.Mật khẩu")}</label>
                      <input
                        type="password"
                        value={loginRequest.password}
                        onChange={onChangeLoginRequest("password")}
                        placeholder={t("Login.Nhập mật khẩu")}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">
                          {t("Login.Nhớ mật khẩu")}
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="forgotton-password_info">
                        <Link to={"/quen-mat-khau"}>
                          {t("Login.Quên mật khẩu?")}
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="login_btn"
                        onClick={handleLogin}
                      >
                        {t("Login.Đăng nhập")}
                      </button>
                      {error && (
                        <div className="mt-2" style={{ color: "red" }}>
                          {error}
                        </div>
                      )}
                    </div>
                  </div>

                  <Link to={"/dang-ky"}>
                    {t("Login.Bạn chưa có tài khoản ?")}
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
