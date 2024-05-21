import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function SingleProductSale() {

    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        setStartDate("2024/05/28 9:30:00");

        $(".umino-countdown").countdown(startDate, function (event) {
            $(this).html(
                event.strftime(
                    '<div class="count"><span class="count-amount">%D</span><span class="count-period">Days</span></div><div class="count"><span class="count-amount">%H</span><span class="count-period">Hrs</span></div><div class="count"><span class="count-amount">%M</span><span class="count-period">Mins</span></div><div class="count"><span class="count-amount">%S</span><span class="count-period">Secs</span></div>'
                )
            );
        });
    }, [startDate]);

    return (
        <>
            <body className="template-color-1">
                <div className="main-wrapper">
                    {/* <!-- Begin Umino's Breadcrumb Area --> */}
                    <div className="breadcrumb-area">
                        <div className="container">
                            <div className="breadcrumb-content">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">
                                        Single Product Sale
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Umino's Breadcrumb Area End Here -->

                    <!-- Begin Umino's Single Product Sale Area --> */}
                    <div className="sp-area">
                        <div className="container">
                            <div className="sp-nav">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="sp-img_area">
                                            {/* <div className="zoompro-border">
                                                <img
                                                    className="zoompro"
                                                    src="assets/images/product/small-size/1.jpg"
                                                    data-zoom-image="assets/images/product/small-size/1.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </div> */}
                                            {/* <div
                                                id="gallery"
                                                className="sp-img_slider slider-navigation_style-4"
                                            >
                                                <a
                                                    className="active"
                                                    data-image="assets/images/product/small-size/1.jpg"
                                                    data-zoom-image="assets/images/product/small-size/1.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/1.jpg"
                                                        alt="Umino's Product Image" width={120}
                                                    />
                                                </a>
                                                <a
                                                    data-image="assets/images/product/small-size/2.jpg"
                                                    data-zoom-image="assets/images/product/small-size/2.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/2.jpg"
                                                        alt="Umino's Product Image" width={120}
                                                    />
                                                </a>
                                            </div> */}
                                            <Carousel showArrows={false} showIndicators={true} showThumbs={true}>
                                                <img
                                                    src="assets/images/product/small-size/2.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                                <img
                                                    src="assets/images/product/small-size/1.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                                <img
                                                    src="assets/images/product/small-size/1.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                                <div id="myresult" className="img-zoom-result"></div>
                                            </Carousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="para" id="countdown-txt">Cuộc đấu giá chưa bắt đầu</p>
                                        <div className="umino-countdown_area mb-4">
                                            <div className="umino-countdown"></div>
                                        </div>
                                        <div className="register-form">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Mã trang sức:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin fw-bold">MTS-ULHMNA</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin ">Thời gian mở đăng ký:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="right-info-text no-margin fw-bold">06/05/2024 08:00:00</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Thời gian kết thúc đăng ký:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="right-info-text no-margin  fw-bold">13/05/2024 17:00:00</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Giá khởi điểm:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin">
                                                        <span className="fw-bold novaticPrice openningPrice">12.236.555.000</span>
                                                        <span className="fw-bold unitPrice"> VNĐ</span>
                                                    </p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Phí đăng ký tham gia đấu giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">
                                                        <span className="fw-bold novaticPrice registerFee">500.000</span>
                                                        VNĐ
                                                    </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Bước giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin">
                                                        <span className="fw-bold novaticPrice step-price stepPrice">30.000.000</span>
                                                        <span className="fw-bold unitPrice"> VNĐ</span>
                                                    </p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Số bước giá tối đa/ lần trả:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">Bước giá không giới hạn</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Tiền đặt trước:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">
                                                        <span className="fw-bold novaticPrice depositPrice">2.400.000.000</span> VNĐ</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Phương thức đấu giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">Trả giá lên và liên tục</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Tên chủ tài sản:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="fw-bold right-info-text no-margin">Viễn thông Khánh Hòa</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Thời gian bắt đầu trả giá:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="fw-bold right-info-text no-margin">{startDate}</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Thời gian kết thúc trả giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">16/05/2024 10:30:00</p>
                                                </div>
                                                <div className="col-6 col-xs-6">
                                                    <b className="spanauctionproperty" style={{ color: "red" }}>Giá trúng tối thiểu:</b>
                                                </div>
                                                <div className="col-6 col-xs-6 right-info-text no-margin">
                                                    <span className="fw-bold spanColorAuctionproperty novaticPrice" style={{ color: "red" }}>13.900.872.451</span>
                                                    <span className="fw-bold spanColorAuctionproperty" style={{ color: "red" }}> VNĐ</span>
                                                </div>
                                            </div>
                                            <div className="auction-card3">

                                                <div className="share-area">
                                                    <ul className="social-icons d-flex">
                                                        <li><a><i className="bx bxl-facebook"></i></a></li>
                                                    </ul>
                                                    <div>
                                                        <div className="share-btn"><i className="bx bxs-share-alt"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Umino's Single Product Area Sale End Here  */}

                    {/* Begin Umino's Single Product Tab Area  */}
                    <div className="sp-tab_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="sp-product-tab_nav">
                                        <div className="product-tab">
                                            <ul className="nav product-menu">
                                                <li>
                                                    <a
                                                        className="active"
                                                        data-bs-toggle="tab"
                                                        href="#description"
                                                    >
                                                        <span>Mô tả tài sản</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-bs-toggle="tab"
                                                        href="#specification"
                                                    >
                                                        <span>
                                                            Thông tin đấu giá
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-bs-toggle="tab"
                                                        href="#specification"
                                                    >
                                                        <span>
                                                            Tài liệu liên quan
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content umino-tab_content">
                                            <div
                                                id="description"
                                                className="tab-pane active show"
                                                role="tabpanel"
                                            >
                                                <div className="product-description">
                                                    <div className="describe-content info-ap">
                                                        <p>Tổ chức đấu giá tài sản: Công ty Đấu giá hợp danh Lạc Việt, địa chỉ: số 49 Văn Cao, phường Liễu Giai, quận Ba&nbsp;Đình, Hà Nội.</p><p>Người có tài sản đấu giá: Viễn thông&nbsp;Khánh Hòa, địa chỉ:&nbsp;Số 50 Lê Thánh Tôn, phường Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa.</p><p>&nbsp;</p><ol><li><strong>Tài sản đấu giá, giá khởi điểm, bước giá, tiền mua hồ sơ, tiền đặt trước:</strong></li></ol><ul><li><strong>Tài sản đấu giá:&nbsp;</strong>Cáp đồng thanh lý của Viễn thông Khánh Hòa, cụ thể:</li></ul><p>+ Số lượng: 161.541 m cáp đồng, có dung lượng từ 10x2 đến 600x2 <i>(chi tiết tại Hồ sơ mời đấu giá)</i>.</p><p>+ Chất lượng: Cáp đồng đã qua sử dụng, chất lượng kém, không tái sử dụng được.</p><p><strong>- Giá khởi điểm: 12.236.555.000 đồng&nbsp;</strong><i>(Bằng chữ: Mười hai tỷ, hai trăm ba mươi sáu triệu, năm trăm năm mươi lăm nghìn đồng) (Giá đã bao gồm thuế VAT).</i></p><p><strong>- Tiền mua hồ sơ tham gia đấu giá</strong> (trên hệ thống đấu giá trực tuyến được coi là “phí đăng ký tham gia đấu giá”): <strong>500.000 đồng/Hồ sơ&nbsp;</strong><i>(Bằng chữ: Năm trăm nghìn đồng trên hồ sơ).</i></p><p><strong>- Tiền đặt trước: 2.400.000.000 đồng&nbsp;</strong><i>(Bằng chữ: Hai tỷ bốn trăm triệu đồng).</i></p><p><strong>-&nbsp; Bước giá: 30.000.000 đồng/bước giá&nbsp;</strong><i>(Bằng chữ: Ba mươi triệu đồng trên bước giá).</i></p><p><strong>2. Điều kiện, cách thức đăng ký,&nbsp;thời gian bán, thu hồ sơ đấu giá và địa điểm xem tài sản đấu giá:</strong></p><p>Các tổ chức, cá nhân có nhu cầu tham gia đấu giá có đủ điều kiện và năng lực theo Quy chế đấu giá đăng ký tham gia đấu giá, xem tài sản đấu giá theo lịch trình dưới đây:</p><p>&nbsp; &nbsp;&nbsp;<i><strong>- Đăng ký tham gia đấu giá</strong></i>: Từ 08h00 ngày&nbsp;06/05/2024 đến 17h00 ngày&nbsp;13/05/2024 bằng cách sau:</p><p>+ Khách hàng đăng ký tài khoản và sử dụng tài khoản truy cập để đăng ký tham gia đấu giá trực tuyến trên&nbsp;Trang thông tin điện tử đấu giá trực tuyến của Công ty Đấu giá hợp danh Lạc Việt - <strong>lacvietauction.vn</strong>.</p><p>+ Khách hàng nộp tiền mua hồ sơ (phí đăng ký tham gia đấu giá) thông qua các hình thức thanh toán trực tuyến và chuyển khoản vào tài khoản công ty (tại Mục 3), nội dung chuyển khoản: <i><strong>“(Họ tên người tham gia đấu giá/Tên tổ chức)(Số CMND/CCCD/HC/ĐKKD) nộp phí đăng ký TGĐG Cáp đồng của VNPT Khánh Hòa”</strong></i>.</p><p>+ Khách hàng sau khi hoàn tất việc đăng ký tham gia đấu giá trực tuyến tải các mẫu đơn đăng ký, giấy xác nhận hiện trạng tài sản trên trang lacvietauction để nộp lại hồ sơ qua đường bưu điện. Mỗi hồ sơ bao gồm:</p><p>++ Đơn đăng ký tham gia đấu giá, Giấy xác nhận hiện trạng tại sản;</p><p>++ Đơn đăng ký xem tài sản (nếu có nhu cầu xem tài sản, khách hàng nộp lại trước 17h00 ngày 08/05/2024);</p><p>++ Bản sao y có chứng thực các giấy tờ: Căn cước công dân/Hộ chiếu, Đăng ký kinh doanh của doanh nghiệp;</p><p>++ Địa chỉ nhận hồ sơ: Công ty Đấu giá hợp danh Lạc Việt - địa chỉ: Tầng 4, số 49 phố Văn Cao, phường Liễu Giai, quận Ba Đình, TP. Hà Nội, Điện thoại: 0867.523.488 / 0243.211.5234.</p><p>Khách hàng có thể tham khảo hồ sơ mời đấu giá trên&nbsp;Trang thông tin điện tử đấu giá trực tuyến của Công ty Đấu giá hợp danh Lạc Việt - <strong>lacvietauction.vn</strong>hoặc tại Trụ sở Công ty Đấu giá Lạc Việt:Tầng 4, số 49 phố Văn Cao, phường Liễu Giai, quận Ba Đình, TP. Hà Nội <i>(trong giờ hành chính, trừ&nbsp;thứ 7, Chủ nhật và nghỉ lễ)</i>.</p><p>&nbsp; &nbsp;&nbsp;<i><strong>- Xem tài sản</strong></i>: Khách hàng nộp đơn đăng ký xem tài sản với Công ty Đấu giá hợp danh Lạc Việt trước 17h00 ngày <strong>08/05/2024</strong> để được hướng dẫn xem tài sản ngày&nbsp;<strong>09/05/2024</strong> và ngày <strong>10/05/2024</strong> (trong giờ hành chính)&nbsp;tại&nbsp;các kho Trung tâm Viễn thông trực thuộc Viễn thông Khánh Hòa <i>(chi tiết tại Hồ sơ mời đấu giá)</i>.</p><p><i>Lưu ý: Nếu khách hàng không thể trực tiếp đến địa điểm xem tài sản, khách hàng có thể tự tìm hiểu tài sản thông qua tài liệu, hình ảnh liên quan đến tài sản đấu giá đã được đăng tải trên&nbsp;Trang thông tin điện tử đấu giá trực truyếncủa Công ty Đấu giá hợp danh Lạc Việt(<strong>lacvietauction.vn).&nbsp;</strong>Nếu có bất kỳ thắc mắc gì về tài sản đấu giá, khách hàng liên hệ với&nbsp;Công ty Đấu giá hợp danh Lạc Việt hoặc Viễn thông&nbsp;Khánh Hòa để được giải đáp. Khách hàng chịu trách nhiệm về việc đã hiểu rõ về tài sản đấu giá trước khi đăng ký tham gia đấu giá.</i></p><p><strong>3.</strong> <strong>Thời gian nộp khoản tiền đặt trước:</strong>Từ ngày&nbsp;13/05/2024 đến 17h00 ngày&nbsp;15/05/2024 bằng cách chuyển khoản theo chỉ dẫn sau:</p><p>+ Tên tài khoản: Công ty đấu giá hợp danh Lạc Việt;</p><p>+ Số tài khoản: 222288882288;</p><p>+ Tại: Ngân hàng TMCP Bưu Điện Liên Việt - Hà Nội (LPB);</p><p>+ Nội dung: <i><strong>“(Họ tên người tham gia đấu giá/Tên tổ chức)(Số CMND/CCCD/HC/ĐKKD) nộp tiền đặt trước&nbsp;TGĐGCáp đồng của VNPT Khánh Hòa”</strong></i>.</p><p><strong>Lưu ý:</strong> Tiền đặt trước của khách phải báo “có” trong tài khoản Công ty Đấu giá hợp danh Lạc Việt trước 17 giờ 00 phút ngày&nbsp;15/05/2024. Khách hàng có khoản tiền đặt trước báo “có” trong tài khoản Công ty Đấu giá hợp danh Lạc Việt sau 17 giờ 00 phút ngày&nbsp;15/05/2024 được coi là không hợp lệ và không đủ điều kiện tham gia đấu giá.</p><p><strong>4. Hình thức và phương thức đấu giá:&nbsp;</strong>Đấu giá trực tuyến (thông qua Trang thông tin điện tử đấu giá trực tuyến của Công ty Đấu giá hợp danh Lạc Việt: Lacvietauction.vn), với phương thức trả giá lên theo bước giá.</p><p><strong>5.</strong> <strong>Thời gian, địa điểm tổ chức cuộc đấu giá:</strong></p><p>Thời gian trả giá: Bắt đầu từ&nbsp;09giờ 30 phút đến&nbsp;10 giờ&nbsp;30 phút ngày&nbsp;16/05/2024 (Thứ&nbsp;Năm).</p><p>Tại địa điểm: Trang thông tin điện tử đấu giá trực tuyến của Công ty Đấu giá hợp danh Lạc Việt - lacvietauction.vn.</p><p>Thông tin liên hệ:Công ty Đấu giá hợp danh Lạc Việt:&nbsp;số 49 phố Văn Cao, phường Liễu Giai, quận Ba Đình, TP. Hà Nội. ĐT: 0243.211.5234/0867.523.488.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="specification"
                                                className="tab-pane"
                                                role="tabpanel"
                                            >
                                                <table className="table table-bordered specification-inner_stuff">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Tổ chức đấu giá tài sản:
                                                                </strong>
                                                            </td>
                                                            <td><b>Công ty đấu giá DGS</b></td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    Đấu giá viên:
                                                                </strong>
                                                            </td>
                                                            <td><b>Nguyễn Văn C</b></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
