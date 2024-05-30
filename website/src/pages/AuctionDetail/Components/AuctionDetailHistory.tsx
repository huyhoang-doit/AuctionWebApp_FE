import React, { useEffect, useState } from "react";
import { Auction } from "../../../models/Auction";
import { AuctionHistory } from "../../../models/AuctionHistory";
import { getAuctionHistoriesByAuctionId } from "../../../api/AuctionHistoryAPI";
import { AuctionHistoryItem } from "./AuctionHistoryItem";

interface AuctionDetailHistoryProps {
    auction: Auction | null
}

export const AuctionDetailHistory: React.FC<AuctionDetailHistoryProps> = (props) => {
    const auctionId: number | null = props.auction ? props.auction.id : null;
    const [auctionHistories, setAuctionHistories] = useState<AuctionHistory[]>([])

    useEffect(() => {
        if (auctionId !== null) {
            getAuctionHistoriesByAuctionId(auctionId)
                .then((response) => {
                    setAuctionHistories(response.auctionHistoriesData);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        }
    }, [props.auction])

    return (<div
        id="history"
        className="tab-pane active show"
        role="tabpanel"
    >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                Hiển thị
                <select defaultValue={3} className="btn-group ms-1 me-1">
                    <option value={3} className="dropdown-item">3</option>
                    <option value={5} className="dropdown-item" >5</option>
                    <option value={10} className="dropdown-item" >10</option>
                </select>
                lượt trả giá
            </div>
            <span style={{ flex: "end" }}>
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    style={{ borderRadius: "10px", height: "35px", padding: "10px" }}
                />
            </span>
        </div>
        <table className="table table-bordered specification-inner_stuff mt-4">
            <thead>
                <tr>
                    <th className="col-4">
                        Người đặt giá
                    </th>
                    <th className="col-4"><b>Giá</b></th>
                    <th className="col-4"><b>Thời gian</b></th>
                </tr>
            </thead>
            <AuctionHistoryItem auctionHistories={auctionHistories} />
        </table>
    </div>
    )
}