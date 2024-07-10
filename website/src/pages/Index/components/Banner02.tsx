import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner02 = () => {
  const { t } = useTranslation(["Components"]);

  return (
    <div className="umino-banner_area umino-banner_area-2 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 img-hover_effect">
            <div className="banner-item">
              <div className="banner-img">
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 100, behavior: "smooth" })
                  }
                  to={"/danh-sach-dau-gia"}
                >
                  <img
                    className="img-full"
                    src="assets/images/banner/1-6.jpg"
                    alt="Umino's Banner"
                  />
                </NavLink>
              </div>
              <div className="banner-content">
                <span>{t("Banner02.Hãy đến với chúng tôi")}</span>
                <h4>{t("Banner02.Trang sức ở đây là")} </h4>
                <h3>{t("Banner02.Chính hiệu")}</h3>
                <NavLink to={"/danh-sach-dau-gia"}>
                  <span
                    onClick={() =>
                      window.scrollTo({ top: 100, behavior: "smooth" })
                    }
                    className="btn btn-dark fw-bold"
                  >
                    {t("Banner02.Các phiên đấu")}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-item img-hover_effect">
              <div className="banner-img">
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 100, behavior: "smooth" })
                  }
                  to={"/danh-sach-dau-gia"}
                >
                  <img
                    className="img-full"
                    src="assets/images/banner/1-7.jpg"
                    alt="DGS's Banner"
                  />
                </NavLink>
              </div>
              <div className="banner-content banner-content-2">
                <span> {t("Banner02.Kiểm định")}</span>
                <h4>{t("Banner02.Đội ngũ")}</h4>
                <h3>{t("Banner02.Chuyên gia uy tín")}</h3>
                <NavLink to={"/danh-sach-dau-gia"}>
                  <span
                    onClick={() =>
                      window.scrollTo({ top: 100, behavior: "smooth" })
                    }
                    className="btn btn-warning fw-bold"
                  >
                    {t("Banner02.Các phiên đấu")}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner02;
