import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { Auction } from "../../models/Auction";
import { getAuction } from "../../api/AuctionAPI";
import { formatDateString } from "../../utils/formatDateString";
import { Jewelry } from "../../models/Jewelry";
import { User } from "../../models/User";
import { formatNumber } from "../../utils/formatNumber";
import { AuctionDetailJewelry } from "../AuctionDetail/Components/AuctionDetailJewelry";
import { handlePay } from "../../api/PaymentAPI";
import { UserContext } from "../../hooks/useContext";


export default function RegisterForAuction() {
    // const token = localStorage.getItem("access_token");
    // const user = useAccount(token)
    const [auction, setAuction] = useState<Auction | null>(null);
    const [jewelry, setJewelry] = useState<Jewelry | null>(null);
    const [jewelryUser, setJewelryUser] = useState<User | null>(null);
    const [staff, setStaff] = useState<User | null>(null);
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [amount, setAmount] = useState(0);
    const context = useContext(UserContext);
    let user: User | null = null;
    if (context?.account) {
        user = context.account;
    }

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
                setAmount(auction?.deposit ? auction?.deposit + auction.participationFee : 0);
            })
            .catch((error) => {
                console.log(error.message);
            });
        window.scrollTo(0, 0);
    }, [auctionId]);

    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1);
    };

    const handleCheckbox2Change = () => {
        setCheckbox2(!checkbox2);
    };

    const handleCheckbox3Change = () => {
        setCheckbox3(!checkbox3);
    };

    const handlePayment = () => {
        if (user) {
            handlePay(amount, auctionId, user?.username ? user.username : "", 0);
        }
    }

    return (
        <>
            <div className="template-color-1">
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
                                        Đăng kí đấu giá
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
                                        <div className="article-content" style={{ height: "100%" }}>
                                            <object data="https://heyzine.com/flip-book/8bac44c0c6.html" style={{ width: "100%", height: "100%" }}>
                                                <iframe src="https://heyzine.com/flip-book/8bac44c0c6.html" style={{ width: "100%", height: "100%" }}>
                                                    <p>This browser does not support PDF!</p>
                                                </iframe>
                                            </object>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="register-form">
                                            <div className="row">
                                                <h3 className="no-margin fw-bold auction-property-des-title">THÔNG TIN TÀI SẢN ĐẤU GIÁ</h3>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Mã trang sức:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin fw-bold" style={{ color: "#b41712" }}>{jewelry?.id}</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Cuộc đấu giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin fw-bold" style={{ color: "#b41712" }}>{auction?.name}</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Tên trang sức:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin fw-bold" style={{ color: "#b41712" }}>{jewelry?.name}</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Phí tham gia đấu giá tài sản</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin" style={{ color: "#b41712" }}>
                                                        <span className="fw-bold novaticPrice registerFee">{formatNumber(auction?.participationFee)}</span>
                                                        VNĐ
                                                    </p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Tiền đặt trước:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin" style={{ color: "#b41712" }}>
                                                        <span className="fw-bold novaticPrice depositPrice">{formatNumber(auction?.deposit)}</span> VNĐ</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Giá khởi điểm:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin" style={{ color: "#b41712" }}>
                                                        <span className="fw-bold novaticPrice openningPrice">{formatNumber(auction?.firstPrice)}</span>
                                                        <span className="fw-bold unitPrice"> VNĐ</span>
                                                    </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Bước giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="right-info-text no-margin" style={{ color: "#b41712" }}>
                                                        <span className="fw-bold novaticPrice step-price stepPrice">{formatNumber(auction?.priceStep)}</span>
                                                        <span className="fw-bold unitPrice"> VNĐ</span>
                                                    </p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Phương thức đấu giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin" style={{ color: "#b41712" }}>Trả giá lên và liên tục</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="left-title-text no-margin">Tên chủ tài sản:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="fw-bold right-info-text no-margin" style={{ color: "#b41712" }}>{jewelryUser?.fullName}</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin">Thời gian bắt đầu đấu giá:</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="fw-bold right-info-text no-margin" style={{ color: "#b41712" }}>{auction?.startDate ? formatDateString(auction?.startDate) : ""}</p>
                                                </div>
                                                <div className="col-6">

                                                    <p className="left-title-text no-margin" >Thời gian kết thúc đấu giá:</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="fw-bold right-info-text no-margin" style={{ color: "#b41712" }}>{auction?.startDate ? formatDateString(auction?.endDate) : ""}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-confirm-check">
                                            <p className="no-margin checkbox-text">
                                                <input onChange={handleCheckbox1Change} type="checkbox" id="Check" className="checkbox-biddingrequest" />
                                                Tôi đã đọc và đồng ý với quy chế đấu giá trên
                                            </p>
                                            <p className="no-margin checkbox-text">
                                                <input onChange={handleCheckbox2Change} type="checkbox" id="Check2" className="checkbox-biddingrequest" />
                                                Tôi tự nguyện không nhận tiền lãi phát sinh từ khoản tiền đặt trước
                                            </p>
                                            <p className="no-margin checkbox-text">
                                                <input onChange={handleCheckbox3Change} type="checkbox" id="Check3" className="checkbox-biddingrequest" />
                                                Tôi đã hiểu rõ về tài sản đấu giá và không có ý kiến gì về việc xem tài sản đấu giá
                                            </p>
                                            <button onClick={handlePayment} className="bidding-request-confirm-btn" style={{ borderRadius: "10px", color: checkbox1 && checkbox2 && checkbox3 ? "white" : "", backgroundColor: checkbox1 && checkbox2 && checkbox3 ? "#B41712" : "" }} id="btnSubmit" >
                                                <i className="fa fa-gavel" style={{ marginRight: "10px" }}></i>Đăng ký tham gia
                                            </button>
                                            <div style={{ display: "none" }} className="summary-item Novatic_register" id="Novatic_register">
                                                {/* <h3 style="color: #d98217; margin: 0px; padding: 5px; font-family: Montserrat; font-size: 16px; text-transform: uppercase; margin-top: 20px">Đã đăng ký</h3> */}
                                                <p style={{ marginBottom: "0px", fontFamily: "Montserrat" }}>Chưa chuyển tiền đặt trước.</p>
                                            </div>
                                            <div style={{ display: "none" }} className="summary-item" id="Novatic_deposit">
                                                {/* <h3 style="color: #03A9F4; margin: 0px; padding: 5px; font-family: Montserrat; font-size: 16px; text-transform: uppercase; margin-top: 20px ">Đã chuyển tiền đặt trước</h3> */}
                                                {/* <p className="text" style="margin-bottom: 0px; text-align: center !important; font-family: Montserrat; ">Xin vui lòng đợi đấu giá viên duyệt.</p> */}
                                            </div>
                                            <div style={{ display: "none" }} className="summary-item" id="Novatic_deposit_confirm">
                                                {/* <h3 style="color: #19a858; margin: 0px; padding: 5px; font-family: Montserrat; font-size: 16px; text-transform: uppercase; margin-top: 20px ">Đã đăng kí tham gia đấu giá thành công</h3> */}
                                                {/* <p className="text" style="margin-bottom: 0px; text-align: center; font-family: Montserrat; ">Đấu giá viên đã phê duyệt.</p> */}
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
                                                        data-bs-toggle="tab"
                                                        href="#description"
                                                    >
                                                        <span>Mô tả tài sản</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="active"
                                                        data-bs-toggle="tab"
                                                        href="#specification"
                                                    >
                                                        <span>
                                                            Thông tin đấu giá
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content umino-tab_content">
                                            <AuctionDetailJewelry isBid={false} auction={auction} jewelry={jewelry} />
                                            <div
                                                id="specification"
                                                className="tab-pane active"
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
            </div >
        </>
    );
}
