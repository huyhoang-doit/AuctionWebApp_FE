import React, { useEffect, useState } from 'react'
import SingleAuction from './SingleAuction'
import { gettop3PriceAndState } from '../../../api/AuctionAPI'
import { Auction } from '../../../models/Auction';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AuctionTopPrice = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    gettop3PriceAndState()
      .then((response) => {
        setAuctions(response.auctionsData);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <div className="umino-product_area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="umino-section_title">
              <h3>Top trang sức trị giá cao</h3>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="umino-product_slider slider-navigation_style-1" >
              <div className="row">
                {/* {auctions.map((auction) => (
                  <SingleAuction auction={auction} key={auction.id} />
                ))} */}
                <Carousel swipeable={false}
                  draggable={false}
                  showDots
                  autoPlay={true}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlaySpeed={500}
                  keyBoardControl={true}
                  rewindWithAnimation={true}
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  {React.Children.toArray(auctions.map(
                    (auction) => <SingleAuction auction={auction} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionTopPrice
