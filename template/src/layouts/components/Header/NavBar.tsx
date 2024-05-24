import React from "react"
import { Link, NavLink } from "react-router-dom"
import { handleLogout } from "../../../utils/logout"
import useAccount from "../../../hooks/useAccount";
import { useCategories } from "../../../hooks/useCategories";

export const NavBar = () => {
    const categories = useCategories();
    const user = useAccount();
    
    return (
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
                                        >
                                            <NavLink to={"/shop-left-sibar/category/" + category.id}>{category.name}</NavLink>
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
                        {!user &&
                            <div className="login-area">
                                <Link to={"/login"}>
                                    Đăng nhập
                                </Link><span> | </span>
                                <Link to={"/register"}>
                                    Đăng ký
                                </Link>
                            </div>}
                        {
                            user &&
                            <div className="login-area">
                                <Link to={"/my-account"}>
                                    Profile
                                </Link><span> | </span>
                                <button onClick={() => {
                                    handleLogout()
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
        </div>)
}