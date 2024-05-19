import { useEffect } from 'react';
import './App.css'
import Slider from './components/Slider'
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="main-wrapper">

        <header className="header-main_area">
          <div className="header-top_area">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-5">
                  <div className="ht-left_area">
                    <div className="header-shipping_area">
                      <span><strong>Đấu Giá Trang Sức</strong></span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="ht-right_area">
                    <div className="ht-menu">
                      <ul>
                        <li><a href="#">Tài sản đấu giá</a></li>
                        <li><a href="#">Giỏ Hàng</a></li>
                        <li><a href="#">Danh sách sản phẩm yêu thích</a></li>
                        <li><a href="#">Thanh toán</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-middle_area">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-2">
                  <div className="header-logo">
                    <a href="#">
                      <img src="assets/images/menu/logo/1.png" alt="Umino's Header Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                  <div className="contact-info">
                    <div className="contact-info_icon">
                      <i className="ion-android-call"></i>
                    </div>
                    <div className="contact-info_content">
                      <span>Liên hệ</span>
                      <a href="#">(+123) 123 321 345</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="hm-form_area">
                    <form action="#" className="hm-searchbox">
                      <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                      <button className="umino-search_btn" type="submit"><i
                        className="ion-android-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                  <div className="hm-minicart_area">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="minicart-icon wishlist-icon">
                            <i className="ion-ios-heart-outline"></i>
                            <span className="item-count">2</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="minicart-icon">
                            <i className="ion-bag"></i>
                            <span className="item-count">2</span>
                          </div>
                          <div className="minicart-title">
                            <span className="item_total">$54.90</span>
                          </div>
                        </a>
                        <ul className="minicart-body">
                          <li className="minicart-item_area">
                            <div className="minicart-single_item">
                              <div className="product-item_remove">
                                <span className="ion-android-close" title="Remove This Item"></span>
                              </div>
                              <div className="minicart-img">
                                <a href="#">
                                  <img src="assets/images/product/small-size/6.jpg"
                                    alt="Umino's Product Image" />
                                </a>
                              </div>
                              <div className="minicart-content">
                                <div className="product-name">
                                  <h6>
                                    <a href="#">
                                      Vulputate justo
                                    </a>
                                  </h6>
                                </div>
                                <span className="product-quantity">Qty 1</span>
                                <div className="price-box">
                                  <span className="new-price">$90.00</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="minicart-item_area">
                            <div className="minicart-single_item">
                              <div className="product-item_remove">
                                <span className="ion-android-close" title="Remove This Item"></span>
                              </div>
                              <div className="minicart-img">
                                <a href="#">
                                  <img src="assets/images/product/small-size/8.jpg"
                                    alt="Umino's Product Image" />
                                </a>
                              </div>
                              <div className="minicart-content">
                                <div className="product-name">
                                  <h6>
                                    <a href="#">
                                      Phasellus vel hendrerit
                                    </a>
                                  </h6>
                                </div>
                                <span className="product-quantity">Qty 1</span>
                                <div className="price-box">
                                  <span className="new-price">$55.00</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="price_content">
                              <div className="cart-subtotals">
                                <div className="products subtotal-list">
                                  <span className="label">Subtotal</span>
                                  <span className="defaultValue">$145.00</span>
                                </div>
                                <div className="shipping subtotal-list">
                                  <span className="label">Shipping</span>
                                  <span className="defaultValue">$7.00</span>
                                </div>
                                <div className="tax subtotal-list">
                                  <span className="label">Taxes</span>
                                  <span className="defaultValue">$0.00</span>
                                </div>
                                <div className="cart-total subtotal-list">
                                  <span className="label">Total</span>
                                  <span className="defaultValue">$152.00</span>
                                </div>
                              </div>
                              <div className="minicart-button">
                                <a className="umino-btn umino-btn_fullwidth"
                                  href="#">Checkout</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom_area ">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-9 col-sm-7">
                  <div className="category-menu category-menu-hidden">
                    <div className="category-heading">
                      <h2 className="categories-toggle"><span>Các loại trang sức</span></h2>
                    </div>
                    <div id="cate-toggle" className="category-menu-list">
                      <ul>
                        <li className="right-menu"><a href="#">Dây chuyền</a>
                          <ul className="cat-mega-menu">
                            <li className="right-menu cat-mega-title">
                              <a href="#">Chất liệu</a>
                              <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#">Vàng</a></li>
                                <li><a href="#">Bạc</a></li>
                                <li><a href="#">Bạch kim</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Giới tính</a>
                              <ul>
                                <li><a href="#">Nam</a></li>
                                <li><a href="#">Nữ</a></li>
                                <li><a href="#">Nam và nữ</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Dòng hàng</a>
                              <ul>
                                <li><a href="#">Trang Sức Đính Kim Cương</a></li>
                                <li><a href="#">Trang Sức Đính ECZ</a></li>
                                <li><a href="#">Trang Sức Đính Đá Quý Và Bán Quý</a></li>
                                <li><a href="#">Trang Sức Đính Ngọc Trai</a></li>
                                <li><a href="#">Trang Sức Đính CZ</a></li>
                                <li><a href="#">Trang Sức Không Đính Đá</a></li>
                                <li><a href="#">Kim Cương Viên</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="right-menu"><a href="#">Nhẫn</a>
                          <ul className="cat-mega-menu">
                            <li className="right-menu cat-mega-title">
                              <a href="#">Chất liệu</a>
                              <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#">Vàng</a></li>
                                <li><a href="#">Bạc</a></li>
                                <li><a href="#">Bạch kim</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Giới tính</a>
                              <ul>
                                <li><a href="#">Nam</a></li>
                                <li><a href="#">Nữ</a></li>
                                <li><a href="#">Nam và nữ</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Dòng hàng</a>
                              <ul>
                                <li><a href="#">Trang Sức Đính Kim Cương</a></li>
                                <li><a href="#">Trang Sức Đính ECZ</a></li>
                                <li><a href="#">Trang Sức Đính Đá Quý Và Bán Quý</a></li>
                                <li><a href="#">Trang Sức Đính Ngọc Trai</a></li>
                                <li><a href="#">Trang Sức Đính CZ</a></li>
                                <li><a href="#">Trang Sức Không Đính Đá</a></li>
                                <li><a href="#">Kim Cương Viên</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="right-menu"><a href="#">Bông tai</a>
                          <ul className="cat-mega-menu">
                            <li className="right-menu cat-mega-title">
                              <a href="#">Chất liệu</a>
                              <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#">Vàng</a></li>
                                <li><a href="#">Bạc</a></li>
                                <li><a href="#">Bạch kim</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Giới tính</a>
                              <ul>
                                <li><a href="#">Nam</a></li>
                                <li><a href="#">Nữ</a></li>
                                <li><a href="#">Nam và nữ</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Dòng hàng</a>
                              <ul>
                                <li><a href="#">Trang Sức Đính Kim Cương</a></li>
                                <li><a href="#">Trang Sức Đính ECZ</a></li>
                                <li><a href="#">Trang Sức Đính Đá Quý Và Bán Quý</a></li>
                                <li><a href="#">Trang Sức Đính Ngọc Trai</a></li>
                                <li><a href="#">Trang Sức Đính CZ</a></li>
                                <li><a href="#">Trang Sức Không Đính Đá</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="right-menu"><a href="#">Vòng tay</a>
                          <ul className="cat-mega-menu">
                            <li className="right-menu cat-mega-title">
                              <a href="#">Chất liệu</a>
                              <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#">Vàng</a></li>
                                <li><a href="#">Bạc</a></li>
                                <li><a href="#">Bạch kim</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Giới tính</a>
                              <ul>
                                <li><a href="#">Nam</a></li>
                                <li><a href="#">Nữ</a></li>
                                <li><a href="#">Nam và nữ</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Dòng hàng</a>
                              <ul>
                                <li><a href="#">Trang Sức Đính Kim Cương</a></li>
                                <li><a href="#">Trang Sức Đính ECZ</a></li>
                                <li><a href="#">Trang Sức Đính Đá Quý Và Bán Quý</a></li>
                                <li><a href="#">Trang Sức Đính Ngọc Trai</a></li>
                                <li><a href="#">Trang Sức Đính CZ</a></li>
                                <li><a href="#">Trang Sức Không Đính Đá</a></li>
                                <li><a href="#">Kim Cương Viên</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="right-menu"><a href="#">Lắc</a>
                          <ul className="cat-mega-menu">
                            <li className="right-menu cat-mega-title">
                              <a href="#">Chất liệu</a>
                              <ul>
                                <li><a href="#"></a></li>
                                <li><a href="#">Vàng</a></li>
                                <li><a href="#">Bạc</a></li>
                                <li><a href="#">Bạch kim</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Giới tính</a>
                              <ul>
                                <li><a href="#">Nam</a></li>
                                <li><a href="#">Nữ</a></li>
                                <li><a href="#">Nam và nữ</a></li>
                              </ul>
                            </li>
                            <li className="right-menu cat-mega-title">
                              <a href="#">Dòng hàng</a>
                              <ul>
                                <li><a href="#">Trang Sức Đính Kim Cương</a></li>
                                <li><a href="#">Trang Sức Đính ECZ</a></li>
                                <li><a href="#">Trang Sức Đính Đá Quý Và Bán Quý</a></li>
                                <li><a href="#">Trang Sức Đính Ngọc Trai</a></li>
                                <li><a href="#">Trang Sức Đính CZ</a></li>
                                <li><a href="#">Trang Sức Không Đính Đá</a></li>
                                <li><a href="#">Kim Cương Viên</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 d-none d-lg-block position-static">
                  <div className="main-menu_area">
                    <nav className="main_nav">
                      <ul>
                        <li className="dropdown-holder"><a href="#">Tài sản đấu giá<i
                          className="ion-chevron-down"></i></a>
                          <ul className="hm-dropdown">
                            <li><a href="#"></a></li>
                          </ul>
                        </li>
                        <li className="megamenu-holder"><a href="#">Thông tin đấu giá<i
                          className="ion-chevron-down"></i></a>
                          <ul className="umino-megamenu">
                            <li><span className="megamenu-title">Loại đấu giá</span>
                              <ul>
                                <li><a href="#">Thời gian đấu giá</a>
                                </li>
                              </ul>
                            </li>
                            <li><span className="megamenu-title">Cuộc đấu giá</span>
                              <ul>
                                <li><a href="#">Tài khoản của tôi</a></li>
                                <li><a href="#">Đăng nhập | Đăng ký</a></li>
                                <li><a href="#">Danh sách yêu thích</a></li>
                                <li><a href="#">Thanh toán</a></li>
                                <li><a href="#">Thủ tục thanh toán</a></li>
                                <li><a href="#">So sánh</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="#">Tin tức đấu giá<i className="ion-chevron-down"></i></a>
                          <ul className="hm-dropdown">

                            <li><a href="#">Bài viết<i
                              className="ion-chevron-right"></i></a>
                              <ul className="hm-dropdown hm-sub_dropdown">
                                <li><a href="#" />...</li>

                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="#">Giới thiệu<i className="ion-chevron-down"></i></a>
                          <ul className="hm-dropdown">
                            <li><a href="#">Câu hỏi thường gặp</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="#">Lỗi 404</a></li>
                            <li><a href="#">Sắp ra mắt</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Liên hệ</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 d-none d-lg-block">
                  <div className="login-area">
                    <a href="#">Đăng nhập<span>hoặc</span>Đăng ký</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-5 d-block d-lg-none">
                  <div className="mobile-menu_area">
                    <ul>
                      <li className="minicart-area">
                        <a href="#"><i className="fa fa-shopping-cart"></i><span
                          className="item-count">2</span></a>
                      </li>
                      <li>
                        <a href="#"
                          className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block">
                          <i className="ion-navicon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom_area header-sticky stick">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-7">
                  <div className="header-logo">
                    <a href="#">
                      <img src="assets/images/menu/logo/1.png" alt="Umino's Header Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 d-none d-lg-block position-static">
                  <div className="main-menu_area">
                    <nav className="main_nav">
                      <ul>
                        <li className="dropdown-holder"><a href="#">Trang chủ<i
                          className="ion-chevron-down"></i></a>
                          <ul className="hm-dropdown">
                            <li><a href="#">Trang chủ Cửa hàng1</a></li>
                            <li><a href="#">Trang chủ Cửa hàng 2</a></li>
                            <li><a href="#">Trang chủ Cửa hàng 3</a></li>
                            <li><a href="#">Trang chủ Cửa hàng 4</a></li>
                          </ul>
                        </li>
                        <li className="megamenu-holder"><a href="#">Cửa hàng<i
                          className="ion-chevron-down"></i></a>
                          <ul className="umino-megamenu">
                            <li><span className="megamenu-title">Bố cục trang cửa hàng</span>
                              <ul>
                                <li><a href="#">Toàn bộ chiều rộng lưới</a></li>
                                <li><a href="#">Thanh bên trái</a></li>
                                <li><a href="#">Thanh bên phải</a></li>
                                <li><a href="#">Danh sách toàn chiều rộng</a></li>
                                <li><a href="#">Danh sách có thanh bên trái</a>
                                </li>
                                <li><a href="#">Danh sách có thanh bên phải</a>
                                </li>
                              </ul>
                            </li>
                            <li><span className="megamenu-title">Kiểu sản phẩm đơn</span>
                              <ul>
                                <li><a href="#">Bộ sưu tập bên trái</a>
                                </li>
                                <li><a href="#">Bộ sưu tập bên phải</a>
                                </li>
                                <li><a href="#">Kiểu tab bên trái</a>
                                </li>
                                <li><a href="#">Kiểu tab bên phải</a>
                                </li>
                                <li><a href="#">Cố định bên trái</a>
                                </li>
                                <li><a href="#">Cố định bên phải</a>
                                </li>
                              </ul>
                            </li>
                            <li><span className="megamenu-title">Loại sản phẩm đơn</span>
                              <ul>
                                <li><a href="#">Sản phẩm đơn</a></li>
                                <li><a href="#">Bán sản phẩm đơn</a>
                                </li>
                                <li><a href="#">Nhóm sản phẩm duy nhất</a>
                                </li>
                                <li><a href="#">Biến sản phẩm đơn</a>
                                </li>
                                <li><a href="#">Liên kết sản phẩm duy nhất</a>
                                </li>
                                <li><a href="#">Thanh trượt sản phẩm đơn</a>
                                </li>
                              </ul>
                            </li>
                            <li><span className="megamenu-title">Trang liên quan đến cửa hàng</span>
                              <ul>
                                <li><a href="#">Tài khoản của tôi</a></li>
                                <li><a href="#">Đăng nhập | Đăng ký</a></li>
                                <li><a href="#">Danh sách yêu thích</a></li>
                                <li><a href="#">Thanh toán</a></li>
                                <li><a href="#">Phương thức thanh toán</a></li>
                                <li><a href="#">So sánh</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="#">Blog<i className="ion-chevron-down"></i></a>
                          <ul className="hm-dropdown">
                            <li><a href="#">Chế độ hiển thị theo ô<i
                              className="ion-chevron-right"></i></a>
                              <ul className="hm-dropdown hm-sub_dropdown">
                                <li><a href="#">Column Two</a></li>
                                <li><a href="#">Column Three</a></li>
                                <li><a href="#">Left Sidebar</a></li>
                                <li><a href="#">Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a href="#">Xem danh sách<i
                              className="ion-chevron-right"></i></a>
                              <ul className="hm-dropdown hm-sub_dropdown">
                                <li><a href="#">List Fullwidth</a></li>
                                <li><a href="#">List Left Sidebar</a>
                                </li>
                                <li><a href="#">List Right
                                  Sidebar</a>
                                </li>
                              </ul>
                            </li>
                            <li><a href="#">Blog Details <i
                              className="ion-chevron-right"></i></a>
                              <ul className="hm-dropdown hm-sub_dropdown">
                                <li><a href="#">Left Sidebar</a>
                                </li>
                                <li><a href="#">Right Sidebar</a>
                                </li>
                              </ul>
                            </li>
                            <li><a href="#">Blog Format <i
                              className="ion-chevron-right"></i></a>
                              <ul className="hm-dropdown hm-sub_dropdown">
                                <li><a href="#">Gallery Format</a></li>
                                <li><a href="#">Audio Format</a></li>
                                <li><a href="#">Video Format</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><a href="#">Pages <i className="ion-chevron-down"></i></a>
                          <ul className="hm-dropdown">
                            <li><a href="#">Frequently Questions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Error 404</a></li>
                            <li><a href="#">Coming Soon</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                  <div className="hm-minicart_area">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="minicart-icon wishlist-icon">
                            <i className="ion-ios-heart-outline"></i>
                            <span className="item-count">2</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="minicart-icon">
                            <i className="ion-bag"></i>
                            <span className="item-count">2</span>
                          </div>
                          <div className="minicart-title">
                            <span className="item_total">$54.90</span>
                          </div>
                        </a>
                        <ul className="minicart-body">
                          <li className="minicart-item_area">
                            <div className="minicart-single_item">
                              <div className="product-item_remove">
                                <span className="ion-android-close" title="Remove This Item"></span>
                              </div>
                              <div className="minicart-img">
                                <a href="#">
                                  <img src="assets/images/product/small-size/6.jpg"
                                    alt="Umino's Product Image" />
                                </a>
                              </div>
                              <div className="minicart-content">
                                <div className="product-name">
                                  <h6>
                                    <a href="#">
                                      Vulputate justo
                                    </a>
                                  </h6>
                                </div>
                                <span className="product-quantity">Qty 1</span>
                                <div className="price-box">
                                  <span className="new-price">$90.00</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="minicart-item_area">
                            <div className="minicart-single_item">
                              <div className="product-item_remove">
                                <span className="ion-android-close" title="Remove This Item"></span>
                              </div>
                              <div className="minicart-img">
                                <a href="#">
                                  <img src="assets/images/product/small-size/8.jpg"
                                    alt="Umino's Product Image" />
                                </a>
                              </div>
                              <div className="minicart-content">
                                <div className="product-name">
                                  <h6>
                                    <a href="#">
                                      Phasellus vel hendrerit
                                    </a>
                                  </h6>
                                </div>
                                <span className="product-quantity">Qty 1</span>
                                <div className="price-box">
                                  <span className="new-price">$55.00</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="price_content">
                              <div className="cart-subtotals">
                                <div className="products subtotal-list">
                                  <span className="label">Subtotal</span>
                                  <span className="defaultValue">$145.00</span>
                                </div>
                                <div className="shipping subtotal-list">
                                  <span className="label">Shipping</span>
                                  <span className="defaultValue">$7.00</span>
                                </div>
                                <div className="tax subtotal-list">
                                  <span className="label">Taxes</span>
                                  <span className="defaultValue">$0.00</span>
                                </div>
                                <div className="cart-total subtotal-list">
                                  <span className="label">Total</span>
                                  <span className="defaultValue">$152.00</span>
                                </div>
                              </div>
                              <div className="minicart-button">
                                <a className="umino-btn umino-btn_fullwidth"
                                  href="#">Checkout</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-sm-5 d-block d-lg-none">
                  <div className="mobile-menu_area">
                    <ul>
                      <li className="minicart-area">
                        <a href="#"><i className="fa fa-shopping-cart"></i><span
                          className="item-count">2</span></a>
                      </li>
                      <li>
                        <a href="#"
                          className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block">
                          <i className="ion-navicon"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu_wrapper" id="mobileMenu">
            <div className="offcanvas-menu-inner">
              <div className="container">
                <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                <div className="offcanvas-inner_search">
                  <form action="#" className="hm-searchbox">
                    <input type="text" placeholder="Search for item..." />
                    <button className="search_btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                  </form>
                </div>
                <nav className="offcanvas-navigation">
                  <ul className="mobile-menu">
                    <li className="menu-item-has-children active"><a href="#"><span
                      className="mm-text">Home</span></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="mm-text">Home Shop 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Home Shop 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Home Shop 3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Home Shop 4</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        <span className="mm-text">Shop</span>
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">
                            <span className="mm-text">Grid View</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Grid Fullwidth</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Right Sidebar</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            <span className="mm-text">Shop List</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Full Width</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Right Sidebar</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            <span className="mm-text">Single Product Style</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Gallery Left</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Gallery Right</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Tab Style Left</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Tab Style Right</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Sticky Left</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Sticky Right</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            <span className="mm-text">Single Product Type</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Single Product</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Single Product Sale</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Single Product Group</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Single Product Variable</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Single Product Affiliate</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Single Product Slider</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            <span className="mm-text">Shop Related Pages</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">My Account</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Login | Register</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Cart</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Checkout</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Comparer</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        <span className="mm-text">Blog</span>
                      </a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children has-children">
                          <a href="#">
                            <span className="mm-text">Grid View</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Column Two</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Column Three</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Right Sidebar</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children has-children">
                          <a href="#">
                            <span className="mm-text">List View</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">List Fullwidth</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">List Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">List Right Sidebar</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children has-children">
                          <a href="#">
                            <span className="mm-text">Blog Details</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Left Sidebar</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Right Sidebar</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children has-children">
                          <a href="#">
                            <span className="mm-text">Blog Format</span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <span className="mm-text">Gallery Format</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Audio Format</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="mm-text">Video Format</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        <span className="mm-text">Pages</span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="mm-text">About Us</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Contact</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">FAQ</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Error 404</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Coming Soon</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <nav className="offcanvas-navigation user-setting_area">
                  <ul className="mobile-menu">
                    <li className="menu-item-has-children active"><a href="#"><span
                      className="mm-text">User
                      Setting</span></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="mm-text">My Account</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Login | Register</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#"><span
                      className="mm-text">Currency</span></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="mm-text">EUR €</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">USD $</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children"><a href="#"><span
                      className="mm-text">Language</span></a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">
                            <span className="mm-text">English</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Français</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Romanian</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="mm-text">Japanese</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="umino-slider_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="main-slider slider-navigation_style-1">
                  <div className="single-slide animation-style-01 bg-1">
                    <div className="container">
                      <div className="slider-content">
                        <h4>...</h4>
                        <h3>...</h3>
                        <a className="product-price" href="#">
                          <span>$....</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="single-slide animation-style-01 bg-2">
                    <div className="container">
                      <div className="slider-content slider-content-2">
                        <h4>Wooden Chair.</h4>
                        <h3>Morden Furniture</h3>
                        <a className="product-price" href="#">
                          <span>$200.45</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="row sub-banner_wrap">
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-item img-hover_effect">
                      <div className="banner-content">
                        <span>Bàn điều khiển</span>
                        <h4>...</h4>
                        <h3>....</h3>
                        <a href="#">
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                      <div className="banner-img">
                        <a href="#">
                          <img src="assets/images/banner/1-1.jpg" alt="Umino's Banner" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="row sub-banner_wrap-2">
                      <div className="col-lg-12">
                        <div className="banner-item img-hover_effect">
                          <div className="banner-content">
                            <span>...</span>
                            <h4>...</h4>
                            <h3>...</h3>
                            <a href="#">
                              <i className="fa fa-arrow-circle-right"></i>
                            </a>
                          </div>
                          <div className="banner-img">
                            <a href="#">
                              <img src="assets/images/banner/1-2.jpg" alt="Umino's Banner" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="banner-item img-hover_effect">
                          <div className="banner-content">
                            <span>...</span>
                            <h4>...</h4>
                            <h3>...</h3>
                            <a href="#">
                              <i className="fa fa-arrow-circle-right"></i>
                            </a>
                          </div>
                          <div className="banner-img">
                            <a href="#">
                              <img src="assets/images/banner/1-3.jpg" alt="Umino's Banner" />
                            </a>
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

        <div className="umino-shipping_area  ">
          <div className="container">
            <div className="shipping-nav">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="shipping-item">
                    <div className="shipping-icon">
                      <i className="fa fa-paper-plane"></i>
                    </div>
                    <div className="shipping-content">
                      <h6>...</h6>
                      <p>...</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="shipping-item">
                    <div className="shipping-icon">
                      <i className="ion-ios-reload"></i>
                    </div>
                    <div className="shipping-content">
                      <h6>...</h6>
                      <p>...</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="shipping-item">
                    <div className="shipping-icon">
                      <i className="fa fa-credit-card"></i>
                    </div>
                    <div className="shipping-content">
                      <h6>...</h6>
                      <p>...</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="shipping-item">
                    <div className="shipping-icon">
                      <i className="ion-help-buoy"></i>
                    </div>
                    <div className="shipping-content">
                      <h6>24/7 Hỗ trợ</h6>
                      <p>DSG Chúng tôi sẽ phục vụ bạn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="umino-banner_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="#">
                      <img className="img-full" src="assets/images/banner/1-4.jpg" alt="Umino's Banner" />
                    </a>
                  </div>
                  <div className="banner-content">
                    <span>...</span>
                    <h4>..</h4>
                    <h3>...</h3>
                    <a className="umino-btn umino-btn_dark" href="#">Đấu giá ngay</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="#">
                      <img className="img-full" src="assets/images/banner/1-5.jpg" alt="Umino's Banner" />
                    </a>
                  </div>
                  <div className="banner-content">
                    <span>...</span>
                    <h4>...</h4>
                    <h3>...</h3>
                    <a className="umino-btn umino-btn_dark" href="#">Đấu giá ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="umino-product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="umino-section_title">
                  <h3>...</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="umino-product_slider slider-navigation_style-1">
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/1-1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">...</span>
                            <span className="old-price">...</span>
                          </div>
                          <h6 className="product-name"><a href="#">...</a>
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
                          <div className="product-progressbar product-progressbar-3">
                            <span className="product-in_stock">...:<strong>...</strong></span>
                            <span className="product-sold">...<strong>..</strong></span>
                          </div>
                          <div className="umino-countdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/2-1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">...</span>
                            <span className="old-price">...</span>
                          </div>
                          <h6 className="product-name"><a href="#">...</a>
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
                          <div className="product-progressbar">
                            <span className="product-in_stock">...<strong>379</strong></span>
                            <span className="product-sold">...<strong>121</strong></span>
                          </div>
                          <div className="umino-countdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/3-1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">...</span>
                            <span className="old-price">...</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
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
                          <div className="product-progressbar product-progressbar-2">
                            <span className="product-in_stock">Available:<strong>91</strong></span>
                            <span className="product-sold">Unit Sold:<strong>8</strong></span>
                          </div>
                          <div className="umino-countdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/4-1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$79.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Curabitur tristique
                            neque</a>
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
                          <div className="product-progressbar">
                            <span className="product-in_stock">Available:<strong>369</strong></span>
                            <span className="product-sold">Unit Sold:<strong>56</strong></span>
                          </div>
                          <div className="umino-countdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/5-1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                          <div className="product-progressbar">
                            <span className="product-in_stock">Available:<strong>466</strong></span>
                            <span className="product-sold">Unit Sold:<strong>37</strong></span>
                          </div>
                          <div className="umino-countdown"></div>
                        </div>
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
                  <h3>Furniture & Decor</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="umino-product_slider-2 slider-navigation_style-1">
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/1-2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/2-2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Auctor gravida
                            enimuctor</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/3-2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/4-2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$79.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Curabitur tristique
                            neque</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/5-2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/7-3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/1-3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/2-3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Auctor gravida
                            enimuctor</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/3-3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/4-3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$79.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Curabitur tristique
                            neque</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/5-3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                        <a href="#">
                          <img className="primary-img" src="assets/images/product/medium-size/8-2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                        <div className="add-actions">
                          <ul>
                            <li><a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                              title="Add To cart"><i className="ion-bag"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Wishlist"><i
                                className="ion-ios-heart-outline"></i></a>
                            </li>
                            <li><a href="#" data-bs-toggle="tooltip"
                              data-bs-placement="top" title="Add To Cart"><i
                                className="fa fa-chart-bar"></i></a>
                            </li>
                            <li className="quick-view-btn" data-bs-toggle="modal"
                              data-bs-target="#exampleModalCenter"><a href="#"
                                data-bs-toggle="tooltip" data-bs-placement="top"
                                title="Quick View"><i className="ion-ios-search"></i></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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

        <div className="umino-banner_area umino-banner_area-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 img-hover_effect">
                <div className="banner-item">
                  <div className="banner-img">
                    <a href="#">
                      <img className="img-full" src="assets/images/banner/1-6.jpg" alt="Umino's Banner" />
                    </a>
                  </div>
                  <div className="banner-content">
                    <span>Living Room Set</span>
                    <h4>Hauteville Plywood</h4>
                    <h3>New Chair</h3>
                    <a className="umino-btn umino-btn_dark" href="#">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-item img-hover_effect">
                  <div className="banner-img">
                    <a href="#">
                      <img className="img-full" src="assets/images/banner/1-7.jpg" alt="Umino's Banner" />
                    </a>
                  </div>
                  <div className="banner-content banner-content-2">
                    <span>Home Decor</span>
                    <h4>The Best Clock</h4>
                    <h3>Creative Furniture</h3>
                    <a className="umino-btn umino-btn_yellow" href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/4.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$60.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/5.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$80.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquam porttitor
                            turpis</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/6.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$90.00</span>
                            <span className="old-price">$105.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Condime eondim
                            furnitur</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/images/product/small-size/7.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/8.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$45.00</span>
                            <span className="old-price">$55.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/5.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$80.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquam porttitor
                            turpis</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/6.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$90.00</span>
                            <span className="old-price">$105.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Condime eondim
                            furnitur</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/images/product/small-size/7.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/8.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$45.00</span>
                            <span className="old-price">$55.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/4.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$60.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/3.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/4.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$60.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/5.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$80.00</span>
                            <span className="old-price">$85.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquam porttitor
                            turpis</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/6.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$90.00</span>
                            <span className="old-price">$105.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Condime eondim
                            furnitur</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-item">
                    <div className="single-product">
                      <div className="product-img">
                        <a href="#">
                          <img src="assets/images/product/small-size/1.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$70.00</span>
                            <span className="old-price">$80.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Aliquet auctor
                            semali</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/2.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$95.00</span>
                            <span className="old-price">$100.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Accumsan mauris
                            ullaat</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/7.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$65.00</span>
                            <span className="old-price">$68.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
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
                        <a href="#">
                          <img src="assets/images/product/small-size/8.jpg"
                            alt="Umino's Product Image" />
                        </a>
                      </div>
                      <div className="product-content">
                        <div className="product-desc_info">
                          <div className="price-box">
                            <span className="new-price">$45.00</span>
                            <span className="old-price">$55.00</span>
                          </div>
                          <h6 className="product-name"><a href="#">Bibenm lorem
                            coectetur</a>
                          </h6>
                          <div className="rating-box">
                            <ul>
                              <li><i className="ion-ios-star"></i></li>
                              <li><i className="ion-ios-star"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
                              <li className="silver-color"><i className="ion-ios-star-outline"></i></li>
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

        <div className="umino-brand_area">
          <div className="container">
            <div className="umino-brand_nav">
              <div className="row">
                <div className="col-lg-12">
                  <div className="umino-brand_slider slider-navigation_style-1">
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/1.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/2.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/3.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/4.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/5.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/1.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                    <div className="slide-item">
                      <a href="#">
                        <img src="assets/images/brand/2.jpg" alt="Umino's Brand Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="umino-footer_area">
          <div className="footer-top_area bg--tangerine_yellow">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="newsletter-area">
                    <div className="newsletter-info">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      <span>Đăng ký nhận bản tin và được giảm giá</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="newsletter-form_wrap">
                    <form
                      action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                      className="newsletters-form validate" target="_blank" noValidate>
                      <div id="mc_embed_signup_scroll">
                        <div id="mc-form" className="mc-form subscribe-form">
                          <input id="mc-email" className="newsletter-input" type="email"
                            autoComplete="off" placeholder="Nhập địa chỉ email" />
                          <button className="newsletter-btn" id="mc-submit">Đăng ký</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle_area">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 order-1 order-lg-1">
                  <div className="footer-widgets_title">
                    <h4>Liên hệ chúng tôi</h4>
                  </div>
                  <div className="footer-widgets footer-contact_info">
                    <ul>
                      <li>
                        <i className="ion-ios-home-outline"></i>
                        <span>Nhà văn hóa sinh viên làng đại học quốc gia</span>
                      </li>
                      <li>
                        <i className="ion-ios-email-outline"></i>
                        <span>Email:</span>
                        <a href="#">info@gmail.com</a>
                      </li>
                      <li>
                        <i className="ion-android-call"></i>
                        <span>Số điện thoại:</span>
                        <div className="cellphone-number_area">
                          <a href="#">(+123) 123 321 345</a>
                        </div>
                      </li>
                      <li>
                        <i className="ion-android-print"></i>
                        <span>Fax:</span>
                        <div className="cellphone-number_area">
                          <a href="#">(+321) 543 123 321</a>
                        </div>
                      </li>
                      <li>
                        <i className="ion-ios-calendar-outline"></i>
                        <span>Thứ Hai-Thứ Bảy 9:00 tối - 5:00 chiều. Chủ nhật: Đóng cửa</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 order-2 order-lg-2">
                  <div className="footer-widgets_title">
                    <h4>Thông tin</h4>
                  </div>
                  <div className="footer-widgets">
                    <ul>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Về chúng tôi</a></li>
                      <li><a href="#">Chính sách bảo mật</a></li>
                      <li><a href="#">Dịch vụ khách hàng</a></li>
                      <li><a href="#">Câu hỏi thường gặp</a></li>
                      <li><a href="#">Thông tin giao hàng</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 order-3 order-lg-3">
                  <div className="footer-widgets_title">
                    <h4>Tài khoản của tôi</h4>
                  </div>
                  <div className="footer-widgets">
                    <ul>
                      <li><a href="#">Giỏ hàng</a></li>
                      <li><a href="#">Danh sách yêu thích</a></li>
                      <li><a href="#">Thủ tục thanh toán</a></li>
                      <li><a href="#">Câu hỏi thường gặp</a></li>
                      <li><a href="#">Tài khoản của tôi</a></li>
                      <li><a href="#">Chính sách bảo mật</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 order-3 order-lg-4">
                  <div className="footer-widgets_title">
                    <h4>Latest Tweets</h4>
                  </div>
                  <div className="footer-widgets latest-tweets_area">
                    <div className="latest-tweets_slider">
                      <div className="twitter-single_item">
                        <div className="twitter-feed_content">
                          <p>With this roundup of 42 of the best halftone resources for Adobe
                            Photoshop and Adobe Illustrator, here's
                            everything you need to achieve that classNameic vintage look for yourself.
                            <a href="#" title="enva.to/rd"
                              className="rtw_url_link">enva.to/rd</a>
                            <a href="#" title="pic.twitter.com/Xy55wIEP5T"
                              className="rtw_media_link"> pic.twitter.com/Xy55wIEP5T</a>
                          </p>
                        </div>
                        <div className="twitter-feed_footer">
                          <a href="#">Sep 09</a>
                          <a href="#">reply</a>
                          <a href="#">retweet</a>
                          <a href="#">favorite</a>
                          <a href="#">1 years ago</a>
                        </div>
                      </div>
                      <div className="twitter-single_item">
                        <div className="twitter-feed_content">
                          <p>Packed with ideas, inspiration, and just a few pictures of cute cats, it
                            can be hard to stand out in a sea of
                            graphics on
                            <a href="#" title="Pinterest" lang="en">@Pinterest</a>
                            . Which is why we're here to help with these awesome templates.
                            <a href="#" title="https://enva.to/r6"
                              className="rtw_url_link">enva.to/r6</a>
                          </p>
                        </div>
                        <div className="twitter-feed_footer">
                          <a href="#">Sep 20</a>
                          <a href="#">reply</a>
                          <a href="#">retweet</a>
                          <a href="#">favorite</a>
                          <a href="#">1 years ago</a>
                        </div>
                      </div>
                      <div className="twitter-single_item">
                        <div className="twitter-feed_content">
                          <p>Packed with ideas, inspiration, and just a few pictures of cute cats, it
                            can be hard to stand out in a sea of graphics on
                            <a href="#" title="Pinterest" lang="en">@Pinterest</a>
                            . Which is why we're here to help with these awesome templates.
                            <a href="#" title="enva.to/r6"
                              className="rtw_url_link">enva.to/r6</a>
                          </p>
                        </div>
                        <div className="twitter-feed_footer">
                          <a href="#">Sep 25</a>
                          <a href="#">reply</a>
                          <a href="#">retweet</a>
                          <a href="#">favorite</a>
                          <a href="#">1 years ago</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom_area">
            <div className="container">
              <div className="footer-bottom_nav">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-7 order-3 order-md-1">
                    <div className="copyright">
                      <span>Copyright &copy; 2019 <a href="#">...</a> ...</span>
                    </div>
                    <div className="umino-social_link">
                      <ul>
                        <li className="facebook">
                          <a href="#" data-bs-toggle="tooltip" target="_blank"
                            title="Facebook">
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#" data-bs-toggle="tooltip" target="_blank"
                            title="Twitter">
                            <i className="fab fa-twitter-square"></i>
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="#" data-bs-toggle="tooltip" target="_blank"
                            title="Instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#" data-bs-toggle="tooltip" target="_blank"
                            title="linkedin">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li className="rss">
                          <a href="#" data-bs-toggle="tooltip" target="_blank"
                            title="rss">
                            <i className="fa fa-rss"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-3 col-md-5 order-1 order-md-2">
                    <div className="footer-logo">
                      <a href="#">
                        <img src="assets/images/footer/logo/1.png" alt="Umino's Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 order-2">
                    <div className="payment-method">
                      <h3 className="heading">Cho phép thanh toán dựa trên</h3>
                      <a href="#">
                        <img src="assets/images/footer/payment/1.png" alt="Umino's Payment Method" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade modal-wrapper" id="exampleModalCenter">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-inner-area sp-area row">
                  <div className="col-lg-5">
                    <div className="sp-img_area">
                      <div className="sp-img_slider-2 slick-img-slider umino-slick-slider arrow-type-two"
                        data-slick-options='{
                                                  "slidesToShow": 1,
                                                  "arrows": false,
                                                  "fade": true,
                                                  "draggable": false,
                                                  "swipe": false,
                                                  "asNavFor": ".sp-img_slider-nav"
                                                  }'>
                        <div className="single-slide red">
                          <img src="assets/images/product/large-size/1.jpg"
                            alt="Umino's Product Image" />
                        </div>
                        <div className="single-slide orange">
                          <img src="assets/images/product/large-size/2.jpg"
                            alt="Umino's Product Image" />
                        </div>
                        <div className="single-slide brown">
                          <img src="assets/images/product/large-size/3.jpg"
                            alt="Umino's Product Image" />
                        </div>
                        <div className="single-slide umber">
                          <img src="assets/images/product/large-size/4.jpg"
                            alt="Umino's Product Image" />
                        </div>
                      </div>
                      <div className="sp-img_slider-nav slick-slider-nav umino-slick-slider arrow-type-two"
                        data-slick-options='{
                             "slidesToShow": 4,
                              "asNavFor": ".sp-img_slider-2",
                             "focusOnSelect": true
                            }' data-slick-responsive='[
                                                  {"breakpoint":1501, "settings": {"slidesToShow": 3}},
                                                  {"breakpoint":1200, "settings": {"slidesToShow": 2}},
                                                  {"breakpoint":992, "settings": {"slidesToShow": 4}},
                                                  {"breakpoint":768, "settings": {"slidesToShow": 3}},
                                                  {"breakpoint":321, "settings": {"slidesToShow": 2}}
                                              ]'>
                        <div className="single-slide red">
                          <img src="assets/images/product/small-size/1.jpg"
                            alt="Umino's Product Thumnail" />
                        </div>
                        <div className="single-slide orange">
                          <img src="assets/images/product/small-size/2.jpg"
                            alt="Umino's Product Thumnail" />
                        </div>
                        <div className="single-slide brown">
                          <img src="assets/images/product/small-size/3.jpg"
                            alt="Umino's Product Thumnail" />
                        </div>
                        <div className="single-slide umber">
                          <img src="assets/images/product/small-size/4.jpg"
                            alt="Umino's Product Thumnail" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="sp-content">
                      <div className="sp-heading">
                        <h5><a href="#">Aliquet Auctor Semali</a></h5>
                      </div>
                      <div className="price-box">
                        <span className="new-price">$70.00</span>
                        <span className="old-price">$80.00</span>
                      </div>
                      <div className="features">
                        <a href="#">See all features</a>
                      </div>
                      <div className="quantity-area">
                        <div className="quantity">
                          <label>Quantity</label>
                          <div className="cart-plus-minus">
                            <input className="cart-plus-minus-box" defaultValue="1" type="text" />
                            <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                            <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                          </div>
                        </div>
                        <div className="quantity-btn">
                          <ul>
                            <li><a href="#" className="add-to_cart">Add To Cart</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="short-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis
                          vulputate, tristique ut lectus</p>
                      </div>
                      <div className="umino-social_link">
                        <div className="social-title">
                          <h3>Share This Product</h3>
                        </div>
                        <ul>
                          <li className="facebook">
                            <a href="#" data-bs-toggle="tooltip"
                              target="_blank" title="Facebook">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#" data-bs-toggle="tooltip" target="_blank"
                              title="Twitter">
                              <i className="fab fa-twitter-square"></i>
                            </a>
                          </li>
                          <li className="youtube">
                            <a href="#" data-bs-toggle="tooltip"
                              target="_blank" title="Youtube">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li className="google-plus">
                            <a href="#" data-bs-toggle="tooltip"
                              target="_blank" title="Google Plus">
                              <i className="fab fa-google-plus"></i>
                            </a>
                          </li>
                          <li className="instagram">
                            <a href="#" data-bs-toggle="tooltip" target="_blank"
                              title="Instagram">
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
        </div>

      </div>

    </>
  )
}

export default App
