
const SingleFinishsedAuction = () => {
  return (
    <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="#">
                    <img
                      className="primary-img"
                      src="assets/images/product/medium-size/1-2.jpg"
                      alt="Umino's Product Image"
                    />
                  </a>
                  <div className="add-actions">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add To cart"
                          ><i className="ion-bag"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add To Wishlist"
                          ><i className="ion-ios-heart-outline"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add To Cart"
                          ><i className="fa fa-chart-bar"></i
                        ></a>
                      </li>
                      <li
                        className="quick-view-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        <a
                          href="#"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Quick View"
                          ><i className="ion-ios-search"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-desc_info">
                    <div className="price-box">
                      <span className="new-price">$70.00</span>
                      <span className="old-price">$80.00</span>
                    </div>
                    <h6 className="product-name">
                      <a href="#">Aliquet auctor semali</a>
                    </h6>
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
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SingleFinishsedAuction
