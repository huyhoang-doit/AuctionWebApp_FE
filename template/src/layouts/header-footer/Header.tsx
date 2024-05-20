function Header() {
    return (
        <header className="header-main_area scroll-down-header w-100">
            <header className=" container header-area style-3">
                <div className="header-logo">
                    <a href="index.html">
                        <img
                            alt="image"
                            src="files/frontend/images/core/logo-dau-gia-lac-viet.png"
                        />
                    </a>
                </div>
                <div className="main-menu">
                    <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                        <div className="mobile-logo-wrap ">
                            <a href="index.html">
                                <img
                                    alt="image"
                                    src="files/frontend/images/core/logo-dau-gia-lac-viet.png"
                                    height="50"
                                />
                            </a>
                        </div>
                        <div className="menu-close-btn">
                            <i className="bi bi-x-lg"></i>
                        </div>
                    </div>
                    <div className="mobile-menu-form mb-5" id="loginMobile">
                        <div className="input-with-btn d-flex flex-column">
                            <button
                                className="eg-btn btn--primary3 btn--sm"
                                type="submit"
                                data-toggle="modal"
                                data-target="#loginModal"
                            >
                                &#x110;&#x103;ng nh&#x1EAD;p
                            </button>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li className="menu-item-has-children">
                            <a
                                href="danh-muc-tai-san.html"
                                className="drop-down"
                            >
                                T&#xE0;i s&#x1EA3;n &#x111;&#x1EA5;u gi&#xE1;
                            </a>
                            <i className="bx bx-plus dropdown-icon"></i>
                            <ul className="submenu">
                                <li>
                                    <a href="danh-muc-tai-san/1000070-tai-san-thanh-ly.html">
                                        T&#xE0;i s&#x1EA3;n nh&#xE0;
                                        n&#x1B0;&#x1EDB;c
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tai-san/1000071-bat-dong-san.html">
                                        B&#x1EA5;t &#x111;&#x1ED9;ng s&#x1EA3;n
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tai-san/1000072-phuong-tien-xe-co.html">
                                        Ph&#x1B0;&#x1A1;ng ti&#x1EC7;n - xe
                                        c&#x1ED9;
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tai-san/1000073-suu-tam-nghe-thuat.html">
                                        S&#x1B0;u t&#x1EA7;m - ngh&#x1EC7;
                                        thu&#x1EAD;t
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tai-san/1000074-hang-hieu-xa-xi.html">
                                        H&#xE0;ng hi&#x1EC7;u xa x&#x1EC9;
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tai-san/1000075-tang-vat-bi-tich-thu.html">
                                        Tang v&#x1EAD;t b&#x1ECB; t&#x1ECB;ch
                                        thu
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tai-san/1000076-tai-san-khac.html">
                                        T&#xE0;i s&#x1EA3;n kh&#xE1;c
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#" className="drop-down">
                                Cu&#x1ED9;c &#x111;&#x1EA5;u gi&#xE1;
                            </a>
                            <i className="bx bx-plus dropdown-icon"></i>
                            <ul className="submenu">
                                <li>
                                    <a href="danh-sach-dau-gia/sap-dien-ra.html">
                                        Cuộc đấu giá sắp đấu giá
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-sach-dau-gia/dang-dien-ra.html">
                                        Cuộc đấu giá đang diễn ra
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-sach-dau-gia/da-ket-thuc.html">
                                        Cuộc đấu giá đã kết thúc
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#" className="drop-down">
                                Tin t&#x1EE9;c
                            </a>
                            <i className="bx bx-plus dropdown-icon"></i>
                            <ul className="submenu">
                                <li>
                                    <a href="danh-muc-tin-tuc/thong-bao.html">
                                        Thông báo
                                    </a>
                                </li>
                                <li>
                                    <a href="danh-muc-tin-tuc/thong-bao-dau-gia.html">
                                        Thông báo đấu giá
                                    </a>
                                </li>
                                <li>
                                    <a href="tin-tuc.html">Tin khác</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="gioi-thieu.html">
                                Gi&#x1EDB;i thi&#x1EC7;u
                            </a>
                        </li>
                        <li>
                            <a href="lien-he.html">Li&#xEA;n h&#x1EC7;</a>
                        </li>
                    </ul>
                    <div className="mobile-changelang">
                        <button className="mobile-changelang-btn">
                            Tiếng Anh
                            <img
                                className="mobile-changelang-img"
                                src="../upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_(1-2).svg/1200px-Flag_of_the_United_Kingdom_(1-2).svg.png"
                                alt="image"
                            />
                        </button>
                    </div>
                    <div className="d-lg-none d-block">
                        <form className="mobile-menu-form mb-5">
                            <div className="input-with-btn d-flex flex-column">
                                <input
                                    type="text"
                                    placeholder="Nhập từ khóa tìm kiếm tài sản..."
                                    id="key-searching-mobile"
                                />
                                <button
                                    type="button"
                                    className="eg-btn btn--primary3 btn--sm"
                                >
                                    Tìm kiếm tài sản
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="nav-right d-flex align-items-center">
                    <input id="lang" value="vi-VI" />
                    <div className="topbar-right">
                        <ul className="topbar-right-list">
                            <li>
                                <span className="current-language-text">
                                    VI
                                </span>
                                <img
                                    className="img-language-current"
                                    src="../upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                                    alt="image"
                                />
                                <ul className="topbar-sublist">
                                    <li className="vie-lang">
                                        <span>Tiếng Việt</span>
                                        <img
                                            src="../upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                                            alt="image"
                                        />
                                    </li>
                                    <li className="eng-lang">
                                        {" "}
                                        <span>English</span>
                                        <img
                                            src="../upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_(1-2).svg/1200px-Flag_of_the_United_Kingdom_(1-2).svg.png"
                                            alt="image"
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div
                        id="server-time-clock"
                        data-v-65fff26b=""
                        aria-haspopup="true"
                        className="wrapper-AtBcr u-isActionable u-textLeft u-inlineBlock u-borderNone u-textBold u-textNoWrap Arrange Arrange--middle u-userLauncherColor"
                    >
                        <div id="time-part1">19:01:17</div>
                        <div id="date-part1">
                            Chu&#x309; Nh&#xE2;&#x323;t, 19/05/2024
                        </div>
                    </div>

                    <div className="search-btn">
                        <i className="bi bi-search"></i>
                    </div>

                    <div className="eg-btn btn--primary3 header-btn" id="login">
                        <a data-toggle="modal" data-target="#loginModal">
                            &#x110;&#x103;ng nh&#x1EAD;p
                        </a>
                    </div>

                    <div className="mobile-menu-btn d-lg-none d-block">
                        <i className="bx bx-menu"></i>
                    </div>
                </div>
            </header>
        </header>
    );
}

export default Header;
