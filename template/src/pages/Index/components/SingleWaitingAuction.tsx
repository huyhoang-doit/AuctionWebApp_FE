import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Auction } from "../../../models/Auction";
import { CountDown } from "../../../utils/CountDown";
import { formatNumber } from "../../../utils/FormatNumber";

interface SingleAuctionProps {
  auction: Auction;
}

const SingleAuction: React.FC<SingleAuctionProps> = (props) => {

  // const countDown: any = document.querySelector(".umino-countdown")
  // countDown.countdown("2024/12/20", function (event: any) {
  //   $(this).html(
  //     event.strftime(
  //       '<div class="count"><span class="count-amount">%D</span><span class="count-period">Days</span></div><div class="count"><span class="count-amount">%H</span><span class="count-period">Hrs</span></div><div class="count"><span class="count-amount">%M</span><span class="count-period">Mins</span></div><div class="count"><span class="count-amount">%S</span><span class="count-period">Secs</span></div>'
  //     )
  //   );
  // });

  return (
    <div className="col-3" style={{ height: '500px' }}>
      <div className="slide-item">
        <div className="single-product">
          <div className="product-img">
            <Link to={"/single-auction/" + props.auction.id}>
              <img
                className="primary-img"
                src="assets/images/product/medium-size/1-1.jpg"
                alt="Umino's Product Image"
              />
            </Link>
          </div>
          <div className="product-content">
            <div className="product-desc_info">
              <div className="price-box">
                <span className="new-price me-2">
                  {formatNumber(props.auction.firstPrice)}
                </span>
              </div>
              <h6 className="product-name">
                <Link to={"/single-product-sale"}>
                  {props.auction.name}
                </Link>
              </h6>
              {/* <div className="umino-countdown"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleAuction
