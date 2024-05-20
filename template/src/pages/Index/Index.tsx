import Brand from "../Brand/Brand";
import Slider from "./components/Slider";
import ShippingArea from "./components/ShippingArea";
import Banner01 from "./components/Banner01";
import AuctionWaiting from "./components/AuctionWaiting";
export default function Index() {
    return (
        <>
            <Slider />

            {/* <!-- Begin Umino's Shipping Area --> */}

            <ShippingArea />

            {/* <!-- Begin Umino's Banner Area --> */}

            <Banner01 />

            {/* <!-- Begin Umino's Product Area --> */}

            <AuctionWaiting />

            {/* <!-- Begin Umino's Product Area Two --> */}

            <div className="umino-product_area umino-product_area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="umino-section_title">
                                <h3>Trang sức đã được đấu giá</h3>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="umino-product_slider-2 slider-navigation_style-1">
                                <div className="row">
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
                                                    <div className="add-actions">
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    href="cart.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To cart"
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
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

                                    <div className="col-3">
                                        {" "}
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $95.00
                                                            </span>
                                                            <span className="old-price">
                                                                $100.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Auctor gravida
                                                                enimuctor
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
                                    <div className="col-3">
                                        {" "}
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $65.00
                                                            </span>
                                                            <span className="old-price">
                                                                $68.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Bibenm lorem
                                                                coectetur
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
                                                                <li>
                                                                    <i className="ion-ios-star"></i>
                                                                </li>
                                                                <li className="silver-color">
                                                                    <i className="ion-ios-star-half"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        {" "}
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $79.00
                                                            </span>
                                                            <span className="old-price">
                                                                $85.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Curabitur
                                                                tristique neque
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
                                    <div className="col-3">
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $95.00
                                                            </span>
                                                            <span className="old-price">
                                                                $100.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Accumsan mauris
                                                                ullaat
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

                                    <div className="col-3">
                                        <div className="slide-item">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <a href="single-product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="assets/images/product/medium-size/7-3.jpg"
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $95.00
                                                            </span>
                                                            <span className="old-price">
                                                                $100.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Accumsan mauris
                                                                ullaat
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Begin Umino's Product Area Two --> */}

            <div className="umino-product_area umino-product_area-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="umino-section_title">
                                <h3>Home & Accessories</h3>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="umino-product_slider-2 slider-navigation_style-1">
                                <div className="row">
                                    <div className="col-2">
                                        <div className="slide-item">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <a href="single-product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="assets/images/product/medium-size/1-3.jpg"
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
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

                                    <div className="col-2">
                                        {" "}
                                        <div className="slide-item">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <a href="single-product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="assets/images/product/medium-size/2-3.jpg"
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $95.00
                                                            </span>
                                                            <span className="old-price">
                                                                $100.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Auctor gravida
                                                                enimuctor
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

                                    <div className="col-2">
                                        <div className="slide-item">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <a href="single-product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="assets/images/product/medium-size/3-3.jpg"
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $65.00
                                                            </span>
                                                            <span className="old-price">
                                                                $68.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Bibenm lorem
                                                                coectetur
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
                                                                <li>
                                                                    <i className="ion-ios-star"></i>
                                                                </li>
                                                                <li className="silver-color">
                                                                    <i className="ion-ios-star-half"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="slide-item">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <a href="single-product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="assets/images/product/medium-size/4-3.jpg"
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $79.00
                                                            </span>
                                                            <span className="old-price">
                                                                $85.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Curabitur
                                                                tristique neque
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

                                    <div className="col-2">
                                        <div className="slide-item">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <a href="single-product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="assets/images/product/medium-size/5-3.jpg"
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $95.00
                                                            </span>
                                                            <span className="old-price">
                                                                $100.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Accumsan mauris
                                                                ullaat
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

                                    <div className="col-2">
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
                                                                >
                                                                    <i className="ion-bag"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="wishlist.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Wishlist"
                                                                >
                                                                    <i className="ion-ios-heart-outline"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="compare.html"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="top"
                                                                    title="Add To Cart"
                                                                >
                                                                    <i className="fa fa-chart-bar"></i>
                                                                </a>
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
                                                                >
                                                                    <i className="ion-ios-search"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <div className="product-desc_info">
                                                        <div className="price-box">
                                                            <span className="new-price">
                                                                $95.00
                                                            </span>
                                                            <span className="old-price">
                                                                $100.00
                                                            </span>
                                                        </div>
                                                        <h6 className="product-name">
                                                            <a href="single-product.html">
                                                                Accumsan mauris
                                                                ullaat
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Begin Umino's Banner Area Two --> */}

            <div className="umino-banner_area umino-banner_area-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 img-hover_effect">
                            <div className="banner-item">
                                <div className="banner-img">
                                    <a href="javascript:void(0)">
                                        <img
                                            className="img-full"
                                            src="assets/images/banner/1-6.jpg"
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
                                    <a href="javascript:void(0)">
                                        <img
                                            className="img-full"
                                            src="assets/images/banner/1-7.jpg"
                                            alt="Umino's Banner"
                                        />
                                    </a>
                                </div>
                                <div className="banner-content banner-content-2">
                                    <span>Home Decor</span>
                                    <h4>The Best Clock</h4>
                                    <h3>Creative Furniture</h3>
                                    <a
                                        className="umino-btn umino-btn_yellow"
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

            {/* <!-- Begin Umino's List Product Area --> */}

            <div className="umino-list-product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="umino-section_title">
                                <h3>Featured</h3>
                            </div>
                            <div className="list-product_slider slider-navigation_style-1">
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/1.jpg"
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
                                                        Aliquet auctor semali
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/2.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $95.00
                                                    </span>
                                                    <span className="old-price">
                                                        $100.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Accumsan mauris ullaat
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/3.jpg"
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
                                                        Aliquet auctor semali
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/4.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $60.00
                                                    </span>
                                                    <span className="old-price">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Aliquet auctor semali
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
                                                            <i className="ion-ios-star-outline"></i>
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/5.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $80.00
                                                    </span>
                                                    <span className="old-price">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Aliquam porttitor turpis
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/6.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $90.00
                                                    </span>
                                                    <span className="old-price">
                                                        $105.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Condime eondim furnitur
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
                                </div>
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/7.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $65.00
                                                    </span>
                                                    <span className="old-price">
                                                        $68.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Bibenm lorem coectetur
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/8.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $45.00
                                                    </span>
                                                    <span className="old-price">
                                                        $55.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Bibenm lorem coectetur
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
                                                        <li className="silver-color">
                                                            <i className="ion-ios-star-outline"></i>
                                                        </li>
                                                        <li className="silver-color">
                                                            <i className="ion-ios-star-outline"></i>
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
                        </div>
                        <div className="col-lg-4">
                            <div className="umino-section_title">
                                <h3>New Arrivals</h3>
                            </div>
                            <div className="list-product_slider slider-navigation_style-1">
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/5.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $80.00
                                                    </span>
                                                    <span className="old-price">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Aliquam porttitor turpis
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/6.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $90.00
                                                    </span>
                                                    <span className="old-price">
                                                        $105.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Condime eondim furnitur
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
                                </div>
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/7.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $65.00
                                                    </span>
                                                    <span className="old-price">
                                                        $68.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Bibenm lorem coectetur
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/8.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $45.00
                                                    </span>
                                                    <span className="old-price">
                                                        $55.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Bibenm lorem coectetur
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
                                                        <li className="silver-color">
                                                            <i className="ion-ios-star-outline"></i>
                                                        </li>
                                                        <li className="silver-color">
                                                            <i className="ion-ios-star-outline"></i>
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/1.jpg"
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
                                                        Aliquet auctor semali
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/2.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $95.00
                                                    </span>
                                                    <span className="old-price">
                                                        $100.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Accumsan mauris ullaat
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/3.jpg"
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
                                                        Aliquet auctor semali
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/4.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $60.00
                                                    </span>
                                                    <span className="old-price">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Aliquet auctor semali
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
                                                            <i className="ion-ios-star-outline"></i>
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
                        </div>
                        <div className="col-lg-4">
                            <div className="umino-section_title">
                                <h3>Best Seller</h3>
                            </div>
                            <div className="list-product_slider slider-navigation_style-1">
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/3.jpg"
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
                                                        Aliquet auctor semali
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/4.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $60.00
                                                    </span>
                                                    <span className="old-price">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Aliquet auctor semali
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
                                                            <i className="ion-ios-star-outline"></i>
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/5.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $80.00
                                                    </span>
                                                    <span className="old-price">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Aliquam porttitor turpis
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/6.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $90.00
                                                    </span>
                                                    <span className="old-price">
                                                        $105.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Condime eondim furnitur
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
                                </div>
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/1.jpg"
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
                                                        Aliquet auctor semali
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/2.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $95.00
                                                    </span>
                                                    <span className="old-price">
                                                        $100.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Accumsan mauris ullaat
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/7.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $65.00
                                                    </span>
                                                    <span className="old-price">
                                                        $68.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Bibenm lorem coectetur
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
                                <div className="slide-item">
                                    <div className="single-product">
                                        <div className="product-img">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/images/product/small-size/8.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </a>
                                        </div>
                                        <div className="product-content">
                                            <div className="product-desc_info">
                                                <div className="price-box">
                                                    <span className="new-price">
                                                        $45.00
                                                    </span>
                                                    <span className="old-price">
                                                        $55.00
                                                    </span>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="single-product.html">
                                                        Bibenm lorem coectetur
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
                                                        <li className="silver-color">
                                                            <i className="ion-ios-star-outline"></i>
                                                        </li>
                                                        <li className="silver-color">
                                                            <i className="ion-ios-star-outline"></i>
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
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Begin Umino's Brand Area --> */}

            <Brand />
        </>
    );
}
