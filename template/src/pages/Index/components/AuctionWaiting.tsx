import React, { useEffect, useState } from 'react'
import SingleAuction from './SingleWaitingAuction'
import { getAuctionToday } from '../../../api/AuctionAPI'
import { Auction } from '../../../models/Auction';
const AuctionWaiting = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    getAuctionToday()
      .then((response) => {
        setAuctions(response.auctionsData);
      })
      .catch((error) => {
        // setLoading(false);
        // setError(error.message);
      });
  }, []);

  return (
    <div className="umino-product_area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="umino-section_title">
              <h3>Trang sức sắp được đấu giá</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="umino-product_slider slider-navigation_style-1" >
              <div className="row">
                {auctions.map((auction) => (
                  <SingleAuction auction={auction} key={auction.id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionWaiting
