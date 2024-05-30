import React from "react"
import { Link, NavLink } from "react-router-dom"
import useAccount from "../../../hooks/useAccount";
import { useCategories } from "../../../hooks/useCategories";

export const NavBar = () => {
    const categories = useCategories();
    const token = localStorage.getItem("access_token");
    const user = useAccount(token);

    return (
        <div className="header-bottom_area ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-9 col-sm-7">
                        <div className="category-menu category-menu-hidden">
                            <Link to={"/danh-sach-dau-gia"}>
                                <div className="category-heading">
                                    <h2 className="categories-toggle">
                                        <span>Các loại trang sức đấu giá</span>
                                    </h2>
                                </div>
                            </Link>
                            <div
                                id="cate-toggle"
                                className="category-menu-list none"
                            >
                                <ul>
                                    {React.Children.toArray(categories.map(
                                        (category) => <li
                                        >
                                            <NavLink to={"/danh-sach-dau-gia/category/" + category.id}>{category.name}</NavLink>
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
                                                <Link to={"/gioi-thieu"}>
                                                    Về chúng tôi
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                    >
                                        <NavLink to="/lien-he">Liên hệ</NavLink>
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
                        {!user &&
                            <div className="login-area">
                                <Link to={"/dang-nhap"}>
                                    Đăng nhập
                                </Link><span> | </span>
                                <Link to={"/dang-ky"}>
                                    Đăng ký
                                </Link>
                            </div>}
                        {
                            user &&
                            <div className="login-area">
                                <Link to={"/thong-tin-ca-nhan"}>
                                    THÔNG TIN CÁ NHÂN
                                </Link>
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
        </div>)
}