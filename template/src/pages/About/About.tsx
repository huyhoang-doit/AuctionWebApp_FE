import { Link } from "react-router-dom";
import Brand from "../Brand/Brand";

export default function About() {
    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="active">About Us</li>
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
                                        <h3 className="heading">
                                            Chúng tôi tự hào là nền tảng đấu giá trực tuyến hàng đầu Việt Nam,
                                            tập trung vào việc cung cấp nội dung và trải nghiệm hữu ích cho người dùng.
                                        </h3>
                                        <p className="short-desc">
                                            Chúng tôi cung cấp một nền tảng nơi người dùng có thể dễ dàng tham gia các phiên đấu giá trực tuyến,
                                            đảm bảo tính minh bạch và công bằng trong từng giao dịch.
                                            Với đội ngũ chuyên gia thẩm định uy tín và hệ thống bảo mật tiên tiến,
                                            DGS cam kết mang đến trải nghiệm mua bán trang sức đẳng cấp và đáng tin cậy cho mọi khách hàng.
                                            Ngoài ra, người dùng còn có thể đăng ký đấu giá các sản phẩm của mình, tạo cơ hội trao đổi và kinh doanh hiệu quả.
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
                                        <h3 className="title">
                                            Creative Design
                                        </h3>
                                        <p className="short-desc">
                                            Chúng tôi tự hào mang đến những thiết kế sáng tạo,
                                            độc đáo và tinh tế cho mọi sản phẩm trang sức,
                                            giúp bạn tỏa sáng và thể hiện phong cách riêng biệt.
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
                                        <h3 className="heading">
                                            What do we do?
                                        </h3>
                                        <p className="short-desc">
                                            Chúng tôi cung cấp nền tảng đấu giá trực tuyến cho các sản phẩm trang sức cao cấp.
                                            Tại đây, người dùng có thể tham gia đấu giá,
                                            mua bán các mặt hàng trang sức quý giá một cách an toàn và tin cậy.
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
                                            100% Money Back Guarantee
                                        </h3>
                                        <p className="short-desc">
                                            Chúng tôi cam kết đảm bảo hoàn tiền 100%
                                            nếu bạn không hài lòng với sản phẩm,
                                            nhằm mang lại sự yên tâm và tin tưởng tuyệt đối khi mua sắm tại DGS.
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
                                        <h3 className="heading">Our Mission</h3>
                                        <p className="short-desc">
                                            Sứ mệnh của chúng tôi là tạo ra một môi trường đấu giá trang sức trực tuyến công bằng và minh bạch,
                                            mang lại giá trị thực sự cho cả người mua và người bán,
                                            đồng thời thúc đẩy sự phát triển của thị trường trang sức.
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
                                            Online Support 24/7
                                        </h3>
                                        <p className="short-desc">
                                            Đội ngũ hỗ trợ trực tuyến của chúng tôi luôn sẵn sàng phục vụ bạn 24/7,
                                            đảm bảo giải đáp mọi thắc mắc và hỗ trợ kịp thời để bạn có trải nghiệm mua sắm hoàn hảo.
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
                                            History Of Us
                                        </h3>
                                        <p className="short-desc">
                                            Diamond Gold Silver (DGS) được thành lập từ tháng 5 năm 2024
                                            với mục tiêu kết nối những người yêu trang sức và
                                            tạo ra một cộng đồng đấu giá sôi động.
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
                                        <h3>Why You Choose Us ?</h3>
                                    </div>
                                    <p className="short-desc">
                                        Với phương châm hoạt động: “Đem lại hiệu quả kinh tế vượt trội”,
                                        chúng tôi hy vọng sẽ làm hài lòng Quý Khách và mong muốn được đồng hành cùng
                                        Quý Khách hàng trong suốt quá trình hoạt động và phát triển.
                                    </p>
                                    <div className="frequently-accordion about-us_accordion">
                                        <div id="accordion">
                                            <div className="card actives">
                                                <div
                                                    className="card-header"
                                                    id="headingOne"
                                                >
                                                    <h5 className="mb-0">
                                                        <Link to={""}
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne"
                                                            aria-expanded="true"
                                                        >
                                                            An Toàn và Tin Cậy
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
                                                        <h3 className="heading">

                                                        </h3>
                                                        <p className="short-desc">
                                                            Chúng tôi cam kết cung cấp môi trường đấu giá
                                                            trực tuyến an toàn với các biện pháp bảo mật cao,
                                                            đảm bảo quyền lợi cho cả người mua và người bán.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Tất cả giao dịch trên DGS đều được mã hóa và bảo vệ bằng công nghệ tiên tiến,
                                                            giúp bảo mật thông tin cá nhân và tài sản của bạn.
                                                            Bạn có thể yên tâm tham gia đấu giá mà không lo lắng về rủi ro.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div
                                                    className="card-header"
                                                    id="headingTwo"
                                                >
                                                    <h5 className="mb-0">
                                                        <Link
                                                            to={""}
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo"
                                                            aria-expanded="false"
                                                        >
                                                            Đa Dạng Sản Phẩm
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
                                                        <h3 className="heading">

                                                        </h3>
                                                        <p className="short-desc">
                                                            Diamond Gold Silver (DGS) mang đến cho bạn
                                                            một bộ sưu tập trang sức phong phú,
                                                            từ những món trang sức cổ điển đến hiện đại,
                                                            đáp ứng mọi sở thích và nhu cầu.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Chúng tôi hợp tác với nhiều nhà cung cấp uy tín
                                                            để mang đến những sản phẩm chất lượng nhất.
                                                            Bạn có thể dễ dàng tìm thấy những món trang sức độc đáo và quý hiếm,
                                                            phù hợp với phong cách cá nhân của mình.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div
                                                    className="card-header"
                                                    id="headingThree"
                                                >
                                                    <h5 className="mb-0">
                                                        <Link
                                                            to={""}
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo2"
                                                            aria-expanded="false"
                                                        >
                                                            Hỗ Trợ Khách Hàng 24/7
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
                                                        <h3 className="heading">

                                                        </h3>
                                                        <p className="short-desc">
                                                            Đội ngũ hỗ trợ khách hàng của chúng tôi luôn
                                                            sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn bất cứ lúc nào,
                                                            giúp bạn có trải nghiệm mua sắm tốt nhất.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Dù bạn gặp vấn đề gì trong quá trình đấu giá hay có bất kỳ câu hỏi nào,
                                                            đội ngũ chuyên viên của chúng tôi luôn
                                                            ở đây để hỗ trợ bạn qua nhiều kênh liên lạc khác nhau như chat trực tuyến,
                                                            email và điện thoại.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div
                                                    className="card-header"
                                                    id="headingfour"
                                                >
                                                    <h5 className="mb-0">
                                                        <Link
                                                            to={""}
                                                            className="collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree"
                                                            aria-expanded="false"
                                                        >
                                                            Đảm Bảo Hoàn Tiền 100%
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
                                                        <h3 className="heading">

                                                        </h3>
                                                        <p className="short-desc">
                                                            Chúng tôi cung cấp chính sách hoàn tiền linh hoạt,
                                                            giúp bạn hoàn toàn yên tâm khi tham gia đấu giá tại DGS.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Nếu bạn không hài lòng với sản phẩm đã mua,
                                                            bạn có thể yêu cầu hoàn tiền trong vòng 30 ngày.
                                                            Quy trình hoàn tiền của chúng tôi nhanh chóng và đơn giản,
                                                            đảm bảo bạn luôn cảm thấy thoải mái khi mua sắm.
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
                                                        style={{ width: '40%' }}
                                                        src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/270961679_10159870536636108_2642967668131478092_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tXLob4dQoKYQ7kNvgGGHDXb&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYDVprpAMT8O-RYhQiI73QWzrZza6Wec9YSgwpkujAoH-g&oe=665A4217"
                                                        alt="Umino's Testimonial Image"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="author-info">
                                                <span className="name">
                                                    Nguyễn Thế Hoàng
                                                </span>
                                                <span className="occupation">
                                                    Mentor of DGS
                                                </span>
                                                <div className="icon">
                                                    <img
                                                        src="assets/images/about-us/testimonial/testimonial-icon.png"
                                                        alt="Umino's Testimonial Icon"
                                                    />
                                                </div>
                                                <p className="short-desc">
                                                    Support and response has
                                                    been amazing, helping me
                                                    with several issues I came
                                                    across and got them solved
                                                    almost the same day. A
                                                    pleasure to work with them!
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
                                                <span className="name">
                                                    Jenifer Brown
                                                </span>
                                                <span className="occupation">
                                                    Manager of AZ
                                                </span>
                                                <div className="icon">
                                                    <img
                                                        src="assets/images/about-us/testimonial/testimonial-icon.png"
                                                        alt="Umino's Testimonial Icon"
                                                    />
                                                </div>
                                                <p className="short-desc">
                                                    Support and response has
                                                    been amazing, helping me
                                                    with several issues I came
                                                    across and got them solved
                                                    almost the same day. A
                                                    pleasure to work with them!
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
            <div className="container-fluid no-padding" style={{ background: "#FFFFFF", borderBottom: "1px solid #E0E0E0", position: "relative" }}>
                <div className="container second-content no-padding">
                    <img className="left-item-image" src="/auctionart/upload/image/banner-leftimg-gallery.png" alt="Alternate Text" />
                    <img className="right-item-image" src="/auctionart/upload/image/banner-rightimg-gallery.png" alt="Alternate Text" />

                    <div className="famous-talk">
                        <div className="famous-talk-left">
                            <img className="img-voice" src="/auctionart/upload/image/voice.png" alt="Alternate Text" />
                            <p className="voice-text" style={{ marginTop: "7px" }}>
                                “Chúng tôi muốn đi trước, đón đầu để đến khi thế giới nhìn vào, họ cũng thấy, ở Việt Nam có những nhà bán đấu giá có uy tín, họ cũng sẽ gửi tài sản về đây nhờ mình bán, hoặc mời mình ra nước ngoài hợp tác. Con đường còn rất dài, chúng tôi mới chỉ như một đứa bé đang chập chững tập đi.
                            </p>
                            <p className="voice-text" style={{ marginTop: "20px" }}>
                                Chỉ mong Lạc Việt sẽ là con tàu dẫn đầu, sau này càng nhiều tàu đi càng đông vui, cùng đến đích, tàu đi trước cản sóng cho tàu đi sau, vượt sóng lớn an toàn”
                            </p>
                        </div>
                        <div className="famous-talk-right">
                            <img src="/auctionart/upload/image/honghanh-ceo.png" alt="Alternate Text" className="honghanh-image" />
                            <p className="ceo-name">Bà Đỗ Thị Hồng Hạnh</p>
                            <p className="ceo-pos">Tổng Giám đốc</p>
                        </div>
                    </div>
                </div>
            </div>
            <Brand />
        </>
    );
}
