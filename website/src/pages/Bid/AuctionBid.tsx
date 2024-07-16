import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Auction } from "../../models/Auction";
import { User } from "../../models/User";
import { Jewelry } from "../../models/Jewelry";
import { changeStateAuction, getAuction } from "../../api/AuctionAPI";
import { useNavigate, useParams } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";
import ImageProduct from "../AuctionDetail/AuctionImageProduct";
import { AuctionTabDetail } from "../AuctionDetail/Components/AuctionTabDetail";
import { BidConfirm } from "../MyAccount/Modal/Modal";
import { BidInfo } from "./Components/BidInfo";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../hooks/useContext";
import { AuctionHistory } from "../../models/AuctionHistory";
import { getAuctionHistoriesByAuctionId } from "../../api/AuctionHistoryAPI";
import { ToastContainer, toast } from 'react-toastify';
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { BASE_WS } from "../../config/config";
import useCountDownBid from "../../hooks/useCountDownBid";
import Swal from "sweetalert2";
import { createTransactionForWinner } from "../../api/TransactionAPI";
import { numberToVietnameseText } from "../../utils/numberToVietnameseText";
import useIsStaff from "../../hooks/useIsStaff";

export const AuctionBid = () => {
    const navigate = useNavigate();
    const [auction, setAuction] = useState<Auction | null>(null);
    const [jewelry, setJewelry] = useState<Jewelry | null>(null);
    const [staff, setStaff] = useState<User | null>(null);
    const [bidValue, setBidValue] = useState<number>(auction?.lastPrice || 0);
    const [displayValue, setDisplayValue] = useState<string>("");
    const [errorBidValue, setErrorBidValue] = useState("");
    const [auctionHistories, setAuctionHistories] = useState<AuctionHistory[]>([]);
    const [bidPerPage, setBidPerPage] = useState<number>(3);
    let timeLeft = useCountDownBid(auction);
    const [connected, setConnected] = useState(false);
    const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
    const [isEnding, setIsEnding] = useState(false);
    const context = useContext(UserContext);
    const isStaff = useIsStaff();

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
                setStaff(auction?.user ?? null);
                if (auction?.state === "FINISHED") {
                    setIsEnding(true)
                }
                const price = auction?.lastPrice ?? auction?.firstPrice ?? 0;
                setDisplayValue(formatNumber(price));
                setBidValue(auction?.lastPrice ?? auction?.firstPrice ?? 0);
            })
            .catch((error) => {
                console.error(error.message);
            });
        window.scrollTo(0, 0);
    }, [auctionId]);

    useEffect(() => {
        if (auction && auction?.state !== 'ONGOING' && auction?.state !== 'FINISHED') {
            Swal.fire('Phiên đấu giá chưa bắt đầu.', 'Vui lòng chờ...', 'warning');
            navigate("/tai-san-dau-gia/" + auctionId);
        }
    }, [auction, auctionId, navigate]);

    useEffect(() => {
        const handleAuctionEnd = async () => {
            if (
                typeof timeLeft === 'object' &&
                timeLeft.days === 0 &&
                timeLeft.hours === 0 &&
                timeLeft.minutes === 0 &&
                timeLeft.seconds === 0 &&
                auction?.state === "ONGOING"
            ) {
                const userWin = await createTransactionForWinner(auctionId);

                if (userWin) {
                    const isUserWinner = userWin.username === user?.username;
                    Swal.fire({
                        icon: "success",
                        html: isUserWinner
                            ? `
                                <div><strong>Phiên đấu giá đã kết thúc</strong></div>
                                <div style="color: green; margin: 5px 0px"><strong>Bạn đã thắng phiên đấu giá này.</strong></div>
                                <div>Hệ thống đã gửi yêu cầu thanh toán cho bạn, vui lòng vào hồ sơ cá nhân để tiến hành thanh toán.</div>`
                            : `
                                <div><strong>Phiên đấu giá đã kết thúc</strong></div>
                                <div><strong>${userWin.fullName}</strong> đã thắng phiên đấu giá này với giá cuối cùng là ${formatNumber(auction?.lastPrice)} (${numberToVietnameseText(auction?.lastPrice ?? 0)}).</div>`,
                        showCancelButton: false,
                        confirmButtonText: 'Đồng ý',
                        allowOutsideClick: () => !Swal.isLoading(),
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        html: `
                            <div><strong>Phiên đấu giá đã kết thúc</strong></div>
                            <div style="color: red; margin: 5px 0px"><strong>Không có người thắng trong phiên đấu giá này.</strong></div>`,
                        showCancelButton: false,
                        confirmButtonText: 'Đồng ý',
                        allowOutsideClick: () => !Swal.isLoading(),
                    });
                }
                await changeStateAuction(auctionId, 'FINISHED');
                setAuction({ ...auction, state: 'FINISHED' });
                setIsEnding(true);
            }
        };
        handleAuctionEnd();
    }, [timeLeft, auctionId, user, auction]);

    useEffect(() => {
        const socket = new SockJS(`${BASE_WS}/ws`);
        const newClient = Stomp.over(socket);

        const onMessageReceived = (message: Stomp.Message) => {
            const receivedData = JSON.parse(message.body);
            if (receivedData.auctionId === auctionId) {
                setAuction(prevAuction => ({
                    ...prevAuction!,
                    lastPrice: receivedData.lastPrice,
                    endDate: receivedData.endDate
                }));
                setBidValue(receivedData.lastPrice);
                setDisplayValue(formatNumber(receivedData.lastPrice));

                const isMeBid = receivedData.username === user?.username;

                if (!isMeBid) {
                    toast.warn('Giá cuối đã thay đổi!', { autoClose: 3000 });
                }

                if (!isMeBid && receivedData.bonusTime > 0) {
                    toast.warn('Thời gian kết thúc đấu giá kéo dài thêm 5 giây!', { autoClose: 3000 });
                }
            }
        };

        const onOutAuctionMessage = (message: Stomp.Message) => {
            const receivedData = JSON.parse(message.body);
            if (receivedData.userId === user?.id) {
                Swal.fire('Bạn đã bị cấm khỏi phiên này', 'Lý do: ' + receivedData.kickReason, 'error');
                navigate('/tai-san-dau-gia/' + auctionId);
            }
            setAuction(prevAuction => ({
                ...prevAuction!,
                lastPrice: receivedData.lastPrice
            }));
            setBidValue(receivedData.lastPrice);
            setDisplayValue(formatNumber(receivedData.lastPrice));
        };

        newClient.connect(
            {},
            () => {
                setConnected(true);
                newClient.subscribe("/user/auction", onMessageReceived);
                newClient.subscribe("/user/out-auction-registration", onOutAuctionMessage);
            },
            (error) => {
                console.error("Connection error: ", error);
            }
        );

        setStompClient(newClient);

        return () => {
            if (newClient.connected) {
                newClient.disconnect(() => {
                    setConnected(false);
                });
            }
        };
    }, [auctionId, user, navigate]);

    useEffect(() => {
        if (auctionId !== null) {
            getAuctionHistoriesByAuctionId(auctionId, bidPerPage)
                .then((response) => {
                    setAuctionHistories(response.auctionHistoriesData);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        }
    }, [auctionId, bidPerPage, auction])

    useEffect(() => {
        setDisplayValue(formatNumber(bidValue));
    }, [bidValue]);

    const handleIncrement = () => {
        if (auction?.priceStep !== undefined) {
            setBidValue(prevValue => {
                const newValue = (prevValue || 0) + (auction.priceStep ?? 0);
                if (auction.lastPrice === null && newValue <= (auction.firstPrice ?? 0)) {
                    setErrorBidValue("Giá trị đấu giá phải lớn hơn giá cao nhất hiện tại + bước giá");
                    return newValue;
                }
                if (auction.lastPrice !== null && newValue <= (auction.lastPrice ?? 0)) {
                    setErrorBidValue("Giá trị đấu giá phải lớn hơn giá cao nhất hiện tại + bước giá");
                    return newValue;
                }
                setErrorBidValue("")
                return newValue;
            });
        }
    };

    const handleDecrement = () => {
        if (auction?.lastPrice !== undefined) {
            setBidValue(prevValue => {
                const newValue = prevValue - (auction.priceStep ?? 0);
                if (auction.lastPrice === null && newValue < (auction.firstPrice ?? 0)) {
                    setErrorBidValue("Giá trị đấu giá phải lớn hơn giá cao nhất hiện tại + bước giá");
                    return prevValue;
                }
                if (newValue >= auction.lastPrice) {
                    return newValue;
                } else {
                    setErrorBidValue("Giá trị đấu giá phải lớn hơn giá cao nhất hiện tại + bước giá");
                    return prevValue;
                }
            });
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^0-9]/g, '');
        const numericValue = parseInt(value, 10);
        if (auction && !isNaN(numericValue) && numericValue >= 1) {
            setBidValue(numericValue);
            setDisplayValue(formatNumber(numericValue));
            setErrorBidValue("")
            if (auction.lastPrice === null && numericValue < (auction.firstPrice ?? 0) + (auction.priceStep ?? 0)) {
                setErrorBidValue("Giá trị đấu giá phải lớn hơn giá cao nhất hiện tại + bước giá");
                return;
            }
            if (numericValue < ((auction.lastPrice ?? 0) + (auction.priceStep ?? 0))) {
                setErrorBidValue("Giá trị đấu giá phải lớn hơn giá cao nhất hiện tại + bước giá");
                return
            }
        } else {
            setBidValue(auction?.firstPrice || 0);
            setDisplayValue(formatNumber(auction?.firstPrice || 0));
            setErrorBidValue("")
        }
    };

    const isMyBidFirst = () => {
        return auctionHistories.some((auctionHistory, index) => user?.id === auctionHistory.user.id && index === 0);
    };

    const renderBidButton = () => {
        const isMeFirstIndex = isMyBidFirst();

        const isBidDisabled = auction?.lastPrice === null
            ? bidValue < (auction.firstPrice + auction.priceStep)
            : bidValue < ((auction?.lastPrice || 0) + (auction?.priceStep || 0));

        if (isBidDisabled || isMeFirstIndex) {
            return (
                <button
                    className="fw-bold text-center eg-btn btn--primary text-white btn--sm"
                    style={{
                        backgroundColor: "#ccc",
                        textTransform: "unset",
                        border: "unset",
                        borderRadius: "5px",
                        padding: "10px 10px",
                        fontSize: "16px"
                    }}
                    disabled
                >
                    <i className="fa fa-gavel" style={{ marginRight: "7px" }}></i>Trả giá
                </button>
            );
        } else if (!isMeFirstIndex && bidValue >= ((auction?.lastPrice || 0) + (auction?.priceStep || 0))) {
            return <BidConfirm
                stompClient={stompClient} connected={connected} timeLeft={timeLeft}
                setAuctionHistories={setAuctionHistories} setDisplayValue={setDisplayValue} setAuction={setAuction} username={user?.username} auction={auction} bidValue={bidValue} />;
        } else {
            return (
                <button
                    className="fw-bold text-center eg-btn btn--primary text-white btn--sm"
                    style={{
                        backgroundColor: "#ccc",
                        textTransform: "unset",
                        border: "unset",
                        borderRadius: "5px",
                        padding: "10px 10px",
                        fontSize: "16px"
                    }}
                    disabled
                >
                    <i className="fa fa-gavel" style={{ marginRight: "7px" }}></i>Trả giá
                </button>
            );
        }
    };

    const renderHigherBidButton = () => {
        const isMeFirstIndex = isMyBidFirst();

        if ((!isMeFirstIndex && auction?.lastPrice === null && bidValue < ((auction.firstPrice ?? 0) + (auction.priceStep ?? 0))) ||
            (!isMeFirstIndex && auction?.lastPrice !== null && bidValue < ((auction?.lastPrice ?? 0) + (auction?.priceStep ?? 0)))) {
            return (
                <button
                    onClick={() => {
                        setBidValue((auction?.lastPrice ?? auction?.firstPrice ?? 0) + (auction?.priceStep ?? 0));
                        setErrorBidValue("");
                    }}
                    className="fw-bold text-center eg-btn btn--primary text-dark btn--sm"
                    style={{
                        backgroundColor: "white",
                        textTransform: "unset",
                        border: "1px solid rgba(0,0,0,.09)",
                        padding: "10px 10px",
                        fontSize: "14px",
                        width: "100%",
                    }}
                >
                    Đặt giá cao hơn mức giá cao nhất 01 (một) bước giá
                </button>
            );
        }
        return null;
    };

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
                                        <div className="sp-img_area">
                                            {jewelry && <ImageProduct jewelry={jewelry} />}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="para" id="countdown-txt">Thời gian còn lại để trả giá</p>
                                        <div className="umino-countdown_area mb-4">
                                            {typeof timeLeft === 'string' ? (
                                                <div className="umino-countdown" style={{ padding: "10px 0px" }}>{timeLeft}</div>
                                            ) : (
                                                <div className="umino-countdown">
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.days}</div>
                                                        <div className="countdown-label">Ngày</div>
                                                    </div>
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.hours}</div>
                                                        <div className="countdown-label">Giờ</div>
                                                    </div>
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.minutes}</div>
                                                        <div className="countdown-label">Phút</div>
                                                    </div>
                                                    <div className="countdown-item">
                                                        <div>{timeLeft.seconds}</div>
                                                        <div className="countdown-label">Giây</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="register-form" style={{ borderRadius: "0px" }}>
                                            <div className="row">
                                                <h4 className="no-margin fw-bold mb-4">ĐẶT GIÁ (VNĐ)</h4>
                                                <BidInfo auction={auction} />
                                                {(!isEnding && !isStaff) &&
                                                    <>
                                                        <div className="col-9 d-flex align-items-center">
                                                            <button
                                                                style={{ borderRadius: '0px', border: "1px solid rgba(0,0,0,.09)" }}
                                                                type="button"
                                                                className="btn btn-"
                                                                onClick={handleDecrement}
                                                                disabled={isMyBidFirst()}
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="text"
                                                                className="no-spinners form-control fw-bold text-center"
                                                                style={{ borderRadius: '0px' }}
                                                                value={displayValue}
                                                                onChange={handleInputChange}
                                                                disabled={isMyBidFirst()}
                                                            />
                                                            <button
                                                                type="button"
                                                                style={{ borderRadius: '0px', border: "1px solid rgba(0,0,0,.09)" }}
                                                                className="btn btn-outline-secondary"
                                                                onClick={handleIncrement}
                                                                disabled={isMyBidFirst()}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <div className="col-3">
                                                            {renderBidButton()}
                                                        </div>
                                                        <div className="col-9">
                                                            {renderHigherBidButton()}
                                                        </div>
                                                    </>
                                                }
                                                {!isMyBidFirst() && errorBidValue && <span className="fw-bold text-danger mt-2">{errorBidValue}</span>}
                                                {isMyBidFirst() && auction?.state !== 'FINISHED' && <span className="fw-bold text-success mt-2">Hiện bạn là người trả giá cao nhất. <br />
                                                    Vui lòng chờ người khác đặt giá cao hơn để tiếp tục trả giá.</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AuctionTabDetail stompClient={stompClient} connected={connected}
                        isBid={true} setBidPerPage={setBidPerPage} auctionHistories={auctionHistories} auction={auction} staff={staff} jewelry={jewelry} />
                </div>
            </div >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </>
    )
}