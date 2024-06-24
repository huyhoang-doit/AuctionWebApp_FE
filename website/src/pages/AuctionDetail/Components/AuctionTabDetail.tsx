import React, { useContext, useEffect, useState } from "react"
import { Jewelry } from "../../../models/Jewelry"
import { User } from "../../../models/User"
import { Auction } from "../../../models/Auction"
import { AuctionDetailHistory } from "./AuctionDetailHistory"
import { AuctionDetailJewelry } from "./AuctionDetailJewelry"
import { AuctionHistory } from "../../../models/AuctionHistory"
import Stomp from "stompjs";
import { UserContext } from "../../../hooks/useContext"
import { AuctionRegistrationUser } from "./AuctionRegistrationUser"
import { getUserRegistrationByAuction } from "../../../api/UserAPI"

interface AuctionTabDetailProps {
    isBid: boolean,
    auction: Auction | null,
    jewelry: Jewelry | null,
    staff: User | null,
    auctionHistories: AuctionHistory[],
    setBidPerPage: (bid: number) => void;
    stompClient: Stomp.Client | null;
    connected: boolean;
}

export const AuctionTabDetail: React.FC<AuctionTabDetailProps> = ({ stompClient, connected, isBid, auctionHistories, setBidPerPage, auction, jewelry, staff }) => {
    const [usersRegistration, setUsersRegistration] = useState<User[]>([]); // [1
    const context = useContext(UserContext);

    let user: User | null = null;
    if (context?.account) {
        user = context.account;
    }

    useEffect(() => {
        const fetchData = async () => {
            if (auction && user?.username === staff?.username) {
                const users = await getUserRegistrationByAuction(auction?.id);
                setUsersRegistration(users);
            }
        };
        fetchData();
    }, [auction, user, staff])

    return (
        <div className="sp-tab_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sp-product-tab_nav">
                            <div className="product-tab">
                                <ul className="nav product-menu">
                                    {isBid &&
                                        <li>
                                            <a
                                                className="active"
                                                data-bs-toggle="tab"
                                                href="#history"
                                            >
                                                <span>
                                                    Lịch sử đặt giá
                                                </span>
                                            </a>
                                        </li>
                                    }
                                    {isBid && user?.username === staff?.username &&
                                        <li>
                                            <a
                                                // className="active"
                                                data-bs-toggle="tab"
                                                href="#registration"
                                            >
                                                <span>
                                                    Danh sách đăng ký tham gia đấu giá
                                                </span>
                                            </a>
                                        </li>
                                    }
                                    <li>
                                        <a
                                            className={!isBid ? `active` : ""}
                                            data-bs-toggle="tab"
                                            href="#description"
                                        >
                                            <span>Mô tả tài sản</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-bs-toggle="tab"
                                            href="#specification"
                                        >
                                            <span>
                                                Thông tin đấu giá
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content umino-tab_content">

                                {isBid &&
                                    <AuctionDetailHistory staff={staff} stompClient={stompClient} connected={connected} setBidPerPage={setBidPerPage} auctionHistories={auctionHistories} auction={auction} />
                                }
                                {
                                    isBid &&
                                    user?.username === staff?.username &&
                                    <AuctionRegistrationUser usersRegistration={usersRegistration} auction={auction} />
                                }
                                <AuctionDetailJewelry isBid={isBid} auction={auction} jewelry={jewelry} />
                                <div
                                    id="specification"
                                    className="tab-pane"
                                    role="tabpanel"
                                >
                                    <table className="table table-bordered specification-inner_stuff">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        Tổ chức đấu giá tài sản:
                                                    </strong>
                                                </td>
                                                <td><b>Công ty đấu giá DGS</b></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        Đấu giá viên:
                                                    </strong>
                                                </td>
                                                <td><b>{staff?.fullName}</b></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        Địa chỉ:
                                                    </strong>
                                                </td>
                                                <td><b>Nhà văn hóa, Q.9, TP. Thủ Đức</b></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}