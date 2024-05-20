import React from 'react'
import AuctionsByCategories from './AuctionsByCategories'
const SideBar = () => {
  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <div className="umino-sidebar-catagories_area">
        <div className="umino-sidebar_categories">
          <div className="umino-categories_title first-child">
            <h5>Tìm kiếm</h5>
          </div>
          <div className="price-filter">
            <div id="slider-range"></div>
            <div className="price-slider-amount">
              <div className="label-input">
                <label>Ngày : </label>
                <input
                  type="text"
                  id="amount"
                  name="price"
                  placeholder="Ngày đấu giá"
                />
                <button className="filter-btn">
                  Lọc
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="umino-sidebar_categories category-module">
          <div className="umino-categories_title">
            <h5>Các sàn đấu giá</h5>
          </div>
          <div className="sidebar-categories_menu">
            <ul>
              <AuctionsByCategories />
              <li>
                <a href="javascript:void(0)">
                  Bedroom
                </a>
              </li>
              <li className="has-sub">
                <a href="javascript:void(0)">
                  Console Tables{" "}
                  <i className="ion-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      Daylesford
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Delaware
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Fayence
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Mable
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Mobo
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Pippins
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Dining Tables
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  End Tables
                </a>
              </li>
              <li className="has-sub">
                <a href="javascript:void(0)">
                  Furniture{" "}
                  <i className="ion-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      Bedroom Furniture
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Chairs
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Coffee Tables
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Console Tables
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      End Tables
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Living Room Sets
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Ottomans & Storage
                      Ottomans
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Sofas & Couches
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      TV Stands
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a href="javascript:void(0)">
                  Home Decor{" "}
                  <i className="ion-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      Candleholders
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Candles
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Clocks
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Floor Mirrors
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Lamps & Lighting
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Rugs
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Runners
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Wall Decor
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Wall Mirrors
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a href="javascript:void(0)">
                  Kitchen & Dining{" "}
                  <i className="ion-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      Bowls
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Cups, Mugs & Saucers
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Cutting Boards
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Dinnerware Sets
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Flatware
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Glassware &
                      Drinkware
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Knife Sets
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Plates
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Serveware
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a href="javascript:void(0)">
                  Living Room Sets{" "}
                  <i className="ion-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      Coffee & side tables
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Living room lighting
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Living room storage
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Living room textiles
                      & rugs
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      Sofas & armchairs
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      TV & media furniture
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  TV Stands
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Uncategorized
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="umino-sidebar_categories">
          <div className="umino-categories_title">
            <h5>Color</h5>
          </div>
          <ul className="sidebar-checkbox_list">
            <li>
              <a href="javascript:void(0)">
                Black (1)
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Blue (1)
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Gold (3)
              </a>
            </li>
          </ul>
        </div>
        <div className="umino-sidebar_categories">
          <div className="umino-categories_title umino-tags_title">
            <h5>Product Tags</h5>
          </div>
          <ul className="umino-tags_list">
            <li>
              <a href="javascript:void(0)">
                Accesories
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Blouse
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Clothes
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Desktop
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Digital
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Fashion
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Handbag
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Laptop
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">Men</a>
            </li>
            <li>
              <a href="javascript:void(0)">
                Women
              </a>
            </li>
          </ul>
        </div>
        <div className="umino-sidebar_categories umino-list-product_area compare-list-product_area">
          <div className="umino-categories_title">
            <h5>Compare</h5>
          </div>
          <div className="list-product_slider slider-navigation_style-3">
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/medium-size/1-1.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Aliquam furniture
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="old-price">
                      $85.00
                    </span>
                    <span className="new-price">
                      $79.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/medium-size/3-1.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Kaoreet lobortis
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="new-price">
                      $95.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/medium-size/7-1.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Vulputate justo
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="new-price">
                      $90.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/small-size/5.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Dignissim venenatis
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="new-price">
                      $80.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/small-size/8.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Aliquam lobortis
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="new-price">
                      $145.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/small-size/6.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Tincidunt malesuada
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="old-price">
                      $80.00
                    </span>
                    <span className="new-price">
                      $50.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/small-size/4.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Auctor gravida enim
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="new-price">
                      $85.00
                    </span>
                    <span className="new-price">
                      $60.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
                      </li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="single-product">
                <div className="product-img">
                  <a href="shop-left-sidebar.html">
                    <img
                      src="assets/images/product/small-size/5.jpg"
                      alt=" Product Image"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="product-name">
                    <a href="/single-product">
                      Dignissim venenatis
                    </a>
                  </h6>
                  <div className="price-box">
                    <span className="new-price">
                      $80.00
                    </span>
                  </div>
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
                      <li>
                        <i className="ion-ios-star"></i>
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
        <div className="umino-sidebar_categories umino-banner_area sidebar-banner_area">
          <div className="banner-item img-hover_effect">
            <div className="banner-img">
              <a href="javascript:void(0)">
                <img
                  className="img-full"
                  src="assets/images/banner/3-1.jpg"
                  alt=" Banner"
                />
              </a>
            </div>
            <div className="banner-content banner-content-2">
              <span>Home Decor</span>
              <h4>The Best Clock</h4>
              <h3>Creative Furniture</h3>
              <div className="umino-btn-ps_center">
                <a
                  className="umino-btn umino-btn_dark umino-btn_yellow"
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

export default SideBar
