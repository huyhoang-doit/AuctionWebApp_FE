import { Link } from "react-router-dom";
import Brand from "../Brand/Brand";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation(["About"]);
  return (
    <>
      {/* <!-- Begin Umino's Breadcrumb Area --> */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <Link to={"/"}>{t("About.Home")}</Link>
              </li>
              <li className="active">{t("About.About Us")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- Begin Umino's Main Content Area --> */}
      <div className="main-content_area">
        {/* <!-- Begin About Us Area --> */}
        <div className="about-us_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-us_info">
                  <div className="about-us_img">
                    <img
                      src="assets/images/about-us/large-size/1.jpg"
                      alt="Umino's About Us Image"
                    />
                  </div>
                  <div className="about-us_content">
                    <h3 className="heading">{t("About.Chúng tôi tự hào")}</h3>
                    <p className="short-desc">
                      {t("About.Chúng tôi cung cấp một nền tảng")}
                    </p>
                    <div className="aurhor-signature">
                      <img
                        src="assets/images/about-us/other/signature.png"
                        alt="Umino's Author Signature"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About Us Area End Here -->
                <!-- Begin Team Member Area --> */}
        <div className="team-member_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member_info">
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/about-us/icon/1.png"
                        alt="Umino's Team Member Icon"
                      />
                    </div>
                    <h3 className="title">{t("About.Thiết kế sáng tạo")}</h3>
                    <p className="short-desc">
                      {t("About.Chúng tôi tự hào mang đến")}
                    </p>
                    <div className="team-member_img img-hover_effect">
                      <Link to={""}>
                        <img
                          src="assets/images/about-us/medium-size/1.jpg"
                          alt="Umino's Team Member Image"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="additional-content">
                    <h3 className="heading"> {t("About.Chúng tôi làm gì?")}</h3>
                    <p className="short-desc">
                      {t("About.Chúng tôi cung cấp nền tảng đấu giá")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member_info">
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/about-us/icon/2.png"
                        alt="Umino's Team Member Icon"
                      />
                    </div>
                    <h3 className="title">
                      {" "}
                      {t("About.Đảm bảo hoàn tiền 100%")}
                    </h3>
                    <p className="short-desc">
                      {t("About.Chúng tôi cam kết đảm bảo hoàn tiền 100")}
                    </p>
                    <div className="team-member_img img-hover_effect">
                      <Link to={""}>
                        <img
                          src="assets/images/about-us/medium-size/2.jpg"
                          alt="Umino's Team Member Image"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="additional-content">
                    <h3 className="heading">
                      {" "}
                      {t("About.Sứ mệnh của chúng tôi")}
                    </h3>
                    <p className="short-desc">
                      {t("About.Sứ mệnh của chúng tôi là")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member_info">
                  <div className="content">
                    <div className="icon">
                      <img
                        src="assets/images/about-us/icon/3.png"
                        alt="Umino's Team Member Icon"
                      />
                    </div>
                    <h3 className="title">
                      {" "}
                      {t("About.Hỗ trợ trực tuyến 24/7")}
                    </h3>
                    <p className="short-desc">
                      {t("About.Đội ngũ hỗ trợ trực tuyến")}
                    </p>
                    <div className="team-member_img img-hover_effect">
                      <Link to={""}>
                        <img
                          src="assets/images/about-us/medium-size/3.jpg"
                          alt="Umino's Team Member Image"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="additional-content">
                    <h3 className="heading">
                      {t("About.Lịch sử của chúng tôi")}
                    </h3>
                    <p className="short-desc">
                      {t("About.Diamond Gold Silver")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team Member Area End Here -->
                <!-- Begin Accordion With Testimonials Area --> */}
        <div className="accordion-with-testimonials_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="accordion-area">
                  <div className="umino-section_title">
                    <h3> {t("About.Tại sao bạn nên chọn chúng tôi?")}</h3>
                  </div>
                  <p className="short-desc">
                    {t("About.Với phương châm hoạt động")}
                  </p>
                  <div className="frequently-accordion about-us_accordion">
                    <div id="accordion">
                      <div className="card actives">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <Link
                              to={""}
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                            >
                              {t("About.An Toàn và Tin Cậy")}
                              <i className="ion-chevron-down"></i>
                            </Link>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <h3 className="heading"></h3>
                            <p className="short-desc">
                              {t(
                                "About.Chúng tôi cam kết cung cấp môi trường đấu giá"
                              )}
                            </p>
                            <p className="additional-desc">
                              {t(
                                "About.Tất cả giao dịch trên DGS đều được mã hóa"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <Link
                              to={""}
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                            >
                              {t("About.Đa Dạng Sản Phẩm")}
                              <i className="ion-chevron-down"></i>
                            </Link>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <h3 className="heading"></h3>
                            <p className="short-desc">
                              {t("About.Diamond Gold Silver 2")}
                            </p>
                            <p className="additional-desc">
                              {t(
                                "About.Chúng tôi hợp tác với nhiều nhà cung cấp"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h5 className="mb-0">
                            <Link
                              to={""}
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo2"
                              aria-expanded="false"
                            >
                              {t("About.Hỗ Trợ Khách Hàng 24/7")}
                              <i className="ion-chevron-down"></i>
                            </Link>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo2"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <h3 className="heading"></h3>
                            <p className="short-desc">
                              {t("About.Đội ngũ hỗ trợ khách hàng")}
                            </p>
                            <p className="additional-desc">
                              {t("About.Dù bạn gặp vấn đề gì")}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingfour">
                          <h5 className="mb-0">
                            <Link
                              to={""}
                              className="collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                            >
                              {t("About.Đảm Bảo Hoàn Tiền 100%")}

                              <i className="ion-chevron-down"></i>
                            </Link>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordion"
                        >
                          <div className="card-body">
                            <h3 className="heading"></h3>
                            <p className="short-desc">
                              {t(
                                "About.Chúng tôi cung cấp chính sách hoàn tiền"
                              )}
                            </p>
                            <p className="additional-desc">
                              {t(
                                "About.Nếu bạn không hài lòng với sản phẩm đã mua"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonials-area">
                  <div className="testimonial-slider slider-navigation_style-1">
                    <div className="single-item">
                      <div className="testimonial-img">
                        <Link to="">
                          <img
                            style={{ width: "40%" }}
                            src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/270961679_10159870536636108_2642967668131478092_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tXLob4dQoKYQ7kNvgGGHDXb&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYDVprpAMT8O-RYhQiI73QWzrZza6Wec9YSgwpkujAoH-g&oe=665A4217"
                            alt="Umino's Testimonial Image"
                          />
                        </Link>
                      </div>
                      <div className="author-info">
                        <span className="name">
                          {" "}
                          {t("About.Nguyễn Thế Hoàng")}
                        </span>
                        <span className="occupation">Mentor of DGS</span>
                        <div className="icon">
                          <img
                            src="assets/images/about-us/testimonial/testimonial-icon.png"
                            alt="Umino's Testimonial Icon"
                          />
                        </div>
                        <p className="short-desc">
                          {t("About.Được sự hỗ trợ và hướng dẫn trực tiếp")}
                        </p>
                      </div>
                    </div>
                    <div className="single-item">
                      <div className="testimonial-img">
                        <Link to={""}>
                          <img
                            src="assets/images/about-us/testimonial/2.jpg"
                            alt="Umino's Testimonial Image"
                          />
                        </Link>
                      </div>
                      <div className="author-info">
                        <span className="name">Jenifer Brown</span>
                        <span className="occupation">Manager of AZ</span>
                        <div className="icon">
                          <img
                            src="assets/images/about-us/testimonial/testimonial-icon.png"
                            alt="Umino's Testimonial Icon"
                          />
                        </div>
                        <p className="short-desc">
                          {t("About.Giám đốc AZ của chúng tôi được biết")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Accordion With Testimonials Area End Here --> */}
      </div>
      <Brand />
    </>
  );
}
