import { useEffect } from "react";
import Brand from "../Brand/Brand";

export default function SingleProductSale() {
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/main.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="main-wrapper">
                {/* <!-- Begin Umino's Breadcrumb Area --> */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="breadcrumb-content">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="active">
                                    Single Product Sale
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Umino's Breadcrumb Area End Here -->

        <!-- Begin Umino's Single Product Sale Area --> */}
                <div className="sp-area">
                    <div className="container">
                        <div className="sp-nav">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="sp-img_area">
                                        <div className="zoompro-border">
                                            <img className="zoompro" src="assets/images/product/large-size/1.jpg" data-zoom-image="assets/images/product/large-size/1.jpg" alt="Umino's Product Image" />
                                        </div>
                                        <div id="gallery" className="sp-img_slider slider-navigation_style-4">
                                            <a className="active" data-image="assets/images/product/large-size/1.jpg" data-zoom-image="assets/images/product/large-size/1.jpg">
                                                <img src="assets/images/product/small-size/1.jpg" alt="Umino's Product Image" />
                                            </a>
                                            <a data-image="assets/images/product/large-size/2.jpg" data-zoom-image="assets/images/product/large-size/2.jpg">
                                                <img src="assets/images/product/small-size/2.jpg" alt="Umino's Product Image" />
                                            </a>
                                            <a data-image="assets/images/product/large-size/3.jpg" data-zoom-image="assets/images/product/large-size/3.jpg">
                                                <img src="assets/images/product/small-size/3.jpg" alt="Umino's Product Image" />
                                            </a>
                                            <a data-image="assets/images/product/large-size/4.jpg" data-zoom-image="assets/images/product/large-size/4.jpg">
                                                <img src="assets/images/product/small-size/4.jpg" alt="Umino's Product Image" />
                                            </a>
                                            <a data-image="assets/images/product/large-size/5.jpg" data-zoom-image="assets/images/product/large-size/5.jpg">
                                                <img src="assets/images/product/small-size/5.jpg" alt="Umino's Product Image" />
                                            </a>
                                            <a data-image="assets/images/product/large-size/6.jpg" data-zoom-image="assets/images/product/large-size/6.jpg">
                                                <img src="assets/images/product/small-size/6.jpg" alt="Umino's Product Image" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sp-content">
                                        <div className="page-navigation">
                                            <a href="javascript:void(0)" className="prev">
                                                <i className="ion-chevron-left"></i>
                                            </a>
                                            <a href="javascript:void(0)" className="next">
                                                <i className="ion-chevron-right"></i>
                                            </a>
                                        </div>
                                        <div className="price-box">
                                            <span className="new-price">$100.00</span>
                                        </div>
                                        <div className="sp-heading">
                                            <h2><a href="javascript:void(0)">Faucibus A Lobortis Vitae</a></h2>
                                        </div>
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-ios-star"></i></li>
                                                <li><i className="ion-ios-star"></i></li>
                                                <li><i className="ion-ios-star"></i></li>
                                                <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                            </ul>
                                            <div className="rating-info">
                                                <a href="javascript:void(0)">(1 customer review)</a>
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                                tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
                                                justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                                                nulla.</p>
                                        </div>
                                        <div className="product-size_box">
                                            <span>Size</span>
                                            <select className="myniceselect nice-select">
                                                <option value="1">S</option>
                                                <option value="2">M</option>
                                                <option value="3">L</option>
                                                <option value="4">XL</option>
                                            </select>
                                        </div>
                                        <div className="umino-countdown_area">
                                            <div className="umino-countdown"></div>
                                        </div>
                                        <div className="in-stock"><i className="fa fa-check-circle"></i><span>203 In Stock</span></div>
                                        <div className="quantity">
                                            <label>Quantity</label>
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" value="1" type="text" />
                                                <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                            </div>
                                            <div className="additional-btn_area">
                                                <a className="additional_btn" href="cart.html">Add To Cart</a>
                                            </div>
                                        </div>
                                        <div className="qty-btn_area">
                                            <ul>
                                                <li><a className="qty-btn" href="wishlist.html" data-bs-toggle="tooltip" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i>Add To
                                                    Wishlist</a></li>
                                                <li><a className="qty-btn" href="compare.html" data-bs-toggle="tooltip" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i>Add To
                                                    Compare</a></li>
                                            </ul>
                                        </div>
                                        <div className="category-list_area">
                                            <h6>Category:</h6>
                                            <ul className="tags-list">
                                                <li>
                                                    <a href="javascript:void(0)">Bedroom Furniture,</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Console Tables,</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">End Tables,</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Living Room Sets,</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Ottomans & Storage Ottomans,</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Sofas & Couches,</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">TV Stands</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="category-list_area tag-list_area">
                                            <h6>Tags:</h6>
                                            <ul className="tags-list">
                                                <li>
                                                    <a href="javascript:void(0)">Men</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="umino-social_link">
                                            <h6>Shere This product:</h6>
                                            <ul>
                                                <li className="facebook">
                                                    <a href="https://www.facebook.com/" data-bs-toggle="tooltip" target="_blank" title="Facebook">
                                                        <i className="fab fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="https://twitter.com/" data-bs-toggle="tooltip" target="_blank" title="Twitter">
                                                        <i className="fab fa-twitter-square"></i>
                                                    </a>
                                                </li>
                                                <li className="youtube">
                                                    <a href="https://www.youtube.com/" data-bs-toggle="tooltip" target="_blank" title="Youtube">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                </li>
                                                <li className="google-plus">
                                                    <a href="https://www.plus.google.com/discover" data-bs-toggle="tooltip" target="_blank" title="Google Plus">
                                                        <i className="fab fa-google-plus"></i>
                                                    </a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="https://rss.com/" data-bs-toggle="tooltip" target="_blank" title="Instagram">
                                                        <i className="fab fa-instagram"></i>
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
                {/* Umino's Single Product Area Sale End Here  */}

                {/* Begin Umino's Single Product Tab Area  */}
                <div className="sp-tab_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sp-product-tab_nav">
                                    <div className="product-tab">
                                        <ul className="nav product-menu">
                                            <li><a className="active" data-bs-toggle="tab" href="#description"><span>Description</span></a>
                                            </li>
                                            <li><a data-bs-toggle="tab" href="#specification"><span>Specification</span></a></li>
                                            <li><a data-bs-toggle="tab" href="#reviews"><span>Reviews (1)</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-content umino-tab_content">
                                        <div id="description" className="tab-pane active show" role="tabpanel">
                                            <div className="product-description">
                                                <p className="short-desc">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                                    tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
                                                    justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                                                    nulla.
                                                </p>
                                                <p className="additional-desc">
                                                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis
                                                    fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
                                                    Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed
                                                    commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan
                                                    elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
                                                    gravida vehicula tellus, in imperdiet ligula euismod eget.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="specification" className="tab-pane" role="tabpanel">
                                            <table className="table table-bordered specification-inner_stuff">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={2}><strong>Memory</strong></td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>test 1</td>
                                                        <td>8gb</td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={2}><strong>Processor</strong></td>
                                                    </tr>
                                                </tbody>
                                                <tbody>
                                                    <tr>
                                                        <td>No. of Cores</td>
                                                        <td>1</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div id="reviews" className="tab-pane" role="tabpanel">
                                            <div className="tab-pane active" id="tab-review">
                                                <form className="form-horizontal" id="form-review">
                                                    <div id="review">
                                                        <table className="table table-striped table-bordered">
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ width: "50%" }}><strong>Customer</strong></td>
                                                                    <td className="text-right">25/04/2023</td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <p>Good product! Thank you very much</p>
                                                                        <div className="rating-box">
                                                                            <ul>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li><i className="ion-ios-star"></i></li>
                                                                                <li className="silver-color"><i
                                                                                    className="ion-ios-star-half"></i></li>
                                                                                <li className="silver-color"><i
                                                                                    className="ion-ios-star-outline"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <h2>Write a review</h2>
                                                    <div className="form-group required">
                                                        <div className="col-sm-12 p-0">
                                                            <label>Your Email <span className="required">*</span></label>
                                                            <input className="review-input" type="email" name="con_email" id="con_email" required />
                                                        </div>
                                                    </div>
                                                    <div className="form-group required second-child">
                                                        <div className="col-sm-12 p-0">
                                                            <label className="control-label">Share your opinion</label>
                                                            <textarea className="review-textarea" name="con_message" id="con_message"></textarea>
                                                            <div className="help-block"><span className="text-danger">Note:</span> HTML is not
                                                                translated!</div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group last-child required">
                                                        <div className="col-sm-12 p-0">
                                                            <div className="your-opinion">
                                                                <label>Your Rating</label>
                                                                <span>
                                                                    <select className="star-rating">
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="umino-btn-ps_right">
                                                            <a href="javascript:void(0)" className="umino-btn umino-btn_dark">Continue</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="umino-product_area umino-product_area-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="umino-section_title">
                                    <h3>Related Products</h3>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="umino-product_slider-2 slider-navigation_style-1">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/1-2.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$70.00</span>
                                                        <span className="old-price">$80.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Aliquet auctor semali</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/2-2.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i
                                                            className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i
                                                            className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i
                                                            className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$95.00</span>
                                                        <span className="old-price">$100.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Auctor gravida enimuctor</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/3-2.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$65.00</span>
                                                        <span className="old-price">$68.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Bibenm lorem coectetur</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/4-2.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$79.00</span>
                                                        <span className="old-price">$85.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Curabitur tristique neque</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/5-2.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$95.00</span>
                                                        <span className="old-price">$100.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Accumsan mauris ullaat</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/7-3.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i
                                                            className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i
                                                            className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i
                                                            className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$95.00</span>
                                                        <span className="old-price">$100.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Accumsan mauris ullaat</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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

                <div className="umino-product_area umino-product_area-3 section-space_add">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="umino-section_title">
                                    <h3>Upsell Products</h3>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="umino-product_slider-2 slider-navigation_style-1">
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/1-3.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$70.00</span>
                                                        <span className="old-price">$80.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Aliquet auctor semali</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/2-3.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$95.00</span>
                                                        <span className="old-price">$100.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Auctor gravida enimuctor</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/3-3.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$65.00</span>
                                                        <span className="old-price">$68.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Bibenm lorem coectetur</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/4-3.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$79.00</span>
                                                        <span className="old-price">$85.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Curabitur tristique neque</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/5-3.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$95.00</span>
                                                        <span className="old-price">$100.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Accumsan mauris ullaat</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img className="primary-img" src="assets/images/product/medium-size/8-2.jpg" alt="Umino's Product Image" />
                                                </a>
                                                <div className="add-actions">
                                                    <ul>
                                                        <li><a href="cart.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To cart"><i
                                                            className="ion-bag"></i></a>
                                                        </li>
                                                        <li><a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Wishlist"><i
                                                            className="ion-ios-heart-outline"></i></a>
                                                        </li>
                                                        <li><a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Add To Cart"><i
                                                            className="fa fa-chart-bar"></i></a>
                                                        </li>
                                                        <li className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><a href="javascript:void(0)" data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"><i
                                                            className="ion-ios-search"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="product-desc_info">
                                                    <div className="price-box">
                                                        <span className="new-price">$95.00</span>
                                                        <span className="old-price">$100.00</span>
                                                    </div>
                                                    <h6 className="product-name"><a href="single-product.html">Accumsan mauris ullaat</a>
                                                    </h6>
                                                    <div className="rating-box">
                                                        <ul>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li><i className="ion-ios-star"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-half"></i></li>
                                                            <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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

                <Brand />
            </div>
        </>
    );
}
