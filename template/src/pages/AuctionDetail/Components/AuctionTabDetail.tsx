import React from "react"
import { Jewelry } from "../../../models/Jewelry"
import { User } from "../../../models/User"
import { Auction } from "../../../models/Auction"
import { AuctionDetailHistory } from "./AuctionDetailHistory"
import { AuctionDetailJewelry } from "./AuctionDetailJewelry"

interface AuctionTabDetailProps {
    auction: Auction | null,
    jewelry: Jewelry | null,
    staff: User | null,
}

export const AuctionTabDetail: React.FC<AuctionTabDetailProps> = ({ auction, jewelry, staff }) => {
    return (
        <div className="sp-tab_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sp-product-tab_nav">
                            <div className="product-tab">
                                <ul className="nav product-menu">
                                    {auction?.state !== 'WAITING' &&
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
                                    <li>
                                        <a
                                            className={auction?.state === 'WAITING' ? `active` : ""}
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

                                {auction?.state !== 'WAITING' &&
                                    <AuctionDetailHistory auction={auction} />}
                                <AuctionDetailJewelry auction={auction} jewelry={jewelry} />
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