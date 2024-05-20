import "./ShopLeftSibar.css";

export default function ShopLeftSibar() {
    return (
        <>
            {/* <!-- Begin Umino's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">Shop Left Sidebar</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Umino's Breadcrumb Area End Here -->

        <!-- Begin Umino's Content Wrapper Area --> */}
            <div className="umino-content_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-2 order-lg-1">
                            <div className="umino-sidebar-catagories_area">
                                <div className="umino-sidebar_categories">
                                    <div className="umino-categories_title first-child">
                                        <h5>Filter by price</h5>
                                    </div>
                                    <div className="price-filter">
                                        <div id="slider-range"></div>
                                        <div className="price-slider-amount">
                                            <div className="label-input">
                                                <label>price : </label>
                                                <input
                                                    type="text"
                                                    id="amount"
                                                    name="price"
                                                    placeholder="Add Your Price"
                                                />
                                                <button className="filter-btn">
                                                    Filter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="umino-sidebar_categories category-module">
                                    <div className="umino-categories_title">
                                        <h5>Product Categories</h5>
                                    </div>
                                    <div className="sidebar-categories_menu">
                                        <ul>
                                            <li className="has-sub">
                                                <a href="javascript:void(0)">
                                                    Bed & Bath{" "}
                                                    <i className="ion-chevron-right"></i>
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Baskets & Bins
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Bed Frames
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Bedroom Armoires
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Dressers
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Hangers
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Headboards &
                                                            Footboards
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Nightstands
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Shoe Organizers
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Storage &
                                                            Organization
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                            alt="Umino's Product Image"
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
                                                    alt="Umino's Banner"
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
                                    >
                                        <i className="fa fa-th"></i>
                                    </a>
                                    <a
                                        className="list"
                                        data-target="listview"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="List View"
                                    >
                                        <i className="fa fa-th-list"></i>
                                    </a>
                                </div>
                                <div className="product-page_count">
                                    <p>Showing 1–9 of 40 results</p>
                                </div>
                                <div className="product-item-selection_area">
                                    <div className="product-short">
                                        <label className="select-label">
                                            Short By:
                                        </label>
                                        <select className="nice-select">
                                            <option value="1">
                                                Default sorting
                                            </option>
                                            <option value="2">
                                                Name, A to Z
                                            </option>
                                            <option value="3">
                                                Name, Z to A
                                            </option>
                                            <option value="4">
                                                Price, low to high
                                            </option>
                                            <option value="5">
                                                Price, high to low
                                            </option>
                                            <option value="5">
                                                Rating (Highest)
                                            </option>
                                            <option value="5">
                                                Rating (Lowest)
                                            </option>
                                            <option value="5">
                                                Model (A - Z)
                                            </option>
                                            <option value="5">
                                                Model (Z - A)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-product-wrap grid gridview-3 row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $95.00
                                                        </span>
                                                        <span className="old-price">
                                                            $100.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/1-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
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
                                                        <a href="/single-product">
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
                                                            <li>
                                                                <i className="ion-ios-star"></i>
                                                            </li>
                                                            <li className="silver-color">
                                                                <i className="ion-ios-star-outline"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $70.00
                                                        </span>
                                                        <span className="old-price">
                                                            $80.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Accumsan Mauris
                                                            Ullaat
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/2-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="old-price">
                                                            $80.00
                                                        </span>
                                                        <span className="new-price">
                                                            $70.00
                                                        </span>
                                                    </div>
                                                    <span className="new-price">
                                                        $70.00
                                                    </span>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Accumsan Mauris
                                                            Ullaat
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $75.00
                                                        </span>
                                                        <span className="old-price">
                                                            $85.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Aliquam Sedjusto
                                                            Atluct
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/3-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">
                                                            $75.00
                                                        </span>
                                                        <span className="old-price">
                                                            $85.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Aliquam Sedjusto
                                                            Atluct
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $60.00
                                                        </span>
                                                        <span className="old-price">
                                                            $85.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Auctor Gravida
                                                            Enimuctor
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/4-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
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
                                                        <a href="/single-product">
                                                            Auctor Gravida
                                                            Enimuctor
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $65.00
                                                        </span>
                                                        <span className="old-price">
                                                            $68.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Bibenm Lorem
                                                            Coectetur
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/5-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
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
                                                        <a href="/single-product">
                                                            Bibenm Lorem
                                                            Coectetur
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $115.00
                                                        </span>
                                                        <span className="old-price">
                                                            $120.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Condim Entumpos
                                                            Uereondi
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/6-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">
                                                            $115.00
                                                        </span>
                                                        <span className="old-price">
                                                            $120.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Condim Entumpos
                                                            Uereondi
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $45.00
                                                        </span>
                                                        <span className="old-price">
                                                            $60.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Condime Eondim
                                                            Furnitur
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/7-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">
                                                            $45.00
                                                        </span>
                                                        <span className="old-price">
                                                            $60.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Condime Eondim
                                                            Furnitur
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                            $35.00
                                                        </span>
                                                        <span className="old-price">
                                                            $50.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Convallis Quam Siton
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/1-2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">
                                                            $35.00
                                                        </span>
                                                        <span className="old-price">
                                                            $50.00
                                                        </span>
                                                    </div>
                                                    <h6 className="product-name">
                                                        <a href="/single-product">
                                                            Convallis Quam Siton
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
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
                                                        <a href="/single-product">
                                                            Aliquam Sedjusto
                                                            Atluct
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
                                    <div className="list-slide_item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="/single-product">
                                                    <img
                                                        src="assets/images/product/medium-size/7-1.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="umino-product-content">
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
                                                        <a href="/single-product">
                                                            Aliquam Sedjusto
                                                            Atluct
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
                                                    <div className="product-short_desc">
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore
                                                            magna aliqua. Ut
                                                            enim ad minim
                                                            veniam, quis nostrud
                                                            exercitation
                                                            ullamco,Proin lectus
                                                            ipsum, gravida et
                                                            mattis vulputate,
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="umino-paginatoin-area">
                                        <ul className="umino-pagination-box">
                                            <li className="active">
                                                <a href="javascript:void(0)">
                                                    1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    5
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="Next"
                                                    href="javascript:void(0)"
                                                >
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
