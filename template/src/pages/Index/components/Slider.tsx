import React from 'react'

const Slider = () => {
  return (
    <div className="umino-slider_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-slider slider-navigation_style-1">
              <div className="single-slide animation-style-01 bg-1">
                <div className="container">
                  <div className="slider-content">
                    <h4>Đấu giá trang sức</h4>
                    <h3>DGS</h3>
                    <a className="product-price" href="#">
                      <span>Diamond - Gold - Silver</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="single-slide animation-style-01 bg-2">
                <div className="container">
                  <div className="slider-content slider-content-2">
                    <span>Sàn đấu giá</span>
                    <h4>Bông tai</h4>
                    <a className="product-price" href="#">
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row sub-banner_wrap">
              <div className="col-lg-6 col-md-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-content">
                    <span>Sàn đấu giá</span>
                    <h4>Bông tai</h4>
                    <h3></h3>
                    <a href="#">
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                  <div className="banner-img">
                    <a href="#">
                      <img
                        src="assets/images/banner/1-1.jpg"
                        alt="Umino's Banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="row sub-banner_wrap-2">
                  <div className="col-lg-12">
                    <div className="banner-item img-hover_effect">
                      <div className="banner-content">
                        <span>Sàn đấu giá</span>
                        <h4>Nhẫn</h4>
                        <h3></h3>
                        <a href="#">
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                      <div className="banner-img">
                        <a href="#">
                          <img
                            src="assets/images/banner/1-2.jpg"
                            alt="Umino's Banner"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="banner-item img-hover_effect">
                      <div className="banner-content">
                        <span>Sàn đấu giá</span>
                        <h4>Dây chuyền</h4>
                        <h3></h3>
                        <a href="#">
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                      <div className="banner-img">
                        <a href="#">
                          <img
                            src="assets/images/banner/1-3.jpg"
                            alt="Umino's Banner"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
