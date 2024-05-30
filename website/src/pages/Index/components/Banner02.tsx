import { NavLink } from "react-router-dom"

const Banner02 = () => {
  return (
    <div className="umino-banner_area umino-banner_area-2 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 img-hover_effect">
            <div className="banner-item">
              <div className="banner-img">
                <NavLink to={"/shop-left-sibar"}>
                  <img
                    className="img-full"
                    src="assets/images/banner/1-6.jpg"
                    alt="Umino's Banner"
                  />
                </NavLink>
              </div>
              <div className="banner-content">
                <span>Hãy đến với chúng tôi</span>
                <h4>Trang sức ở đây là </h4>
                <h3>Chính hiệu</h3>
                <NavLink to={"/shop-left-sibar"}>
                  <span onClick={() => (window.scrollTo({ top: 100, behavior: 'smooth' }))} className="btn btn-dark fw-bold">
                    Các phiên đấu
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-item img-hover_effect">
              <div className="banner-img">

                <NavLink to={"/shop-left-sibar"}>
                  <img
                    className="img-full"
                    src="assets/images/banner/1-7.jpg"
                    alt="DGS's Banner"
                  />
                </NavLink>
              </div>
              <div className="banner-content banner-content-2">
                <span>Kiểm định</span>
                <h4>Đội ngũ</h4>
                <h3>Chuyên gia uy tín</h3>
                <NavLink to={"/shop-left-sibar"}>
                  <span onClick={() => (window.scrollTo({ top: 100, behavior: 'smooth' }))} className="btn btn-warning fw-bold">
                    Các phiên đấu
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner02
