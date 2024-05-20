
const SingleAuction = () => {
  return (
    <div className="slide-item">
      <div className="single-product">
        <div className="product-img">
          <a href="#">
            <img
              className="primary-img"
              src="assets/images/product/medium-size/1-1.jpg"
              alt="Umino's Product Image"
            />
          </a>
        </div>
        <div className="product-content">
          <div className="product-desc_info">
            <div className="price-box">
              <span className="new-price">
                $70.00
              </span>
              <span className="old-price">
                $80.00
              </span>
            </div>
            <h6 className="product-name"><a href="#">Aliquet auctor
              semali</a></h6>
            <div className="rating-box">
              <ul>
                <li><i className="ion-ios-star"></i></li>
                <li><i className="ion-ios-star"></i></li>
                <li><i className="ion-ios-star"></i></li>
                <li className="silver-color">
                  <i className="ion-ios-star-half"></i>
                </li>
                <li className="silver-color">
                  <i className="ion-ios-star-outline"></i>
                </li>
              </ul>
            </div>
            <div className="product-progressbar product-progressbar-3">
              <span className="product-in_stock">
                Available:
                <strong>
                  369
                </strong>
              </span>
              <span className="product-sold">
                Unit Sold:
                <strong>
                  56
                </strong>
              </span>
            </div>
            <div className="umino-countdown"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleAuction
