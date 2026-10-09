import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuctionsByStateNotPageale } from "../../api/AuctionAPI";
import { Auction } from "../../models/Auction";
import LandingAuctionCard from "./components/LandingAuctionCard";
import StatsMetricsVendo from "./components/StatsMetricsVendo";
import "./landing.css";
import "./landing-typography.css";

const steps = [
  ["01", "Khám phá", "Xem tài sản, hồ sơ và điều kiện tham gia trước khi đặt giá."],
  ["02", "Đăng ký", "Hoàn tất đăng ký để sẵn sàng tham gia phiên phù hợp."],
  ["03", "Đặt giá", "Theo dõi nhịp phiên và đưa ra mức giá của bạn khi thời điểm đến."],
];

export default function Index() {
  const [ongoingAuctions, setOngoingAuctions] = useState<Auction[]>([]);
  const [waitingAuctions, setWaitingAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    Promise.all([getAuctionsByStateNotPageale("ONGOING"), getAuctionsByStateNotPageale("WAITING")])
      .then(([ongoing, waiting]) => { setOngoingAuctions(ongoing.auctionsData); setWaitingAuctions(waiting.auctionsData); })
      .catch((error) => console.error(error.message));
  }, []);

  const featuredAuctions = ongoingAuctions.length ? ongoingAuctions : waitingAuctions;

  return <main className="landing-page">
    <section className="landing-hero">
      <video className="landing-hero__media" autoPlay loop muted playsInline poster="/assets/landing/hero-poster.jpg"><source src="/assets/landing/hero.mp4" type="video/mp4" /></video>
      <div className="landing-hero__veil" />
      <header className="landing-nav">
        <Link className="landing-brand" to="/" aria-label="DGS trang chủ">DGS<span>.</span></Link>
        <nav aria-label="Điều hướng chính"><a href="#phien-dau-gia">Phiên đấu giá</a><a href="#quy-trinh">Quy trình</a><Link to="/gioi-thieu">Về DGS</Link></nav>
        <Link className="landing-nav__account" to="/dang-nhap">Đăng nhập</Link>
      </header>
      <div className="landing-hero__content" style={{ maxWidth: "1120px" }}>
        <p className="landing-eyebrow">NỀN TẢNG ĐẤU GIÁ TRANG SỨC</p>
        <h1 style={{ color: "#fff", fontSize: "clamp(44px, 5.2vw, 80px)" }}>Từng món trang sức<br />đều có khoảnh khắc tỏa sáng.</h1>
        <p className="landing-hero__lede" style={{ color: "#fff" }}>Khám phá các phiên đấu giá được tuyển chọn, theo dõi minh bạch và đặt giá khi bạn đã sẵn sàng.</p>
        <div className="landing-hero__actions"><Link className="landing-button landing-button--primary" to="/danh-sach-dau-gia/state/ONGOING">Khám phá phiên đang diễn ra</Link><Link className="landing-button landing-button--ghost" to="/form-send-jewerly">Gửi tài sản đấu giá</Link></div>
      </div>
      <a className="landing-hero__scroll" href="#phien-dau-gia">CUỘN ĐỂ KHÁM PHÁ <span>↓</span></a>
    </section>
    <section className="landing-confidence" aria-label="Cam kết dịch vụ">
      <div><strong>01</strong><span>Thông tin tài sản rõ ràng</span></div><div><strong>02</strong><span>Theo dõi phiên theo thời gian thực</span></div><div><strong>03</strong><span>Hỗ trợ trong suốt quá trình tham gia</span></div>
    </section>
    <section className="landing-section" id="phien-dau-gia">
      <div className="landing-section__heading"><div><p className="landing-eyebrow">PHIÊN ĐƯỢC TUYỂN CHỌN</p><h2>Đặt giá cho điều bạn thật sự muốn sở hữu.</h2></div><Link className="landing-text-link" to="/danh-sach-dau-gia">Xem tất cả phiên <span>→</span></Link></div>
      {featuredAuctions.length ? <div className="landing-auction-grid">{featuredAuctions.slice(0, 3).map((auction) => <LandingAuctionCard key={auction.id} auction={auction} />)}</div> : <div className="landing-empty-state">Các phiên mới sẽ sớm được cập nhật tại đây.</div>}
    </section>
    <section className="landing-process" id="quy-trinh">
      <div className="landing-process__intro"><p className="landing-eyebrow">CÁCH THỨC HOẠT ĐỘNG</p><h2>Một hành trình ngắn, rõ ràng và tập trung vào giá trị của món đồ.</h2><Link className="landing-text-link" to="/danh-sach-dau-gia">Bắt đầu khám phá <span>→</span></Link></div>
      <ol>{steps.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
    </section>
    <section className="landing-seller"><p className="landing-eyebrow">DÀNH CHO NGƯỜI SỞ HỮU</p><h2>Đưa món trang sức của bạn đến với người trân trọng nó.</h2><Link className="landing-button landing-button--dark" to="/form-send-jewerly">Gửi yêu cầu định giá</Link></section>
    <StatsMetricsVendo />
  </main>;
}
