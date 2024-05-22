import { useEffect, useState } from "react";
import { Auction } from "../../../models/Auction";
import { formatNumber } from "../../../utils/formatNumber";
import { formatDateString } from "../../../utils/formatDateString";
import { getIconImageByJewelryId } from "../../../api/ImageApi";
import { Image } from "../../../models/Image";
import { Link } from "react-router-dom";
import { StateAuctionView } from "./StateAuctionView";


interface AuctionItemProps {
    auction: Auction;
}

export const AuctionItem: React.FC<AuctionItemProps> = (props) => {
    const jewelryId: number | null = props.auction.jewelry ? props.auction.jewelry.id : null;
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | string>('');
    const [image, setImage] = useState<Image | null>(null);

    useEffect(() => {
        if (jewelryId !== null) {
            getIconImageByJewelryId(jewelryId)
                .then((imagesData) => {
                    setImage(imagesData);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }, [props.auction.jewelry]);

    useEffect(() => {
        if (props.auction && props.auction.startDate) {
            const startDate = new Date(formatDateString(props.auction.startDate)).getTime();
            const updateCountdown = () => {
                const now = new Date().getTime();
                const distance = startDate - now;

                if (distance < 0) {
                    setTimeLeft("Auction started");
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            };

            const timer = setInterval(updateCountdown, 1000);

            return () => clearInterval(timer);
        }
    }, [props.auction]);

    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="slide-item">
                <div className="single-product">
                    <div className="product-img">
                        <a href="/single-product">
                            <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-2.jpg"
                                alt="Umino's Product Image"
                            />
                        </a>
                        <div className="add-actions">
                            <ul>
                                <li>
                                    <a
                                        href="cart.html"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Add To cart"
                                    >
                                        <i className="ion-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="wishlist.html"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Add To Wishlist"
                                    >
                                        <i className="ion-ios-heart-outline"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="compare.html"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Add To Cart"
                                    >
                                        <i className="fa fa-chart-bar"></i>
                                    </a>
                                </li>
                                <li
                                    className="quick-view-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalCenter"
                                >
                                    <a
                                        href="javascript:void(0)"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Quick View"
                                    >
                                        <i className="ion-ios-search"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="product-desc_info">
                            <div className="price-box">
                                <span className="new-price">
                                    {props.auction.firstPrice}
                                </span>
                                <span className="old-price">
                                    $100.00
                                </span>
                            </div>
                            <h6 className="product-name">
                                <a href="/single-product">
                                    Aliquet auctor
                                    semali
                                </a>
                            </h6>
                            <div className="rating-box">
                                <ul>
                                    <li>
                                        <i className="ion-ios-star"></i>
                                    </li>
                                    <li>
                                        <i className="ion-ios-star"></i>
                                    </li>
                                    <li>
                                        <i className="ion-ios-star"></i>
                                    </li>
                                    <li className="silver-color">
                                        <i className="ion-ios-star-half"></i>
                                    </li>
                                    <li className="silver-color">
                                        <i className="ion-ios-star-outline"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-slide_item">
                <div className="single-product">
                    <div className="product-img">
                        <Link to={"/single-auction/" + props.auction.id}>
                            <img
                                src={image?.data}
                                alt="Umino's Product Image"
                            />
                        </Link>
                    </div>
                    <div className="umino-product-content">
                        <div className="product-desc_info">
                            <div className="price-box">
                                <span className="new-price">
                                    Giá khởi điểm: {formatNumber(props.auction.firstPrice)} VNĐ
                                </span>
                            </div>
                            <h6 className="fw-bold product-name">
                                <Link to={"/single-auction/" + props.auction.id}>
                                    Tên phiên: {props.auction.name}
                                </Link>
                            </h6>
                            <h6 className="product-name">
                                Tên chủ tài sản: {props.auction.jewelry?.user?.fullName}
                            </h6>
                            <div className="product-short_desc">
                                <p>
                                    Trạng thái: <StateAuctionView state={props.auction.state}/>
                                </p>
                            </div>
                            <div className="umino-countdown_area mb-4">
                                {typeof timeLeft === 'string' ? (
                                    <div className="umino-countdown" style={{padding: "20px 0px"}}>{timeLeft}</div>
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
                            <Link to={"/single-auction/" + props.auction.id}>
                                <button
                                    className="btn btn-danger mb-4 mt-2" style={{ width: "200px", padding: "10px 20px" }}>
                                    Chi tiết
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
