export default function Contact() {
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6100105370224!2d106.8073080748058!3d10.84112758931163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1716190490489!5m2!1svi!2s" referrerPolicy="no-referrer-when-downgrade"
                                style={{
                                    border: "0",
                                    width: "60%",
                                    height: "100%",
                                }}
                                allowFullScreen={true}
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
                                    Liên hệ chúng tôi
                                </h3>
                                <div className="contact-form">
                                    <form
                                        id="contact-form"
                                        action="https://whizthemes.com/mail-php/mamunur/umino/umino.php"
                                    >
                                        <div className="form-group">
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
                                            <label>Tin nhắn</label>
                                            <textarea name="con_message"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                value="submit"
                                                id="submit"
                                                className="umino-contact-form_btn"
                                                name="submit"
                                            >
                                                Gửi yêu cầu
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
