import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import React, { useEffect, useState } from "react";
import { formatDateTime, formatTime } from "../../../utils/formatDateString";
import { NavBar } from "./NavBar";
import { useCategories } from "../../../hooks/useCategories";

export default function Header() {
    const categories = useCategories();
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
                                            alt="DGS's Logo"
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
                                                <Link to={"/shop-left-sibar"}>
                                                    Cách loại trang sức đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </Link>
                                                <ul className="umino-megamenu" style={{ marginLeft: '180px', width: '400px' }}>
                                                    <li>
                                                        <span className="megamenu-title w-100">
                                                            Chủng Loại
                                                        </span>
                                                        <ul>
                                                            {React.Children.toArray(categories.map(
                                                                (category) => <li
                                                                >
                                                                    <NavLink to={"/shop-left-sibar/category/" + category.id}>{category.name}</NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
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
                                                        <a
                                                            href="https://drive.google.com/file/d/1bgQ-1IqhUr5RTYUHzO3hdsLthpZask_X/view?usp=drive_link"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Hướng dẫn đấu giá
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to={"/about"}>
                                                            Về chúng tôi
                                                        </Link>
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
                                            <Link to={"/"}>
                                                <div>
                                                    <b style={{ fontSize: "18px" }}>{formatTime(currentTime)}</b><br />
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
