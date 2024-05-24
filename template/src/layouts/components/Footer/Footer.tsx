export default function Footer() {
    return (
        <>
            <div className="umino-footer_area">
                <div className="footer-top_area bg--tangerine_yellow">
                </div>
                <div className="footer-middle_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 order-1 order-lg-1">
                                <div className="footer-widgets_title">
                                    <h4>Công ty đấu giá Diamond Gold Silver (DGS)</h4>
                                </div>
                                <div className="footer-widgets footer-contact_info">
                                    <ul>
                                        <li>
                                            <i className="ion-ios-person-outline"></i>
                                            Đại diện: Nguyễn Thế Hoàng (Giáo Làng)
                                        </li>
                                        <li>
                                            <i className="ion-ios-home-outline"></i>
                                            <span>
                                                Lưu Hữu Phước, Đông Hoà, Dĩ An, Bình Dương, Việt Nam
                                            </span>
                                        </li>
                                        <li>
                                            <i className="ion-ios-email-outline"></i>
                                            <span>Email:</span>
                                            daugia.dgs789@gmail.com
                                        </li>
                                        <li>
                                            <i className="ion-android-call"></i>
                                            <span>Số điện thoại:</span>
                                            <div className="cellphone-number_area">
                                                <a>
                                                    (+84) 0123456789
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="ion-ios-calendar-outline"></i>
                                            <span>
                                                Giờ mở cửa: Từ thứ 2 đến thứ 7 hằng tuần
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 order-2 order-lg-2">
                                <div className="footer-widgets_title">
                                    <h4>Về chúng tôi</h4>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Giới thiệu
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                Hướng dẫn
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
                                                <img style={{ width: "100%", borderRadius: "0 50px" }} height="320"
                                                    src={"https://www.fbk.eu/wp-content/uploads/2020/10/online-auction-law-gavel-on-computer-keyboard-bann-H5FQRXA-scaled.jpg"} />
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
                                        <span>
                                            Copyright &copy; Team 4 NET1807
                                        </span>
                                        <span className="umino-social_link">
                                            <ul>
                                                <li className="Gmail">
                                                    <a
                                                        href="https://mail.google.com/"
                                                        data-bs-toggle="tooltip"
                                                        target="_blank"
                                                        title="Gmail"
                                                    >
                                                        <i className="fas fa-envelope"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-3 col-md-5 order-1 order-md-2">
                                    <div className="footer-logo">
                                        <a href="javascript:void(0)">
                                            <img width="150" height="70"
                                                src="https://raw.githubusercontent.com/phuuthanh2003/AuctionWebApp_FE/master/template/public/assets/images/menu/logo/1.png"

                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-2">
                                    <div className="payment-method">
                                        <h3 className="heading">
                                            Cho phép thanh toán dựa trên
                                        </h3>
                                        <a href="javascript:void(0)">
                                            <img
                                                src="assets/images/footer/payment/1.png"
                                                alt="Umino's Payment Method"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
