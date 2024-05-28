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
                                            We Are A Furniture Agency Focused On
                                            Delivering Content And Utility
                                            User-Experiences.
                                        </h3>
                                        <p className="short-desc">
                                            Adipiscing lacus ut elementum, nec
                                            duis, tempor litora turpis dapibus.
                                            Imperdiet cursus odio tortor in
                                            elementum. Egestas nunc eleifend
                                            feugiat lectus laoreet, vel nunc
                                            taciti integer cras. Hac pede dis,
                                            praesent nibh ac dui mauris sit.
                                            Pellentesque mi, facilisi mauris,
                                            elit sociis leo sodales accumsan.
                                            Iaculis ac fringilla torquent lorem
                                            consectetuer, sociosqu phasellus
                                            risus urna aliquam, ornare.
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
                                            Erat metus sodales eget dolor
                                            consectetuer, porta ut purus at et
                                            alias, nulla ornare velit amet enim
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
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto
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
                                            Erat metus sodales eget dolor
                                            consectetuer, porta ut purus at et
                                            alias, nulla ornare velit amet enim
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
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto
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
                                            Erat metus sodales eget dolor
                                            consectetuer, porta ut purus at et
                                            alias, nulla ornare velit amet enim
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
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae
                                            ab illo inventore veritatis et quasi
                                            architecto
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
                                        Mirum est notare quam littera gothica,
                                        quam nunc putamus parum claram
                                        anteposuerit litterarum.
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
                                                            Fast Free Delivery
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
                                                            Nam Liber Tempor Cum
                                                            Soluta Nobis
                                                            Eleifend Option
                                                        </h3>
                                                        <p className="short-desc">
                                                            Congue nihil
                                                            imperdiet doming id
                                                            quod mazim placerat
                                                            facer possim assum.
                                                            Typi non habent
                                                            claritatem insitam
                                                            est usus legentis in
                                                            iis qui facit eorum
                                                            claritatem.
                                                            Investigationes
                                                            demonstraverunt
                                                            lectores legere me.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Claritas est etiam
                                                            processus dynamicus,
                                                            qui sequitur
                                                            mutationem
                                                            consuetudium
                                                            lectorum.
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
                                                            More Than 30 Years
                                                            In The Business
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
                                                            Nam Liber Tempor Cum
                                                            Soluta Nobis
                                                            Eleifend Option
                                                        </h3>
                                                        <p className="short-desc">
                                                            Congue nihil
                                                            imperdiet doming id
                                                            quod mazim placerat
                                                            facer possim assum.
                                                            Typi non habent
                                                            claritatem insitam
                                                            est usus legentis in
                                                            iis qui facit eorum
                                                            claritatem.
                                                            Investigationes
                                                            demonstraverunt
                                                            lectores legere me.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Claritas est etiam
                                                            processus dynamicus,
                                                            qui sequitur
                                                            mutationem
                                                            consuetudium
                                                            lectorum.
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
                                                            100% Organic Foods
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
                                                            Nam Liber Tempor Cum
                                                            Soluta Nobis
                                                            Eleifend Option
                                                        </h3>
                                                        <p className="short-desc">
                                                            Congue nihil
                                                            imperdiet doming id
                                                            quod mazim placerat
                                                            facer possim assum.
                                                            Typi non habent
                                                            claritatem insitam
                                                            est usus legentis in
                                                            iis qui facit eorum
                                                            claritatem.
                                                            Investigationes
                                                            demonstraverunt
                                                            lectores legere me.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Claritas est etiam
                                                            processus dynamicus,
                                                            qui sequitur
                                                            mutationem
                                                            consuetudium
                                                            lectorum.
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
                                                            Best Shopping
                                                            Strategies
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
                                                            Nam Liber Tempor Cum
                                                            Soluta Nobis
                                                            Eleifend Option
                                                        </h3>
                                                        <p className="short-desc">
                                                            Congue nihil
                                                            imperdiet doming id
                                                            quod mazim placerat
                                                            facer possim assum.
                                                            Typi non habent
                                                            claritatem insitam
                                                            est usus legentis in
                                                            iis qui facit eorum
                                                            claritatem.
                                                            Investigationes
                                                            demonstraverunt
                                                            lectores legere me.
                                                        </p>
                                                        <p className="additional-desc">
                                                            Claritas est etiam
                                                            processus dynamicus,
                                                            qui sequitur
                                                            mutationem
                                                            consuetudium
                                                            lectorum.
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
