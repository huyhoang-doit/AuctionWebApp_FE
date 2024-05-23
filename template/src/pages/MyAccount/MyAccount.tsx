import React from "react";

export default function MyAccount() {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="active">My Account</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Umino's Breadcrumb Area End Here -->
        <!-- Begin Umino's Page Content Area --> */}
            <main className="page-content">
                {/* <!-- Begin Umino's Account Page Area --> */}
                <div className="account-page-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <ul
                                    className="nav myaccount-tab-trigger"
                                    id="account-page-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-details-tab"
                                            data-bs-toggle="tab"
                                            href="#account-details"
                                            role="tab"
                                            aria-controls="account-details"
                                            aria-selected="false"
                                        >
                                            Thông tin tài khoản
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-orders-tab"
                                            data-bs-toggle="tab"
                                            href="#account-orders"
                                            role="tab"
                                            aria-controls="account-orders"
                                            aria-selected="false"
                                        >
                                            Lịch sử giao dịch
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-address-tab"
                                            data-bs-toggle="tab"
                                            href="#account-address"
                                            role="tab"
                                            aria-controls="account-address"
                                            aria-selected="false"
                                        >
                                            Hoạt động phiên
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-address-tab"
                                            data-bs-toggle="tab"
                                            href="#account-address"
                                            role="tab"
                                            aria-controls="account-address"
                                            aria-selected="false"
                                        >
                                            Sản phẩm yêu cầu
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9">
                                <div
                                    className="tab-content myaccount-tab-content"
                                    id="account-page-tab-content"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="account-dashboard"
                                        role="tabpanel"
                                        aria-labelledby="account-dashboard-tab"
                                    >
                                        <div className="myaccount-dashboard">
                                            <p>
                                                From your account dashboard you
                                                can view your recent orders,
                                                manage your shipping and billing
                                                addresses and{" "}
                                                <a href="javascript:void(0)">
                                                    edit your password and
                                                    account details
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="account-orders"
                                        role="tabpanel"
                                        aria-labelledby="account-orders-tab"
                                    >
                                        <div className="myaccount-orders">
                                            <h4 className="small-title">
                                                MY ORDERS
                                            </h4>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <th>ORDER</th>
                                                            <th>DATE</th>
                                                            <th>STATUS</th>
                                                            <th>TOTAL</th>
                                                            <th></th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a
                                                                    className="account-order-id"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    #5364
                                                                </a>
                                                            </td>
                                                            <td>
                                                                Mar 27, 2023
                                                            </td>
                                                            <td>On Hold</td>
                                                            <td>
                                                                £162.00 for 2
                                                                items
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="umino-btn umino-btn_dark umino-btn_sm"
                                                                >
                                                                    <span>
                                                                        View
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a
                                                                    className="account-order-id"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    #5356
                                                                </a>
                                                            </td>
                                                            <td>
                                                                Mar 27, 2023
                                                            </td>
                                                            <td>On Hold</td>
                                                            <td>
                                                                £162.00 for 2
                                                                items
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="javascript:void(0)"
                                                                    className="umino-btn umino-btn_dark umino-btn_sm"
                                                                >
                                                                    <span>
                                                                        View
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="account-address"
                                        role="tabpanel"
                                        aria-labelledby="account-address-tab"
                                    >
                                        <div className="myaccount-address">
                                            <p>
                                                The following addresses will be
                                                used on the checkout page by
                                                default.
                                            </p>
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="small-title">
                                                        BILLING ADDRESS
                                                    </h4>
                                                    <address>
                                                        1234 Heaven Stress,
                                                        Beverly Hill OldYork
                                                        UnitedState of Lorem
                                                    </address>
                                                </div>
                                                <div className="col">
                                                    <h4 className="small-title">
                                                        SHIPPING ADDRESS
                                                    </h4>
                                                    <address>
                                                        1234 Heaven Stress,
                                                        Beverly Hill OldYork
                                                        UnitedState of Lorem
                                                    </address>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="account-details"
                                        role="tabpanel"
                                        aria-labelledby="account-details-tab"
                                    >
                                        <div className="myaccount-details">
                                            <form
                                                action="#"
                                                className="umino-form"
                                            >
                                                <div className="umino-form-inner">
                                                    <div className="single-input single-input-half">
                                                        <label htmlFor="account-details-firstname">
                                                            First Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="account-details-firstname"
                                                        />
                                                    </div>
                                                    <div className="single-input single-input-half">
                                                        <label htmlFor="account-details-lastname">
                                                            Last Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="account-details-lastname"
                                                        />
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="account-details-email">
                                                            Email*
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="account-details-email"
                                                        />
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="account-details-oldpass">
                                                            Current
                                                            Password(leave blank
                                                            to leave unchanged)
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="account-details-oldpass"
                                                        />
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="account-details-newpass">
                                                            New Password (leave
                                                            blank to leave
                                                            unchanged)
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="account-details-newpass"
                                                        />
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="account-details-confpass">
                                                            Confirm New Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="account-details-confpass"
                                                        />
                                                    </div>
                                                    <div className="single-input">
                                                        <button
                                                            className="umino-btn umino-btn_dark"
                                                            type="submit"
                                                        >
                                                            <span>
                                                                SAVE CHANGES
                                                            </span>
                                                        </button>
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
            </main>
        </>
    );
}
