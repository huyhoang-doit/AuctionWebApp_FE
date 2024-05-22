import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { CatMegaMenu } from "./CatMegaMenu";

export default function Header() {
    const navigate = useNavigate();

    const handleToContact = () => {
        navigate("/contact");
    };

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString();
    };

    const formatDateTime = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };
        const dateString = date.toLocaleDateString('vi-VN', options);

        const dayOfWeek = date.toLocaleDateString('vi-VN', { weekday: 'long' });

        return `${dayOfWeek}, ${dateString}`;
    };

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
                                            <li
                                                className="right-menu"
                                            >
                                                <Link to={"/shop-left-sibar"}>Dây chuyền</Link>
                                                <CatMegaMenu />
                                            </li>
                                            <li
                                                className="right-menu"
                                            >
                                                <Link to={"/shop-left-sibar"}>Nhẫn</Link>

                                                <CatMegaMenu />
                                            </li>
                                            <li
                                                className="right-menu"
                                            >
                                                <Link to={"/shop-left-sibar"}>Bông tai</Link>
                                                <CatMegaMenu />
                                            </li>
                                            <li
                                                className="right-menu"
                                            >
                                                <Link to={"/shop-left-sibar"}>Vòng tay</Link>

                                                <CatMegaMenu />
                                            </li>
                                            <li
                                                className="right-menu"
                                            >
                                                <Link to={"/shop-left-sibar"}>Lắc</Link>
                                                <CatMegaMenu />
                                            </li>
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
                                                <Link to={"/shop-left-sibar"}>
                                                    Cuộc đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </Link>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <Link to={"/shop-left-sibar"}>
                                                            Đấu giá sắp diễn ra
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/QA"}>Đấu giá đang diễn ra</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">Đấu giá đã kết thúc</a>
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
                                                onClick={() =>
                                                    handleToContact()
                                                }
                                            >
                                                <a href="#">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                <div className="login-area">
                                    <Link to={"/login"}>
                                        Đăng nhập
                                    </Link><span> | </span>
                                    <Link to={"/register"}>
                                        Đăng ký
                                    </Link>
                                </div>
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
                                    <Link to={"/index"}>
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
                                                onClick={() => handleToIndex()}
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
                                                onClick={() =>
                                                    handleToContact()
                                                }
                                            >
                                                <a href="#">Liên hệ</a>
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
