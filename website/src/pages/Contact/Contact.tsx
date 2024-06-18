import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation(["Contact"]);
  return (
    <>
      {/* <!-- Begin Umino's Breadcrumb Area --> */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Umino's Breadcrumb Area End Here -->
        <!-- Begin Contact Main Page Area --> */}
      <div className="contact-main-page">
        <div className="google-map_area">
          <div className="container-fluid">
            <div id="google-map" className="text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003405.79257722!2d105.55479573124998!3d10.768824599999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a6b19d6763%3A0x143c54525028b2e!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbiBUUC5IQ00!5e0!3m2!1svi!2s!4v1718718338321!5m2!1svi!2s"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: "0",
                  width: "60%",
                  height: "100%",
                }}
                allowFullScreen={true}
                title={'Nhà Văn hóa Sinh viên TP.HCM'}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">
                  {" "}
                  {t("Contact.ThongTinLienHe")}
                </h3>
                <p className="contact-page-message"></p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax"></i> {t("Contact.DiaChi")}
                  </h4>
                  <p>{t("Contact.ThongTinDiaChi")}</p>
                </div>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-phone"></i> {t("Contact.SoDienThoai")}
                  </h4>
                  <p>Mobile: (+84) 0123456789 </p>
                  <p>Hotline: 1900 6868</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o"></i> Email
                  </h4>
                  <p>DGSsupport@gmail.com</p>
                  <p>FPT@DGScompany.vn</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-content">
                <h3 className="contact-page-title">
                  {t("Contact.LienHeChungToi")}
                </h3>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    action="https://whizthemes.com/mail-php/mamunur/umino/umino.php"
                  >
                    <div className="form-group">
                      <label>
                        {t("Contact.TenCuaBan")}{" "}
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="con_name"
                        required
                        title="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {t("Contact.EmailCuaBan")}
                        <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="con_email"
                        required
                        title="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <label>{t("Contact.NoiCongTac")}</label>
                      <input type="text" name="con_subject" title="Subject" />
                    </div>
                    <div className="form-group form-group-2">
                      <label>{t("Contact.TinNhan")}</label>
                      <textarea name="con_message" title="Message"></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        id="submit"
                        className="umino-contact-form_btn"
                        name="submit"
                      >
                        {t("Contact.GuiYeuCau")}
                      </button>
                    </div>
                    <p className="form-message"></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
