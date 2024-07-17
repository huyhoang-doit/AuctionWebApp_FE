import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCategories } from "../../../hooks/useCategories";
import { UserContext } from "../../../hooks/useContext";
import { useTranslation } from "react-i18next";
import useIsStaff from "../../../hooks/useIsStaff";

export const NavBar = () => {
  const categories = useCategories();
  const token = localStorage.getItem("access_token");
  const { t } = useTranslation(["home"]);
  const context = useContext(UserContext);
  const [isDisplay, setIsDisplay] = useState(false);
  // const isStaff = useIsStaff();

  let user = null;

  if (context?.account) {
    if (!token) user = null;
    else user = context.account;
  }

  return (
    <>
      <div className="header-bottom_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-9 col-sm-7">
              <div className="category-menu category-menu-hidden">
                <Link to={"/danh-sach-dau-gia"}>
                  <div className="category-heading">
                    <h2 className="categories-toggle">
                      <span>{t("Narbar.CacLoaiTrangSucDauGia")}</span>
                    </h2>
                  </div>
                </Link>
                <div id="cate-toggle" className="category-menu-list none">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <NavLink to={"/danh-sach-dau-gia/category/" + category.id}>
                          {category.name}
                        </NavLink>
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
                    <li className="dropdown-holder">
                      <NavLink to={"/danh-sach-dau-gia"}>
                        {t("Narbar.CuocDauGia")}
                        <i className="ion-chevron-down"></i>
                      </NavLink>
                      <ul className="hm-dropdown">
                        <li>
                          <Link to={"/danh-sach-dau-gia/state/WAITING"}>
                            {t("Narbar.DauGiaSapDienRa")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/danh-sach-dau-gia/state/ONGOING"}>
                            {t("Narbar.DauGiaDangDienRa")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/danh-sach-dau-gia/state/FINISHED"}>
                            {t("Narbar.DauGiaKetThuc")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/gioi-thieu"}>
                        {t("Narbar.GioiThieu")}
                        <i className="ion-chevron-down"></i>
                      </Link>
                      <ul className="hm-dropdown">
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1lbnWNHbTg8QD9uKWD1ZQathSoNCx0npl/view"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("Narbar.HuongDanDauGia")}
                          </a>
                        </li>
                        <li>
                          <Link to={"/gioi-thieu"}>{t("Narbar.VeChungToi")}</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/lien-he">{t("Narbar.LienHe")}</NavLink>
                    </li>
                    {/* {!isStaff &&  */}
                    <li>
                      <NavLink to="/form-send-jewerly">
                        {t("Narbar.GuiSanPhamDauGia")}
                      </NavLink>
                    </li>
                    {/* } */}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              {!user && !token && (
                <div className="login-area">
                  <Link to={"/dang-nhap"}>{t("Narbar.DangNhap")}</Link>
                  <span> | </span>
                  <Link to={"/dang-ky"}>{t("Narbar.DangKy")}</Link>
                </div>
              )}
              {user && token && (
                <div className="login-area">
                  <Link to={"/thong-tin-ca-nhan"}>
                    {t("Narbar.ThongTinCaNhan")}
                  </Link>
                </div>
              )}
            </div>
            <div className="col-md-3 col-sm-5 d-block d-lg-none">
              <div className="mobile-menu_area">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ justifyContent: "center" }}>
                  <Link className="navbar-brand " to="/">Trang chủ</Link>
                  <button onClick={() => setIsDisplay(!isDisplay)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  {isDisplay && <>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ display: "block", marginLeft: "100px" }}>
                      <div className="navbar-nav">
                        <Link to={"/dang-nhap"}>{t("Narbar.DangNhap")}</Link>
                        <Link to={"/dang-ky"}>{t("Narbar.DangKy")}</Link>
                        <Link to={"/gioi-thieu"}>{t("Narbar.VeChungToi")}</Link>
                        <Link to="/lien-he">{t("Narbar.LienHe")}</Link>
                      </div>
                    </div>
                  </>}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
