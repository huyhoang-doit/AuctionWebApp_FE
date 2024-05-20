import { useEffect } from "react";
import Brand from "../Brand/Brand";

export default function SingleProductSale() {
    useEffect(() => {
        $(".umino-countdown").countdown("2024/12/20", function (event) {
            $(this).html(
                event.strftime(
                    '<div class="count"><span class="count-amount">%D</span><span class="count-period">Days</span></div><div class="count"><span class="count-amount">%H</span><span class="count-period">Hrs</span></div><div class="count"><span class="count-amount">%M</span><span class="count-period">Mins</span></div><div class="count"><span class="count-amount">%S</span><span class="count-period">Secs</span></div>'
                )
            );
        });
    }, []);

    return (
        <>
            <body className="template-color-1">
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
                                                <img
                                                    className="zoompro"
                                                    src="assets/images/product/large-size/1.jpg"
                                                    data-zoom-image="assets/images/product/large-size/1.jpg"
                                                    alt="Umino's Product Image"
                                                />
                                            </div>
                                            <div
                                                id="gallery"
                                                className="sp-img_slider slider-navigation_style-4"
                                            >
                                                <a
                                                    className="active"
                                                    data-image="assets/images/product/large-size/1.jpg"
                                                    data-zoom-image="assets/images/product/large-size/1.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/1.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                                <a
                                                    data-image="assets/images/product/large-size/2.jpg"
                                                    data-zoom-image="assets/images/product/large-size/2.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/2.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                                <a
                                                    data-image="assets/images/product/large-size/3.jpg"
                                                    data-zoom-image="assets/images/product/large-size/3.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/3.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                                <a
                                                    data-image="assets/images/product/large-size/4.jpg"
                                                    data-zoom-image="assets/images/product/large-size/4.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/4.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                                <a
                                                    data-image="assets/images/product/large-size/5.jpg"
                                                    data-zoom-image="assets/images/product/large-size/5.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/5.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                                <a
                                                    data-image="assets/images/product/large-size/6.jpg"
                                                    data-zoom-image="assets/images/product/large-size/6.jpg"
                                                >
                                                    <img
                                                        src="assets/images/product/small-size/6.jpg"
                                                        alt="Umino's Product Image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sp-content">
                                            <div className="price-box">
                                                <span className="new-price">
                                                    $100.00
                                                </span>
                                            </div>
                                            <div className="sp-heading">
                                                <h2>
                                                    <a href="javascript:void(0)">
                                                        Faucibus A Lobortis
                                                        Vitae
                                                    </a>
                                                </h2>
                                            </div>
                                            <div className="product-desc">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Nam fringilla augue nec est
                                                    tristique auctor. Donec non
                                                    est at libero vulputate
                                                    rutrum. Morbi ornare lectus
                                                    quis justo gravida semper.
                                                    Nulla tellus mi, vulputate
                                                    adipiscing cursus eu,
                                                    suscipit id nulla.
                                                </p>
                                            </div>
                                            <div className="product-size_box">
                                                <span>Size</span>
                                                <select className="myniceselect nice-select">
                                                    <option value="1">S</option>
                                                    <option value="2">M</option>
                                                    <option value="3">L</option>
                                                    <option value="4">
                                                        XL
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="umino-countdown_area">
                                                <div className="umino-countdown"></div>
                                            </div>
                                            <div className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input
                                                        className="cart-plus-minus-box"
                                                        value="1"
                                                        type="text"
                                                    />
                                                    <div className="dec qtybutton">
                                                        <i className="fa fa-angle-down"></i>
                                                    </div>
                                                    <div className="inc qtybutton">
                                                        <i className="fa fa-angle-up"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="category-list_area">
                                                <h6>Category:</h6>
                                                <ul className="tags-list">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Bedroom Furniture,
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Console Tables,
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            End Tables,
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Living Room Sets,
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Ottomans & Storage
                                                            Ottomans,
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Sofas & Couches,
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            TV Stands
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="category-list_area tag-list_area">
                                                <h6>Tags:</h6>
                                                <ul className="tags-list">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            Men
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
                                                <li>
                                                    <a
                                                        className="active"
                                                        data-bs-toggle="tab"
                                                        href="#description"
                                                    >
                                                        <span>Description</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-bs-toggle="tab"
                                                        href="#specification"
                                                    >
                                                        <span>
                                                            Specification
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content umino-tab_content">
                                            <div
                                                id="description"
                                                className="tab-pane active show"
                                                role="tabpanel"
                                            >
                                                <div className="product-description">
                                                    <p className="short-desc">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit. Nam
                                                        fringilla augue nec est
                                                        tristique auctor. Donec
                                                        non est at libero
                                                        vulputate rutrum. Morbi
                                                        ornare lectus quis justo
                                                        gravida semper. Nulla
                                                        tellus mi, vulputate
                                                        adipiscing cursus eu,
                                                        suscipit id nulla.
                                                    </p>
                                                    <p className="additional-desc">
                                                        Pellentesque aliquet,
                                                        sem eget laoreet
                                                        ultrices, ipsum metus
                                                        feugiat sem, quis
                                                        fermentum turpis eros
                                                        eget velit. Donec ac
                                                        tempus ante. Fusce
                                                        ultricies massa massa.
                                                        Fusce aliquam, purus
                                                        eget sagittis vulputate,
                                                        sapien libero hendrerit
                                                        est, sed commodo augue
                                                        nisi non neque. Lorem
                                                        ipsum dolor sit amet,
                                                        consectetur adipiscing
                                                        elit. Sed tempor, lorem
                                                        et placerat vestibulum,
                                                        metus nisi posuere nisl,
                                                        in accumsan elit odio
                                                        quis mi. Cras neque
                                                        metus, consequat et
                                                        blandit et, luctus a
                                                        nunc. Etiam gravida
                                                        vehicula tellus, in
                                                        imperdiet ligula euismod
                                                        eget.
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                id="specification"
                                                className="tab-pane"
                                                role="tabpanel"
                                            >
                                                <table className="table table-bordered specification-inner_stuff">
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={2}>
                                                                <strong>
                                                                    Memory
                                                                </strong>
                                                            </td>
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
                                                            <td colSpan={2}>
                                                                <strong>
                                                                    Processor
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                No. of Cores
                                                            </td>
                                                            <td>1</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
