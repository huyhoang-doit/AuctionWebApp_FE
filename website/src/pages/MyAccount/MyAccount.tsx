import { Link } from "react-router-dom";
import useAccount from "../../hooks/useAccount";
import { MyAccountDetail } from "./Components/MyAccountDetail";
import { MyBidHistory } from "./Components/MyBidHistory";
import React, { useEffect, useState } from "react";
import { User } from "../../models/User";
import { TransactionHistory } from "./Components/TransactionHistory";
import { MyJewelryList } from "./Components/MyJewelryList";
import { LogoutModal } from "./Modal/Modal";

export default function MyAccount() {
    const token = localStorage.getItem("access_token");
    const user = useAccount(token);
    const [userState, setUserState] = useState<User | null>(user);
    // const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        setUserState(user);
    }, [user])

    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to={'/'} >Home</Link>
                            </li>
                            <li className="active">Tài khoản của tôi</li>
                        </ul>
                    </div>
                </div>
            </div>

            <main className="page-content">
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
                                            className="nav-link active"
                                            id="account-dashboard-tab"
                                            data-bs-toggle="tab"
                                            href="#account-details"
                                            role="tab"
                                            aria-controls="account-dashboard"
                                            aria-selected="true"
                                        >
                                            Thông tin cá nhân
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-orders-tab"
                                            data-bs-toggle="tab"
                                            href="#bid-activity"
                                            role="tab"
                                            aria-controls="account-orders"
                                            aria-selected="false"
                                        >
                                            Đấu giá của tôi
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-address-tab"
                                            data-bs-toggle="tab"
                                            href="#auction-activity"
                                            role="tab"
                                            aria-controls="account-address"
                                            aria-selected="false"
                                        >
                                            Lịch sử đấu giá
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="account-details-tab"
                                            data-bs-toggle="tab"
                                            href="#jewelry-request"
                                            role="tab"
                                            aria-controls="account-details"
                                            aria-selected="false"
                                        >
                                            Sản phẩm yêu cầu
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={""}
                                        >
                                            <LogoutModal />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9">
                                <div
                                    className="tab-content myaccount-tab-content"
                                    id="account-page-tab-content"
                                >
                                    <MyAccountDetail user={userState} setUser={setUserState} />
                                    <MyBidHistory username={user?.username} />
                                    <TransactionHistory user={user} />
                                    <MyJewelryList username={user?.username} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
