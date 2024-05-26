import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { formatDateTime, formatTime } from "../../../utils/formatDateString";
import { NavBar } from "./NavBar";

export default function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    return (
        <>
            <header className="header-main_area">
                <div className="header-middle_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2">
                                <div className="header-logo">
                                    <Link to={"/"}>
                                        <img
                                            src="https://raw.githubusercontent.com/phuuthanh2003/AuctionWebApp_FE/master/template/public/assets/images/menu/logo/1.png"
                                            alt="Umino's Header Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="ion-android-call"></i>
                                    </div>
                                    <div className="contact-info_content">
                                        <span>Liên hệ</span>
                                        <a href="#">(+84) 123 321 345</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="hm-form_area">
                                    <form action="#" className="hm-searchbox">
                                        <input
                                            type="text"
                                            placeholder="Tìm kiếm sản phẩm..."
                                        />
                                        <button
                                            className="umino-search_btn"
                                            type="submit"
                                        >
                                            <i className="ion-android-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                                <div className="hm-minicart_area">
                                    <ul>
                                        <li>
                                            <h4>
                                                <div className="minicart-icon fw-bold">
                                                    <i className="ion-clock me-2" style={{ fontSize: "30px" }}></i>
                                                    {formatTime(currentTime)}<br />
                                                    <h6 className="mt-1">{formatDateTime(currentTime)}</h6>
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
                                            src="https://raw.githubusercontent.com/phuuthanh2003/AuctionWebApp_FE/master/template/public/assets/images/menu/logo/1.png"
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
                                                <a href="#">
                                                    Cách loại trang sức đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="umino-megamenu">
                                                    <li>
                                                        <span className="megamenu-title">
                                                            Chủng Loại
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Dây Chuyền
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nhẫn
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bông Tai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vòng Tay
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Lắc
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="dropdown-holder"
                                            >
                                                <a href="#">
                                                    Cuộc đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <a href="#">
                                                            Đấu giá sắp diễn ra
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Đấu giá đang diễn ra
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Đấu giá đã kết thúc
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Giới thiệu
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <a href="#">
                                                            Câu hỏi thường gặp
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Chính sách bảo mật
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Về chúng tôi</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                            >
                                                <NavLink to="/contact">Liên hệ</NavLink>
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
                                            <a href="#">
                                                <div>
                                                    <b style={{ fontSize: "18px" }}>{formatTime(currentTime)}</b><br />
                                                    {formatDateTime(currentTime)}
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-5 d-block d-lg-none">
                                <div className="mobile-menu_area">
                                    <ul>
                                        <li>
                                            <a
                                                href="#"
                                                className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block"
                                            >
                                                <i className="ion-navicon"></i>
                                            </a>
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
