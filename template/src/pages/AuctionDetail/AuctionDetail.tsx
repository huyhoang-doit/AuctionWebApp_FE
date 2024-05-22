import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { Auction } from "../../models/Auction";
import { getAuction } from "../../api/AuctionAPI";
import { formatDateString } from "../../utils/formatDateString";
import { Jewelry } from "../../models/Jewelry";
import { User } from "../../models/User";
import { formatNumber } from "../../utils/formatNumber";
import ImageProduct from "./AuctionImageProduct";
import { StateAuctionView } from "../ShopLeftSibar/Components/StateAuctionView";


export default function AuctionDetail() {
    const [auction, setAuction] = useState<Auction | null>(null);
    const [jewelry, setJewelry] = useState<Jewelry | null>(null);
    const [jewelryUser, setJewelryUser] = useState<User | null>(null);
    const [staff, setStaff] = useState<User | null>(null);
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | string>('');
    const { id } = useParams();
    let auctionId = 0;

    try {
        auctionId = parseInt(id + "");
        if (Number.isNaN(auctionId)) {
            auctionId = 0;
        }
    } catch (error) {
        auctionId = 0;
        console.log("Error parsing auction id: " + error);
    }

    useEffect(() => {
        getAuction(auctionId)
            .then((auction) => {
                setAuction(auction);
                setJewelry(auction?.jewelry ?? null);
                setJewelryUser(auction?.jewelry?.user ?? null);
                setStaff(auction?.user ?? null);
            })
            .catch((error) => {
                console.log(error.message);
            });
        window.scrollTo(0, 0);
    }, [auctionId]);

    useEffect(() => {
        if (auction && auction.startDate && auction.endDate) {
            const now = new Date().getTime();
            const startDate = new Date(formatDateString(auction.startDate)).getTime();
            const endDate = new Date(formatDateString(auction.endDate)).getTime();

            if (auction.state === 'ONGOING') {
                // Calculate countdown until end date
                const distanceToEnd = endDate - now;

                if (distanceToEnd < 0) {
                    setTimeLeft("Phiên đấu giá đã kết thúc");
                    return;
                }

                const daysToEnd = Math.floor(distanceToEnd / (1000 * 60 * 60 * 24));
                const hoursToEnd = Math.floor((distanceToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutesToEnd = Math.floor((distanceToEnd % (1000 * 60 * 60)) / (1000 * 60));
                const secondsToEnd = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

                setTimeLeft({ days: daysToEnd, hours: hoursToEnd, minutes: minutesToEnd, seconds: secondsToEnd });
            } else if (auction.state === 'WAITING') {
                // Calculate countdown until start date
                const distanceToStart = startDate - now;

                if (distanceToStart < 0) {
                    setTimeLeft("Phiên đấu giá đang diễn ra");
                    return;
                }

                const daysToStart = Math.floor(distanceToStart / (1000 * 60 * 60 * 24));
                const hoursToStart = Math.floor((distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutesToStart = Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60));
                const secondsToStart = Math.floor((distanceToStart % (1000 * 60)) / 1000);

                setTimeLeft({ days: daysToStart, hours: hoursToStart, minutes: minutesToStart, seconds: secondsToStart });
            } else if (auction.state === 'FINISHED') {
                // Auction finished
                setTimeLeft("Phiên đấu giá đã kết thúc");
                return;
            }

            const timer = setInterval(() => {
                const now = new Date().getTime();

                if (auction.state === 'ONGOING') {
                    const distanceToEnd = endDate - now;

                    if (distanceToEnd < 0) {
                        setTimeLeft("Phiên đấu giá đã kết thúc");
                        clearInterval(timer);
                        return;
                    }

                    const daysToEnd = Math.floor(distanceToEnd / (1000 * 60 * 60 * 24));
                    const hoursToEnd = Math.floor((distanceToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutesToEnd = Math.floor((distanceToEnd % (1000 * 60 * 60)) / (1000 * 60));
                    const secondsToEnd = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

                    setTimeLeft({ days: daysToEnd, hours: hoursToEnd, minutes: minutesToEnd, seconds: secondsToEnd });
                } else if (auction.state === 'WAITING') {
                    const distanceToStart = startDate - now;

                    if (distanceToStart < 0) {
                        setTimeLeft("Phiên đấu giá đang diễn ra");
                        clearInterval(timer);
                        return;
                    }

                    const daysToStart = Math.floor(distanceToStart / (1000 * 60 * 60 * 24));
                    const hoursToStart = Math.floor((distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutesToStart = Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60));
                    const secondsToStart = Math.floor((distanceToStart % (1000 * 60)) / 1000);

                    setTimeLeft({ days: daysToStart, hours: hoursToStart, minutes: minutesToStart, seconds: secondsToStart });
                }
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [auction]);


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
                                            {jewelry && <ImageProduct jewelry={jewelry} />}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="para" id="countdown-txt">Cuộc đấu giá: <StateAuctionView state={auction?.state ? auction?.state : "null"} /></p>
                                        <div className="umino-countdown_area mb-4">
                                            {typeof timeLeft === 'string' ? (
                                                <div className="umino-countdown" style={{ padding: "10px 0px" }}>{timeLeft}</div>
                                            ) : (
                                                <div className="umino-countdown">
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.days}</div>
                                                        <div className="countdown-label">Days</div>
                                                    </div>
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.hours}</div>
                                                        <div className="countdown-label">Hours</div>
                                                    </div>
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.minutes}</div>
                                                        <div className="countdown-label">Minutes</div>
                                                    </div>
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.seconds}</div>
                                                        <div className="countdown-label">Seconds</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="register-form">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Mã trang sức:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin fw-bold">{jewelry?.id}</p>
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
                                                        <span className="fw-bold novaticPrice openningPrice">{formatNumber(auction?.firstPrice)}</span>
                                                        <span className="fw-bold unitPrice"> VNĐ</span>
                                                    </p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Phí đăng ký tham gia đấu giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">
                                                        <span className="fw-bold novaticPrice registerFee">{formatNumber(auction?.participationFee)}</span>
                                                        VNĐ
                                                    </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Bước giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin">
                                                        <span className="fw-bold novaticPrice step-price stepPrice">{formatNumber(auction?.priceStep)}</span>
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
                                                        <span className="fw-bold novaticPrice depositPrice">{formatNumber(auction?.deposit)}</span> VNĐ</p>
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

                                                    <p className="fw-bold right-info-text no-margin">{jewelryUser?.fullName}</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Thời gian bắt đầu trả giá:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="fw-bold right-info-text no-margin">{auction?.startDate ? formatDateString(auction?.startDate) : ""}</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Thời gian kết thúc trả giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin">{auction?.startDate ? formatDateString(auction?.endDate) : ""}</p>
                                                </div>
                                                <div className="col-6 col-xs-6">
                                                    <b className="spanauctionproperty" style={{ color: "red" }}>Giá trúng tối thiểu:</b>
                                                </div>
                                                <div className="col-6 col-xs-6 right-info-text no-margin">
                                                    <span className="fw-bold spanColorAuctionproperty novaticPrice" style={{ color: "red" }}>{formatNumber(auction?.firstPrice)}</span>
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
                                                        <p>Tổ chức đấu giá tài sản: Công ty Đấu giá hợp danh Lạc Việt, địa chỉ: số 49 Văn Cao, phường Liễu Giai, quận Ba&nbsp;Đình, Hà Nội.</p>
                                                        <p>Người có tài sản đấu giá: Viễn thông&nbsp;Khánh Hòa, địa chỉ:&nbsp;Số 50 Lê Thánh Tôn, phường Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa.</p>
                                                        <p>&nbsp;</p><ol>
                                                            <li>
                                                                <strong>Tài sản đấu giá, giá khởi điểm, bước giá, tiền mua hồ sơ, tiền đặt trước:</strong>
                                                            </li>
                                                        </ol>
                                                        <ul>
                                                            <li>
                                                                <strong>Tài sản đấu giá:&nbsp;</strong>
                                                                {jewelry?.name}, cụ thể:</li>
                                                        </ul>
                                                        <p></p>
                                                        <p><strong>- Giá khởi điểm: {formatNumber(auction?.firstPrice)}&nbsp;</strong>
                                                            <i>(Bằng chữ: Mười hai tỷ, hai trăm ba mươi sáu triệu, năm trăm năm mươi lăm nghìn đồng) (Giá đã bao gồm thuế VAT).</i>
                                                        </p><p>
                                                            <strong>- Tiền mua hồ sơ tham gia đấu giá</strong> (trên hệ thống đấu giá trực tuyến được coi là “phí đăng ký tham gia đấu giá”)
                                                            : <strong>{formatNumber(auction?.participationFee)} đồng/Hồ sơ&nbsp;</strong><i>(Bằng chữ: Năm trăm nghìn đồng trên hồ sơ).</i></p><p><strong>-
                                                                Tiền đặt trước: {formatNumber(auction?.deposit)} đồng&nbsp;</strong><i>(Bằng chữ: Hai tỷ bốn trăm triệu đồng).</i></p><p><strong>-&nbsp;
                                                                    Bước giá: {formatNumber(auction?.priceStep)} đồng/bước giá&nbsp;</strong><i>(Bằng chữ: Ba mươi triệu đồng trên bước giá).</i></p><p>
                                                            <strong>2. Điều kiện, cách thức đăng ký,&nbsp;thời gian bán, thu hồ sơ đấu giá và địa điểm xem tài sản đấu giá:</strong></p>
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
                                                            <td><b>{staff?.fullName}</b></td>
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
