import { NavLink } from "react-router-dom"


const Slider = () => {
  return (
    <div className="umino-slider_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-slider slider-navigation_style-1">
              <div className="single-slide animation-style-01 bg-1">
                <div className="container position-relative">
                  <div className="slider-content position-absolute mt-5">
                    <h4>Đấu giá trang sức</h4>
                    <h3>DGS</h3>
                    <a
                      className="product-price"
                      href="shop-left-sidebar.html"
                    >
                      <span>Diamond - Gold - Silver</span>
                    </a><br />
                    <NavLink to="/danh-sach-dau-gia">
                      <span
                        onClick={() => window.scrollTo({ top: 100, behavior: 'smooth' })}
                        className="btn fw-normal rounded-5 fs-5 position-relative"
                        style={{
                          background: '#fed100', // Yellow background color
                          color: 'black', // Black text color
                          marginTop: '100px', // 100px top margin
                          transition: 'color 0.3s', // Smooth transition for text color change
                          cursor: 'pointer', // Cursor pointer
                          position: 'relative', // Position relative for pseudo-element
                          overflow: 'hidden' // Ensure any overflow is hidden
                        }}
                      >
                        Bắt đầu ngay
                        <span
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)',
                            animation: 'twinkle 2s infinite',
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '200%', // Extend width to cover the transition from left to right
                            height: '100%',
                          }}
                        ></span>
                        <style>
                          {`
            @keyframes twinkle {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}
                        </style>
                      </span>
                    </NavLink>
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
                    <a href="">
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                  <div className="banner-img">
                    <a href="shop-left-sidebar.html">
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
                        <a href="">
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                      <div className="banner-img">
                        <a href="shop-left-sidebar.html">
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
                        <a href="">
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                      <div className="banner-img">
                        <a href="shop-left-sidebar.html">
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
