import React from 'react'
import SingleFinishsedAuction from './SingleFinishsedAuction'

const AuctionFinished = () => {
  return (
    <div className="umino-product_area umino-product_area-2" style={{marginTop: "100px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="umino-section_title">
              <h3>Trang sức đã được đấu giá</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="umino-product_slider-2 slider-navigation_style-1">
              <div className="row">
                <SingleFinishsedAuction />
                <SingleFinishsedAuction />
                <SingleFinishsedAuction />
                <SingleFinishsedAuction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionFinished
