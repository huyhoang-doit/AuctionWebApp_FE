import { Auction } from "../../../models/Auction";
import { formatNumber } from "../../../utils/formatNumber";
import { useTranslation } from "react-i18next";

interface BidInfoProps {
  auction: Auction | null;
}

export const BidInfo: React.FC<BidInfoProps> = ({ auction }) => {
  const { t } = useTranslation(["Bid"]);
  
  return (
    <>
      <div className="col-6">
        <p className="left-title-text no-margin">
          Giá mua ngay:
        </p>
      </div>
      <div className="col-6">
        <p
          className="right-info-text no-margin fw-bold"
          style={{ color: "#b41712" }}
        >
          {formatNumber(auction?.jewelry?.buyNowPrice)}{" "}
          VNĐ
        </p>
      </div>
      <div className="col-6">
        <p className="left-title-text no-margin">
          {t("BidInfo.Giá cao nhất hiện tại")}
        </p>
      </div>
      <div className="col-6">
        <p
          className="right-info-text no-margin fw-bold"
          style={{ color: "#b41712" }}
        >
          {auction?.lastPrice !== null
            ? formatNumber(auction?.lastPrice)
            : formatNumber(auction?.firstPrice)}{" "}
          VNĐ
        </p>
      </div>
      <div className="col-6">
        <p className="left-title-text no-margin">
          {t("BidInfo.Giá khởi điểm")}
        </p>
      </div>
      <div className="col-6">
        <p
          className="right-info-text no-margin fw-bold"
          style={{ color: "#b41712" }}
        >
          {formatNumber(auction?.firstPrice)} VNĐ
        </p>
      </div>
      <div className="col-6">
        <p className="left-title-text no-margin">{t("BidInfo.Bước giá")}</p>
      </div>
      <div className="col-6">
        <p
          className="right-info-text no-margin fw-bold"
          style={{ color: "#b41712" }}
        >
          {formatNumber(auction?.priceStep)} VNĐ
        </p>
      </div>
      <div className="col-6">
        <p className="left-title-text no-margin">
          {t("BidInfo.Phí tham gia")}{" "}
        </p>
      </div>
      <div className="col-6">
        <p
          className="fw-bold right-info-text no-margin"
          style={{ color: "#b41712" }}
        >
          <span className="fw-bold novaticPrice registerFee">
            {formatNumber(auction?.participationFee)}
          </span>{" "}
          VNĐ
        </p>
      </div>
      <div className="col-6">
        <p className="left-title-text no-margin">
          {t("BidInfo.Tiền đặt trước")}
        </p>
      </div>
      <div className="col-6">
        <p
          className="fw-bold right-info-text no-margin"
          style={{ color: "#b41712" }}
        >
          <span className="fw-bold novaticPrice depositPrice">
            {formatNumber(auction?.deposit)}
          </span>{" "}
          VNĐ
        </p>
      </div>
    </>
  );
};
