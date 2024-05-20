import { useEffect } from "react";

const SingleAuction = () => {
  // const countDown: any = document.querySelector(".umino-countdown")
  // countDown.countdown("2024/12/20", function (event: any) {
  //   $(this).html(
  //     event.strftime(
  //       '<div class="count"><span class="count-amount">%D</span><span class="count-period">Days</span></div><div class="count"><span class="count-amount">%H</span><span class="count-period">Hrs</span></div><div class="count"><span class="count-amount">%M</span><span class="count-period">Mins</span></div><div class="count"><span class="count-amount">%S</span><span class="count-period">Secs</span></div>'
  //     )
  //   );
  // });

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
                      <span className="new-price">...</span>
                      <span className="old-price">...</span>
                    </div>
                    <h6 className="product-name"><a href="#">...</a></h6>
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
                      <span className="product-in_stock"
                        >...:<strong>...</strong></span
                      >
                      <span className="product-sold"
                        >...<strong>..</strong></span
                      >
                    </div>
                    <div className="umino-countdown"></div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SingleAuction
