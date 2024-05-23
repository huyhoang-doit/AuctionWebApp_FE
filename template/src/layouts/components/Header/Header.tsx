import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../api/CategoryAPI";
import { Category } from "../../../models/Category";
import { jwtDecode } from "jwt-decode";
import { handleLogout } from "../../../utils/logout";
import { formatDateTime, formatTime } from "../../../utils/formatDateString";

export default function Header() {
    const [categories, setCategories] = useState<Category[]>([])
    const [currentTime, setCurrentTime] = useState(new Date());
    const [username, setUsername] = useState<string | null>("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const userData = jwtDecode(token);
            if (userData) {
                const decodedUsername = userData.sub + "";
                setUsername(decodedUsername);
            }
        }
        console.log(username)
        getAllCategories()
            .then((response) => {
                setCategories(response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [username]);

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
                                            src="assets/images/menu/logo/1.png"
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
                <div className="header-bottom_area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-9 col-sm-7">
                                <div className="category-menu category-menu-hidden">
                                    <div className="category-heading">
                                        <h2 className="categories-toggle">
                                            <span>Các loại trang sức đấu giá</span>
                                        </h2>
                                    </div>
                                    <div
                                        id="cate-toggle"
                                        className="category-menu-list none"
                                    >
                                        <ul>
                                            {React.Children.toArray(categories.map(
                                                (category) => <li
                                                    className="right-menu"
                                                >
                                                    <Link to={"/shop-left-sibar/category/" + category.id}>{category.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 d-none d-lg-block position-static">
                                <div className="main-menu_area">
                                    <nav className="main_nav">
                                        <ul>
                                            <li
                                                className="dropdown-holder"
                                            >
                                                <NavLink to={"/shop-left-sibar"}>
                                                    Cuộc đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </NavLink>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <Link to={"/shop-left-sibar/state/WAITING"}>
                                                            Đấu giá sắp diễn ra
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/shop-left-sibar/state/ONGOING"}>
                                                            Đấu giá đang diễn ra
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/shop-left-sibar/state/FINISHED"}>
                                                            Đấu giá đã kết thúc
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to={"/about"}>
                                                    Giới thiệu
                                                    <i className="ion-chevron-down"></i>
                                                </Link>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <Link to={"/QA"}>
                                                            Câu hỏi thường gặp
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/privacy_policy"}>
                                                            Chính sách bảo mật
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Về chúng tôi
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                            >
                                                <NavLink to="/contact">Liên hệ</NavLink>
                                            </li>
                                            <li
                                            >
                                                <NavLink to="/form-send-jewerly">Gửi sản phẩm đấu giá</NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                {!username &&
                                    <div className="login-area">
                                        <Link to={"/login"}>
                                            Đăng nhập
                                        </Link><span> | </span>
                                        <Link to={"/register"}>
                                            Đăng ký
                                        </Link>

                                    </div>
                                }
                                {
                                    username &&
                                    <div className="login-area pt-0">
                                        <Link to={"/my-account"}>
                                            <div className="d-flex justify-content-between align-items-center btn" style={{ height: '58px', backgroundColor: '#fed100' }}>
                                                <div className="text-center mb-0 me-2">
                                                    <h6 className="fw-semibold mb-0">Thông tin tài khoản {username}</h6>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center" style={{ height: '40px', width: '40px' }}>
                                                    <i className="fa-solid fa-user fs-5"></i>
                                                </div>
                                            </div>
                                        </Link><span> | </span>
                                        <button onClick={() => {
                                            handleLogout()
                                            setUsername('')
                                        }}>
                                            ĐĂNG XUẤT
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className="col-md-3 col-sm-5 d-block d-lg-none">
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
                <div className="header-bottom_area header-sticky stick">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-7">
                                <div className="header-logo">
                                    <Link to={"/"}>
                                        <img
                                            src="assets/images/menu/logo/1.png"
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
                                                    <li>
                                                        <span className="megamenu-title">
                                                            Chất Liệu
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch Kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
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
                                        <li>
                                            <a href="#">
                                                <div className="minicart-icon wishlist-icon">
                                                    <i className="fa-regular fa-bell"></i>
                                                    <span className="item-count">
                                                        2
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
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
