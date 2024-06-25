import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation(["footer"]);
  return (
    <>
      <div className="umino-footer_area">
        <div className="footer-top_area bg--tangerine_yellow"></div>
        <div className="footer-middle_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 order-1 order-lg-1">
                <div className="footer-widgets_title">
                  <h4 style={{ lineHeight: "32px" }}>
                    {t("Footer.TenCongTy")}
                  </h4>
                </div>
                <div className="footer-widgets footer-contact_info">
                  <ul>
                    <li>
                      <i className="ion-ios-person-outline"></i>
                      {t("Footer.DaiDien")}
                    </li>
                    <li>
                      <i className="ion-ios-home-outline"></i>
                      <span>{t("Footer.DiaChi")}</span>
                    </li>
                    <li>
                      <i className="ion-ios-email-outline"></i>
                      <span>Email:</span>
                      daugia.dgs789@gmail.com
                    </li>
                    <li>
                      <i className="ion-android-call"></i>
                      <span>{t("Footer.SoDienThoai")}</span>
                      <div className="cellphone-number_area">
                        <a>(+84) 0123456789</a>
                      </div>
                    </li>
                    <li>
                      <i className="ion-ios-calendar-outline"></i>
                      <span>{t("Footer.GioMoCua")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 order-2 order-lg-2">
                <div className="footer-widgets_title">
                  <h4>{t("Footer.VeChungToi")}</h4>
                </div>
                <div className="footer-widgets">
                  <ul>
                    <li>
                      <Link to={"/gioi-thieu"}>{t("Footer.GioiThieu")}</Link>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/12reK5pxHKGGx5pJfvchLp8v2iBf_njB_/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("Footer.HuongDanDauGia")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-3 order-lg-4">
                <div className="footer-widgets latest-tweets_area">
                  <div className="latest-tweets_slider">
                    <div className="twitter-single_item">
                      <div className="twitter-feed_content">
                        <img
                          style={{ width: "100%", borderRadius: "0 50px" }}
                          height="320"
                          src={
                            "https://www.fbk.eu/wp-content/uploads/2020/10/online-auction-law-gavel-on-computer-keyboard-bann-H5FQRXA-scaled.jpg"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom_area">
          <div className="container">
            <div className="footer-bottom_nav">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 order-3 order-md-1">
                  <div className="copyright">
                    <span>Copyright &copy; Team 4 NET1807</span>s
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-5 order-1 order-md-2">
                  <div className="footer-logo">
                    <a href="">
                      <img
                        width="150"
                        height="70"
                        src="/assets/images/menu/logo/1.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 order-2">
                  {/* <div className="payment-method">
                                        <h3 className="heading">
                                            Cho phép thanh toán dựa trên
                                        </h3>
                                        <a href="">
                                            <img
                                                src="assets/images/footer/payment/1.png"
                                                alt="Umino's Payment Method"
                                            />
                                        </a>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
