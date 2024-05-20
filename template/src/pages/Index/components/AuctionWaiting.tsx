import React from 'react'
import SingleAuction from './SingleWaitingAuction'
const AuctionWaiting = () => {
  return (
    <div className="umino-product_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="umino-section_title">
              <h3>Trang sức sắp được đấu giá</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="umino-product_slider slider-navigation_style-1">
              <SingleAuction />
              <SingleAuction />
              <SingleAuction />
              <SingleAuction />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionWaiting
