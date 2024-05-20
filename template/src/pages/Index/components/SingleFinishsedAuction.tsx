
const SingleFinishsedAuction = () => {
  return (
    <div className="col-3">
      <div className="slide-item">
        <div className="single-product">
          <div className="product-img">
            <a href="single-product.html">
              <img
                className="primary-img"
                src="assets/images/product/medium-size/1-2.jpg"
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
              <h6 className="product-name">
                <a href="single-product.html">
                  Aliquet auctor
                  semali
                </a>
              </h6>
              <div className="rating-box">
                <ul>
                  <li>
                    <i className="ion-ios-star"></i>
                  </li>
                  <li>
                    <i className="ion-ios-star"></i>
                  </li>
                  <li>
                    <i className="ion-ios-star"></i>
                  </li>
                  <li className="silver-color">
                    <i className="ion-ios-star-half"></i>
                  </li>
                  <li className="silver-color">
                    <i className="ion-ios-star-outline"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFinishsedAuction
