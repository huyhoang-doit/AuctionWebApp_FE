import React from 'react'

const ContactTable = () => {
  return (
    <div className="umino-product_area umino-product_area-2 contact-main-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="umino-section_title">
              <h3>Liên hệ đấu giá trang sức của bạn</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="umino-product_slider-2 slider-navigation_style-1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-page-side-content">
                    <h3 className="contact-page-title">
                      Thông tin liên hệ
                    </h3>
                    <p className="contact-page-message">

                    </p>
                    <div className="single-contact-block">
                      <h4>
                        <i className="fa fa-fax"></i> Địa chỉ
                      </h4>
                      <p>
                        Nhà Văn hóa Sinh viên TP.HCM, Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam
                      </p>
                    </div>
                    <div className="single-contact-block">
                      <h4>
                        <i className="fa fa-phone"></i> Số điện thoại
                      </h4>
                      <p>Mobile: (+84) 862006868 </p>
                      <p>Hotline: 1900 6868</p>
                    </div>
                    <div className="single-contact-block last-child">
                      <h4>
                        <i className="fa fa-envelope-o"></i>{" "}
                        Email
                      </h4>
                      <p>DGSsupport@gmail.com</p>
                      <p>FPT@DGScompany.vn</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-form-content">
                    <h3 className="contact-page-title">
                      Vui lòng cung cấp thông tin
                    </h3>
                    <div className="contact-form">
                      <form
                        id="contact-form"
                        action="https://whizthemes.com/mail-php/mamunur/umino/umino.php"
                      >
                        <div className='row'>
                          <div className="col-6 form-group">
                            <label>
                              Tên của bạn{" "}
                              <span className="required">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              name="con_name"
                              required
                            />
                          </div>
                          <div className="col-6 form-group">
                            <label>
                              Số điện thoại {" "}
                              <span className="required">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              name="con_name"
                              required
                            />
                          </div>

                        </div>

                        <div className="form-group">
                          <label>
                            Email của bạn{" "}
                            <span className="required">
                              *
                            </span>
                          </label>
                          <input
                            type="email"
                            name="con_email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Nơi công tác</label>
                          <input
                            type="text"
                            name="con_subject"
                          />
                        </div>
                        <div className="form-group form-group-2">
                          <label>Chi tiết tài sản</label>
                          <textarea name="con_message"></textarea>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            value="submit"
                            id="submit"
                            className="umino-contact-form_btn w-100"
                            name="submit"
                          >
                            Gửi
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
        </div>
      </div>
    </div>
  )
}

export default ContactTable
