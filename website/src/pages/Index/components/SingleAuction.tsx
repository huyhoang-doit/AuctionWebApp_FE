import { Link } from "react-router-dom";
import { Auction } from "../../../models/Auction";
import { formatNumber } from "../../../utils/formatNumber";
import useIconImage from "../../../hooks/useIconImage";
import { StateAuctionView } from "../../AuctionList/Components/StateAuctionView";
import useCountDown from "../../../hooks/useCountDown";
import { useTranslation } from "react-i18next";

interface SingleAuctionProps {
  auction: Auction;
}

const SingleAuction: React.FC<SingleAuctionProps> = ({ auction }) => {
  const timeLeft = useCountDown(auction);
  const jewelryId: number | null = auction.jewelry ? auction.jewelry.id : null;
  const imageData = useIconImage(jewelryId);

  const { t } = useTranslation(["Components"]);

  return (
    <div className="" style={{ margin: "0 15px" }}>
      <div
        className="slide-item"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, .06)",
          borderRadius: "0 30px",
          border: "unset",
          padding: "20px 20px 0px",
        }}
      >
        <div className="single-product">
          <div className="product-img">
            <Link to={"/tai-san-dau-gia/" + auction.id}>
              <img className="primary-img" src={imageData} alt="" />
            </Link>
          </div>
          <div className="product-content">
            <div className="product-desc_info">
              <div className="price-box">
                <span className="new-price me-2" style={{ fontSize: "16 px" }}>
                  {t("SingleAuction.Trị giá")}{" "}
                  {formatNumber(auction.firstPrice)} VNĐ
                </span>
              </div>
              <h6 className="fw-bold product-name">
                <Link to={"/tai-san-dau-gia/" + auction.id}>
                  {auction.name}
                </Link>
              </h6>
              <div>
                {t("SingleAuction.Trạng thái")}{" "}
                <span className="fs-5">
                  <StateAuctionView state={auction.state} />
                </span>
              </div>
              <Link to={"/tai-san-dau-gia/" + auction.id}>
                <button className="mt-2 btn btn-danger">
                  {t("SingleAuction.Chi tiết")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAuction;
