import React from 'react'

const ContainerListAuctions = () => {

  return (
    <div className="col-lg-9 order-1 order-lg-2">
      <div className="shop-banner_area">
        <div className="banner-item img-hover_effect">
          <a href="javascript:void(0)">
            <img
              src="assets/images/shop/1.jpg"
              alt="Umino's Shop Banner"
            />
          </a>
        </div>
      </div>
      <div className="shop-toolbar">
        <div className="product-view-mode">
          <a
            className="active grid-3"
            data-target="gridview-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Grid View"
          ><i className="fa fa-th"></i
          ></a>
          <a
            className="list"
            data-target="listview"
            data-toggle="tooltip"
            data-placement="top"
            title="List View"
          ><i className="fa fa-th-list"></i
          ></a>
        </div>
        <div className="product-page_count">
          <p>Showing 1–9 of 40 results)</p>
        </div>
        <div className="product-item-selection_area">
          <div className="product-short">
            <label className="select-label">Sort By:</label>
            <select className="nice-select">
              <option value="1">Default sorting</option>
              <option value="2">Name, A to Z</option>
              <option value="3">Name, Z to A</option>
              <option value="4">Price, low to high</option>
              <option value="5">Price, high to low</option>
              <option value="5">Rating (Highest)</option>
              <option value="5">Rating (Lowest)</option>
              <option value="5">Model (A - Z)</option>
              <option value="5">Model (Z - A)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="shop-product-wrap grid gridview-3 row">
        <div className="col-lg-4 col-md-4 col-sm-6">
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
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$95.00</span>
                    <span className="old-price">$100.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Aliquet auctor semali</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/1-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$95.00</span>
                    <span className="old-price">$100.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Aliquet auctor semali</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/2-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <a href="single-product.html"
                    >Accumsan Mauris Ullaat</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/2-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="old-price">$80.00</span>
                    <span className="new-price">$70.00</span>
                  </div>
                  <span className="new-price">$70.00</span>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Accumsan Mauris Ullaat</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/3-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$75.00</span>
                    <span className="old-price">$85.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Aliquam Sedjusto Atluct</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/3-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$75.00</span>
                    <span className="old-price">$85.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Aliquam Sedjusto Atluct</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/4-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$60.00</span>
                    <span className="old-price">$85.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Auctor Gravida Enimuctor</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/4-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$60.00</span>
                    <span className="old-price">$85.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Auctor Gravida Enimuctor</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/5-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$65.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Bibenm Lorem Coectetur</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/5-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$65.00</span>
                    <span className="old-price">$68.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Bibenm Lorem Coectetur</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/6-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$115.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Condim Entumpos Uereondi</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/6-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$115.00</span>
                    <span className="old-price">$120.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Condim Entumpos Uereondi</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/7-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$45.00</span>
                    <span className="old-price">$60.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Condime Eondim Furnitur</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/7-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$45.00</span>
                    <span className="old-price">$60.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Condime Eondim Furnitur</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/8-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <span className="new-price">$35.00</span>
                    <span className="old-price">$50.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Convallis Quam Siton</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/1-2.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$35.00</span>
                    <span className="old-price">$50.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Convallis Quam Siton</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="slide-item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    className="primary-img"
                    src="assets/images/product/medium-size/7-1.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
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
                    <a href="single-product.html"
                    >Aliquam Sedjusto Atluct</a
                    >
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
          <div className="list-slide_item">
            <div className="single-product">
              <div className="product-img">
                <a href="single-product.html">
                  <img
                    src="assets/images/product/medium-size/7-1.jpg"
                    alt="Umino's Product Image"
                  />
                </a>
              </div>
              <div className="umino-product-content">
                <div className="product-desc_info">
                  <div className="price-box">
                    <span className="new-price">$70.00</span>
                    <span className="old-price">$80.00</span>
                  </div>
                  <h6 className="product-name">
                    <a href="single-product.html"
                    >Aliquam Sedjusto Atluct</a
                    >
                  </h6>
                  <div className="rating-box">
                    <ul>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li><i className="ion-ios-star"></i></li>
                      <li className="silver-color">
                        <i className="ion-ios-star-outline"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="product-short_desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco,Proin
                      lectus ipsum, gravida et mattis vulputate,
                      tristique ut lectus
                    </p>
                  </div>
                </div>
                <div className="add-actions">
                  <ul>
                    <li>
                      <a
                        href="cart.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To cart"
                      ><i className="ion-bag"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="wishlist.html"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add To Wishlist"
                      ><i className="ion-ios-heart-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="compare.html"
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
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Quick View"
                      ><i className="ion-ios-search"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="umino-paginatoin-area">
            <ul className="umino-pagination-box">
              <li className="active"><a href="javascript:void(0)">1</a></li>
              <li><a href="javascript:void(0)">2</a></li>
              <li><a href="javascript:void(0)">3</a></li>
              <li><a href="javascript:void(0)">4</a></li>
              <li><a href="javascript:void(0)">5</a></li>
              <li>
                <a className="Next" href="javascript:void(0)">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerListAuctions
