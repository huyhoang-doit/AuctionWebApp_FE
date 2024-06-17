import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import { formatDateTime, formatTime } from "../../../utils/formatDateString";
import { NavBar } from "./NavBar";
import { useCategories } from "../../../hooks/useCategories";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "../../../i18n/i18n";
import { locales } from "../../../i18n/i18n";
export default function Header() {
  //==== i18n
  const currentLanguage = locales[i18n.language as keyof typeof locales]; // i18n get current language
  const { t } = useTranslation(["home"]); // i18n translation
  const [selectedLanguage, setSelectedLanguage] = useState("Tiếng Việt"); // default language is Vietnamese
  const changeLanguage = (lng: "en" | "vi") => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng === "vi" ? "Tiếng Việt" : "English");
  };
  //==========
  const categories = useCategories();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [txtSearch, setTxtSearch] = useState("");
  const navigate = useNavigate();
  const handleChangeTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTxtSearch(e.target.value);
  };

  const handleSearch = () => {
    navigate(
      txtSearch ? `/danh-sach-dau-gia/name/${txtSearch}` : "/danh-sach-dau-gia"
    );
    setTxtSearch("");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="header-main_area">
        <div className="header-middle_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <div className="header-logo">
                  <Link to={"/"}>
                    <img
                      src="/assets/images/menu/logo/1.png"
                      alt="DGS's Logo"
                    />
                  </Link>
                </div>
              </div>
              {/* <div className="col-lg-2 d-none d-lg-block">
                <div className="contact-info">
                  <div className="contact-info_icon">
                    <i className="ion-android-call"></i>
                  </div>
                  <div className="contact-info_content">
                    <span>{t("header-middle_area.LienHe")}</span>
                    <Link to="#">(+84) 0123456789</Link>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-2 d-none d-lg-block" style={{ fontSize: '20px', padding: '20px' }}>
                <div className="language-dropdown">
                  <div className="language-selected">
                    <i className="ion-earth"></i>
                    <span>{selectedLanguage}</span>
                    <ul className="language-menu">
                      <li onClick={() => changeLanguage("vi")}>Tiếng Việt</li>
                      <li onClick={() => changeLanguage("en")}>English</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="hm-form_area">
                  <form action="#" className="hm-searchbox">
                    <input
                      type="text"
                      value={txtSearch}
                      placeholder={t("header-middle_area.TimKiemSanPham")}
                      onChange={handleChangeTextInput}
                    />
                    <button
                      className="umino-search_btn"
                      type="button"
                      onClick={handleSearch}
                      title="Search"
                    >
                      <i className="ion-android-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <div className="hm-minicart_area">
                  <ul>
                    <li>
                      <h4>
                        <div className="minicart-icon fw-bold">
                          <i
                            className="ion-clock me-2"
                            style={{ fontSize: "30px" }}
                          ></i>
                          {formatTime(currentTime)}
                          <br />
                          <h6 className="mt-1">
                            {formatDateTime(currentTime)}
                          </h6>
                        </div>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBar />

        <div className="header-bottom_area header-sticky stick">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-7">
                <div className="header-logo">
                  <Link to={"/"}>
                    <img
                      src="/assets/images/menu/logo/1.png"
                      alt="Umino's Header Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 d-none d-lg-block position-static">
                <div className="main-menu_area">
                  <nav className="main_nav">
                    <ul>
                      <li className="megamenu-holder">
                        <Link to={"/danh-sach-dau-gia"}>
                          Cách loại trang sức đấu giá
                          <i className="ion-chevron-down"></i>
                        </Link>
                        <ul
                          className="umino-megamenu"
                          style={{ marginLeft: "180px", width: "400px" }}
                        >
                          <li>
                            <span className="megamenu-title w-100">
                              Chủng Loại
                            </span>
                            <ul>
                              {React.Children.toArray(
                                categories.map((category) => (
                                  <li>
                                    <NavLink
                                      to={
                                        "/danh-sach-dau-gia/category/" +
                                        category.id
                                      }
                                    >
                                      {category.name}
                                    </NavLink>
                                  </li>
                                ))
                              )}
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <NavLink to={"/danh-sach-dau-gia"}>
                          Cuộc đấu giá
                          <i className="ion-chevron-down"></i>
                        </NavLink>
                        <ul className="hm-dropdown">
                          <li>
                            <Link to={"/danh-sach-dau-gia/state/WAITING"}>
                              Đấu giá sắp diễn ra
                            </Link>
                          </li>
                          <li>
                            <Link to={"/danh-sach-dau-gia/state/ONGOING"}>
                              Đấu giá đang diễn ra
                            </Link>
                          </li>
                          <li>
                            <Link to={"/danh-sach-dau-gia/state/FINISHED"}>
                              Đấu giá đã kết thúc
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={"/gioi-thieu"}>
                          Giới thiệu
                          <i className="ion-chevron-down"></i>
                        </Link>
                        <ul className="hm-dropdown">
                          <li>
                            <a
                              href="https://drive.google.com/file/d/1bgQ-1IqhUr5RTYUHzO3hdsLthpZask_X/view?usp=drive_link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Hướng dẫn đấu giá
                            </a>
                          </li>
                          <li>
                            <Link to={"/gioi-thieu"}>Về chúng tôi</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/lien-he">Liên hệ</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="hm-minicart_area">
                  <ul className="d-flex align-items-center justify-content-center">
                    {/* <li>
                                            <a href="#">
                                                <div className="minicart-icon wishlist-icon">
                                                    <i className="fa-regular fa-bell"></i>
                                                    <span className="item-count">
                                                        2
                                                    </span>
                                                </div>
                                            </a>
                                        </li> */}
                    <li>
                      <Link to={"/"}>
                        <div>
                          <b style={{ fontSize: "18px" }}>
                            {formatTime(currentTime)}
                          </b>
                          <br />
                          {formatDateTime(currentTime)}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-5 d-block d-lg-none">
                <div className="mobile-menu_area">
                  <ul>
                    <li>
                      <Link
                        to="#"
                        className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block"
                      >
                        <i className="ion-navicon"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
