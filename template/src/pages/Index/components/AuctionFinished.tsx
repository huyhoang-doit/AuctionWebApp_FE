import React from 'react'
import SingleFinishsedAuction from './SingleFinishsedAuction'

const AuctionFinished = () => {
  return (
    <div className="umino-product_area umino-product_area-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="umino-section_title">
              <h3>Furniture & Decor</h3>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="umino-product_slider-2 slider-navigation_style-1">

              <SingleFinishsedAuction />
              <SingleFinishsedAuction />
              <SingleFinishsedAuction /><SingleFinishsedAuction /><SingleFinishsedAuction /><SingleFinishsedAuction />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuctionFinished
