import { Link } from "react-router-dom";
import { Auction } from "../../../models/Auction";
import useIconImage from "../../../hooks/useIconImage";
import useCountDown from "../../../hooks/useCountDown";
import { formatNumber } from "../../../utils/formatNumber";

interface LandingAuctionCardProps { auction: Auction; }

const formatCountdown = (timeLeft: ReturnType<typeof useCountDown>) => {
  if (typeof timeLeft === "string") return timeLeft || "Đang cập nhật";
  return [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((unit) => String(unit).padStart(2, "0")).join(":");
};

export default function LandingAuctionCard({ auction }: LandingAuctionCardProps) {
  const image = useIconImage(auction.jewelry?.id ?? null);
  const timeLeft = useCountDown(auction);
  const isLive = auction.state === "ONGOING";
  return <article className="landing-auction-card">
    <Link className="landing-auction-card__image" to={`/tai-san-dau-gia/${auction.id}`}>
      <img src={image || "/assets/images/product/large-size/1.jpg"} alt={auction.name || "Trang sức đấu giá"} />
      <span className={`landing-auction-card__status ${isLive ? "is-live" : ""}`}>{isLive ? "Đang diễn ra" : "Sắp mở"}</span>
    </Link>
    <div className="landing-auction-card__content">
      <p className="landing-auction-card__label">{auction.jewelry?.category?.name || "Trang sức tuyển chọn"}</p>
      <h3><Link to={`/tai-san-dau-gia/${auction.id}`}>{auction.name}</Link></h3>
      <div className="landing-auction-card__meta"><span>Giá khởi điểm</span><strong>{formatNumber(auction.firstPrice)} VNĐ</strong></div>
      <div className="landing-auction-card__countdown"><span>{isLive ? "Kết thúc sau" : "Bắt đầu sau"}</span><strong>{formatCountdown(timeLeft)}</strong></div>
    </div>
  </article>;
}
