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
                  <div className="contact-page-side-content mt-0">
                    <h3 className="contact-page-title">
                      Thông tin liên hệ
                    </h3>
                    <p className="contact-page-message">

                    </p>
                    <div className="single-contact-block">
                      <h5>
                        <i className="fa fa-fax"></i> Địa chỉ
                      </h5>
                      <p>
                        Nhà Văn hóa Sinh viên TP.HCM, Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam
                      </p>
                    </div>
                    <div className="single-contact-block">
                      <h5>
                        <i className="fa fa-phone"></i> Số điện thoại
                      </h5>
                      <p>Mobile: (+84) 862006868 </p>
                      <p>Hotline: 1900 6868</p>
                    </div>
                    <div className="single-contact-block last-child">
                      <h5>
                        <i className="fa fa-envelope-o"></i>{" "}
                        Email
                      </h5>
                      <p>daugia.dgs789@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form>
                    <div className="login-form">
                      <h4 className="login-title">Thông tin sản phẩm</h4>
                      <div className="row mb-4">
                        <div className="col-md-6 col-12 mb--20">
                          <label>Tên Sản Phẩm</label>
                          <input
                            type="text"
                            placeholder="Nhập tên sản phẩm"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Loại sản phẩm</label>
                          <input className="mb-0"
                            type="text"
                            placeholder="Nhập loại sản phẩm"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Giá</label>
                          <input
                            className="mb-0"
                            type="text"
                            placeholder="Nhập giá mong muốn"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Thương hiệu</label>
                          <input
                            type="text"
                            placeholder="Nhập thương hiệu"
                          />
                        </div>
                        <div className="col-md-12">
                          <label>Mô Tả</label>
                          <textarea
                            className="w-100 h-100"
                          ></textarea>
                        </div>
                        <div className="col-md-12" style={{ marginTop: "60px" }}>
                          <label>Ảnh sản phẩm</label>
                          <input
                            type="file"
                            placeholder="Chọn ảnh sản phẩm"
                            multiple={true}
                          />
                        </div>
                        <div className="col-12">
                          <button className="umino-register_btn" type="button">
                            Gửi yêu cầu
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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
