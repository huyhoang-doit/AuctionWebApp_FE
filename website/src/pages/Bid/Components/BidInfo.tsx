import { Auction } from "../../../models/Auction";
import { formatNumber } from "../../../utils/formatNumber";

interface BidInfoProps {
    auction: Auction | null;
}

export const BidInfo: React.FC<BidInfoProps> = ({auction}) => {
    return (
        <>
            <div className="col-6">
                <p className="left-title-text no-margin">Giá cao nhất hiện tại:</p>
            </div>
            <div className="col-6">
                <p className="right-info-text no-margin fw-bold" style={{ color: "#b41712" }}>
                    {auction?.lastPrice !== null ? formatNumber(auction?.lastPrice) : formatNumber(auction?.firstPrice)} VNĐ
                </p>
            </div>
            <div className="col-6">
                <p className="left-title-text no-margin">Giá khởi điểm:</p>
            </div>
            <div className="col-6">
                <p className="right-info-text no-margin fw-bold" style={{ color: "#b41712" }}>{formatNumber(auction?.firstPrice)} VNĐ</p>
            </div>
            <div className="col-6">
                <p className="left-title-text no-margin">Bước giá:</p>
            </div>
            <div className="col-6">
                <p className="right-info-text no-margin fw-bold" style={{ color: "#b41712" }}>{formatNumber(auction?.priceStep)} VNĐ</p>
            </div>
            <div className="col-6">

                <p className="left-title-text no-margin">Giá cao nhất của bạn: </p>
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
        </>
    )
}  