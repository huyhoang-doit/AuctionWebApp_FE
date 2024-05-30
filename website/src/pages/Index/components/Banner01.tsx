import React from 'react'

const Banner01 = () => {
  return (
    <div className="umino-banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-item img-hover_effect">
              <div className="banner-img">
                <a href="">
                  <img
                    className="img-full"
                    src="assets/images/banner/1-4.jpg"
                    alt="Umino's Banner"
                  />
                </a>
              </div>
              <div className="banner-content">
                <span>Living Room Set</span>
                <h4>Hauteville Plywood</h4>
                <h3>New Chair</h3>
                <a
                  className="umino-btn umino-btn_dark"
                  href="shop-left-sidebar.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-item img-hover_effect">
              <div className="banner-img">
                <a href="">
                  <img
                    className="img-full"
                    src="assets/images/banner/1-5.jpg"
                    alt="Umino's Banner"
                  />
                </a>
              </div>
              <div className="banner-content">
                <span>Home Decor</span>
                <h4>The Best Clock</h4>
                <h3>Creative Furniture</h3>
                <a
                  className="umino-btn umino-btn_dark"
                  href="shop-left-sidebar.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner01
