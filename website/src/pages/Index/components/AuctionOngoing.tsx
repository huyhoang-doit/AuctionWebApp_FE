import React, { useEffect, useState } from 'react'
import { getAuctionsByStateNotPageale } from '../../../api/AuctionAPI';
import SingleAuction from './SingleAuction';
import { Auction } from '../../../models/Auction';
import Carousel from 'react-multi-carousel';

const AuctionOngoing = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    getAuctionsByStateNotPageale('ONGOING')
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
      items: 4,
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
    <div className="umino-product_area umino-product_area-2" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="umino-section_title">
              {auctions.length > 0 && <h3>Trang sức đang được đấu giá</h3>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="umino-product_slider slider-navigation_style-1" >
              <div className="row">
                <Carousel swipeable={false}
                  draggable={false}
                  showDots
                  autoPlay={true}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlaySpeed={1000}
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

export default AuctionOngoing
